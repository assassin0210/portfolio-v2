import { AnimateFromSide } from '@/shared/animate/AnimateFromSide'
import { Button } from '@/shared/ui/button/Button'
import { SectionHeader } from '@/shared/ui/SectionHeader'
import { P16 } from '@/shared/ui/Typography'

export const About = () => {
  return (
    <div className={''}>
      <AnimateFromSide type={'right'}>
        <SectionHeader>About</SectionHeader>
        <div className={'space-y-3'}>
          <P16>
            Back in 2019, I decided to try my hand at building user interfaces
            and have since immersed myself in the exciting world of coding and
            web development. Fast forward to today. I had the honor of creating
            software for an{' '}
            <a href={'https://zoftify.com/'} target={'_blank'} rel="noreferrer">
              <Button buttonType={'LINK'}>agency</Button>
            </a>
            , a{' '}
            <a
              target={'_blank'}
              href={'https://www.alert-software.com/'}
              rel="noreferrer"
            >
              <Button buttonType={'LINK'}>large company</Button>
            </a>
            , a startup and a{' '}
            <a
              target={'_blank'}
              href={'https://www.helium10.com/'}
              rel="noreferrer"
            >
              <Button buttonType={'LINK'}>huge corporation</Button>
            </a>
            .
          </P16>
          <P16>
            Currently, my primary focus is on developing my own skills and
            pursuing my dream team!
          </P16>
          <P16 className={'dark:text-white text-gray-500 font-medium'}>
            <i>What does my dream team look like?</i>
          </P16>
          <P16>
            My dream team consists of highly skilled and motivated individuals
            who share a passion for pushing boundaries and driving innovation in
            frontend development. They are collaborative, supportive, and
            encourage open communication and idea exchange. In this team, there
            is a strong emphasis on continuous learning and professional growth,
            with opportunities to explore emerging technologies and stay at the
            forefront of industry trends.
          </P16>
          <P16>
            Additionally, my dream team values diversity, recognizing the
            importance of different perspectives and experiences in creating
            exceptional user experiences. Together, we work on exciting and
            meaningful projects that have a positive impact on users' lives.
          </P16>
          <P16>
            Ultimately, my dream team fosters a positive and inspiring work
            environment, where creativity flourishes, and each team member's
            contributions are valued and recognized. Together, we strive for
            excellence and exceed expectations in delivering high-quality
            frontend solutions.
          </P16>
          <P16 className={'dark:text-white text-gray-500 font-medium'}>
            <i>Why have I found myself in search of a new team?</i>
          </P16>
          <ul className={'list-disc text-gray-100 pl-2 space-y-2'}>
            <li>
              <P16>
                I left my previous position to focus on my personal and
                professional development. I aim to expand my skill set and gain
                new experiences that will make me a more effective and valuable
                frontend developer.
              </P16>
            </li>
            <li>
              <P16>
                I made the decision to leave as my previous company didn't
                provide sufficient opportunities for growth and advancement. I
                strive to work in an environment that supports my ambitions and
                offers engaging and meaningful projects.
              </P16>
            </li>
          </ul>
        </div>
      </AnimateFromSide>
    </div>
  )
}
