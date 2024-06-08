import { Resume } from '@/features/experience/Resume'
import { intExpData } from '@/features/interestingExperience/data'
import { AnimationOneByOne } from '@/shared/animate/AnimationOneByOne'
import { useAnimateInTurn } from '@/shared/animate/useAnimateInTurn'
import { SectionHeader } from '@/shared/ui/SectionHeader'
import { H3, P14 } from '@/shared/ui/Typography'

export const InterestingExperience = () => {
  const { wrapperRef, hoverId, getProps } = useAnimateInTurn()
  return (
    <AnimationOneByOne>
      <section className={' mt-4 laptop:mt-20 relative'}>
        <SectionHeader>Interesting Experience</SectionHeader>
        <div className={'flex flex-col gap-4'} ref={wrapperRef}>
          <H3>
            During my tenure at School Bus Manager, Zoftify, and Helium10, I
            encountered a range of interesting and challenging tasks that
            required a creative approach and deep knowledge in frontend
            development.
          </H3>

          <ol className="list-disc text-gray-100">
            {intExpData.map((item, index) => (
              <li {...getProps(index)} key={index}>
                <P14 className={'text-gray-100 mt-2'}> {item}</P14>
              </li>
            ))}
          </ol>

          <H3>
            These experiences not only allowed me to expand my knowledge and
            skills in frontend development but also taught me to solve complex
            problems, collaborate in teams, and find creative solutions.
          </H3>
        </div>
        <Resume />
      </section>
    </AnimationOneByOne>
  )
}
