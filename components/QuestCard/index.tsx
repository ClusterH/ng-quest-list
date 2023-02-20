import { FlexColumn, FlexRow, Typography } from '@/styles/components'
import { IQuest } from '@/types'
import { useRouter } from 'next/router'
import DifficultyItem from './DifficultyItem'
import { CardImage, MainWrapper, OptionText, OptionTitle } from './styles'

const QuestCard = ({ quest }: { quest: IQuest }) => {
  const { push } = useRouter()

  return (
    <MainWrapper onClick={() => push(`/${quest.id}`)}>
      {/*Some was detected as the largest Contentful Paint (LCP), https://nextjs.org/docs/api-reference/next/image#priority */}
      <CardImage src={quest.cover} width={1000} height={1000} alt={quest.title} priority />
      <Typography fontFamily="cinzel" fontSize="sm" lineHeight="19px" margin="4px 6px 8px">
        {'Dellegate Call Detection'}
      </Typography>
      <FlexColumn alignItems="flex-start" gap="10px" padding="6px">
        <FlexRow gap="12px">
          <FlexRow width="50%">
            <OptionTitle>{'Skill tree'}</OptionTitle>
            <OptionText color="blue">{quest.skillTree}</OptionText>
          </FlexRow>
          <FlexRow width="50%">
            <OptionTitle>{'Difficulty'}</OptionTitle>
            <DifficultyItem difficulty={quest.difficulty} />
          </FlexRow>
        </FlexRow>
        <FlexRow gap="12px">
          <FlexRow width="50%">
            <OptionTitle>{'Skill'}</OptionTitle>
            <OptionText>{quest.skill}</OptionText>
          </FlexRow>
          <FlexRow width="50%">
            <OptionTitle>{'Experience'}</OptionTitle>
            <OptionText>{quest.experience}</OptionText>
          </FlexRow>
        </FlexRow>
        <FlexRow gap="12px">
          <FlexRow width="50%">
            <OptionTitle>{'Type'}</OptionTitle>
            <OptionText>{quest.type}</OptionText>
          </FlexRow>
          <FlexRow width="50%">
            <OptionTitle>{'Gold'}</OptionTitle>
            <OptionText>{quest.gold}</OptionText>
          </FlexRow>
        </FlexRow>
      </FlexColumn>
    </MainWrapper>
  )
}

export default QuestCard
