import { execFileSync } from 'node:child_process'
import { existsSync, readdirSync } from 'node:fs'
import { homedir } from 'node:os'
import { join, resolve } from 'node:path'

const BASE_URL = process.env.CV_BASE_URL ?? 'http://localhost:1111'
const LOCALES = ['en', 'ru'] as const

const findPlaywrightHeadlessShell = (): string | undefined => {
  const cacheDir = join(homedir(), 'Library', 'Caches', 'ms-playwright')
  if (!existsSync(cacheDir)) return undefined
  const latest = readdirSync(cacheDir)
    .filter((name) => name.startsWith('chromium_headless_shell-'))
    .sort()
    .at(-1)
  if (!latest) return undefined
  const dir = join(cacheDir, latest)
  const platformDir = readdirSync(dir).find((name) =>
    name.startsWith('chrome-headless-shell-')
  )
  return platformDir
    ? join(dir, platformDir, 'chrome-headless-shell')
    : undefined
}

const CANDIDATES = [
  process.env.CHROME_BIN,
  findPlaywrightHeadlessShell(),
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
].filter((path): path is string => Boolean(path))

const browser = CANDIDATES.find((path) => existsSync(path))
if (!browser) {
  console.error(
    'No Chromium binary found. Set CHROME_BIN or install Playwright browsers.'
  )
  process.exit(1)
}

for (const locale of LOCALES) {
  const url = locale === 'en' ? `${BASE_URL}/cv` : `${BASE_URL}/${locale}/cv`
  const out = resolve('public', `Alex_Sokolov_CV_${locale}.pdf`)
  execFileSync(
    browser,
    [
      '--headless',
      '--disable-gpu',
      '--no-pdf-header-footer',
      '--virtual-time-budget=3000',
      `--print-to-pdf=${out}`,
      url,
    ],
    { stdio: 'pipe', timeout: 60_000 }
  )
  console.warn(`PDF written: ${out}`)
}
