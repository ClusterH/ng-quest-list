import { FlexColumn, FlexRow, Typography } from '@/styles/components'
import { IQuestDetail } from '@/types'
import { useRouter } from 'next/router'
import { useTheme } from 'styled-components'
import { LeftDecoration, RightDecoration } from './Decorations'
import DifficultyItem from './DifficultyItem'
import ExpText from './ExpText'
import {
  CloseIconWrapper,
  ExpGradientBGWrapper,
  GoBackButton,
  QuestDetailImage,
  QuestDetailMainWrapper,
  QuestDetailOptionText,
  QuestDetailOptionTitle,
  QuestDetailTitle,
} from './styles'

const QuestDetail = ({ questDetail }: { questDetail: IQuestDetail }) => {
  const theme = useTheme()
  const { push } = useRouter()

  return (
    <QuestDetailMainWrapper>
      <QuestDetailImage src={questDetail.cover} width={1000} height={1000} alt={questDetail.title} />
      <CloseIconWrapper width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => push(`/`)}>
        <path d="M1.06067 1.93942L15.0607 15.9394M15.0607 2.06065L1.06067 16.0606" strokeWidth="3" />
      </CloseIconWrapper>
      <FlexRow gap="10px" justifyContent="center" padding="8px 0">
        <LeftDecoration />
        <QuestDetailTitle fontFamily="cinzel" textAlign="center">
          {questDetail.title}
        </QuestDetailTitle>
        <RightDecoration />
      </FlexRow>
      <FlexColumn height="100%" justifyContent="space-between">
        <FlexColumn alignItems="flex-start" gap="10px" padding="0px 16px">
          <FlexRow gap="12px">
            <FlexRow width="50%">
              <QuestDetailOptionTitle>{'Skill tree'}</QuestDetailOptionTitle>
              <QuestDetailOptionText>{questDetail.skillTree}</QuestDetailOptionText>
            </FlexRow>
            <FlexRow width="50%">
              <QuestDetailOptionTitle>{'Difficulty'}</QuestDetailOptionTitle>
              <DifficultyItem difficulty={questDetail.difficulty} />
            </FlexRow>
          </FlexRow>
          <FlexRow gap="12px">
            <FlexRow width="50%">
              <QuestDetailOptionTitle>{'Skill'}</QuestDetailOptionTitle>
              <QuestDetailOptionText>{questDetail.skill}</QuestDetailOptionText>
            </FlexRow>
            <FlexRow width="50%">
              <QuestDetailOptionTitle>{'Quest Type'}</QuestDetailOptionTitle>
              <QuestDetailOptionText>{questDetail.type}</QuestDetailOptionText>
            </FlexRow>
          </FlexRow>
          <Typography fontSize="sm" lineHeight="17px" color="grey" margin="14px 0 0">
            {questDetail.description}
          </Typography>
        </FlexColumn>
        <FlexColumn alignItems="flex-start" gap="7px" padding="16px">
          <Typography fontFamily="cinzel" fontSize="sm" fontWeight="bold" lineHeight="19px">
            {'QUEST REWARDS'}
          </Typography>
          <FlexRow justifyContent="space-between">
            <FlexColumn width="58px" height="58px" justifyContent="center" gap="6px" border={`1px solid ${theme.colors.gold}`}>
              <ExpGradientBGWrapper />
              <ExpText />
              <Typography fontFamily="cinzel" fontSize="tiny" fontWeight="bold" lineHeight="11px">
                {`+ ${questDetail.rewards.experience}`}
              </Typography>
            </FlexColumn>
            <GoBackButton onClick={() => push(`/`)}>{'GO BACK'}</GoBackButton>
          </FlexRow>
        </FlexColumn>
      </FlexColumn>
    </QuestDetailMainWrapper>
  )
}

export default QuestDetail
