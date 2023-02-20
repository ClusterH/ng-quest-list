import { FlexColumn, Typography } from '@/styles/components'
import { themeBreakPoint, themeFontFamily, themeTypography } from '@/styles/theme'
import Image from 'next/image'
import styled from 'styled-components'

export const MainWrapper = styled(FlexColumn)`
  align-items: flex-start;
  backgroundcolor: ${({ theme }) => theme.colors.lighterBlack};
  padding: 4px;
  border-radius: ${({ theme }) => theme.radius.xl};
  border: 1px solid ${({ theme }) => theme.colors.darkGrey50};
  cursor: pointer;
  transition: border 300ms ease-in-out;

  &:hover {
    border-color: ${({ theme }) => theme.colors.gold};
  }
`
export const QuestDetailMainWrapper = styled(MainWrapper)`
  width: 100%;
  max-width: 755px;
  height: calc(100vh - 176px);
  margin: 88px auto;
  cursor: default;

  &:hover {
    border-color: ${({ theme }) => theme.colors.darkGrey50};
  }
`
export const CardImage = styled(Image)`
  width: 100%;
  height: auto;
  max-height: 160px;
  border-radius: ${({ theme }) => theme.radius.l};
`
export const QuestDetailImage = styled(CardImage)`
  max-height: 270px;
  border-radius: ${({ theme }) => `${theme.radius.l} ${theme.radius.l} 0 0`};
`
export const QuestDetailTitle = styled(Typography)`
  font-size: ${themeTypography.sm};
  line-height: 19px;

  @media ${themeBreakPoint.tablet} {
    font-size: ${themeTypography.xl};
    line-height: 27px;
  }
`
export const OptionText = styled(Typography)`
  display: inline-block;
  width: 50%;
  font-size: ${themeTypography.xs};
  line-height: 14px;
`
export const OptionTitle = styled(OptionText)`
  color: ${({ theme }) => theme.colors.gold};
`
export const QuestDetailOptionText = styled(OptionText)`
  font-size: ${themeTypography.xs};
  line-height: 14px;

  @media ${themeBreakPoint.mobileL} {
    font-size: ${themeTypography.sm};
    line-height: 17px;
  }
`
export const QuestDetailOptionTitle = styled(QuestDetailOptionText)`
  color: ${({ theme }) => theme.colors.gold};
`
export const ExpGradientBGWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50%;
  background: linear-gradient(180deg, rgba(7, 15, 29, 0) 0%, rgba(54, 77, 137, 0.4) 100%);
`
export const GoBackButton = styled(FlexColumn)`
  width: 93px;
  height: 35px;
  justify-content: center;
  border-radius: 2.5px;
  border: 1px solid ${({ theme }) => theme.colors.gold};
  cursor: pointer;
  font-family: ${themeFontFamily.cinzel};
  font-weight: bold;
  font-size: ${themeTypography.xs};
  line-height: 16px;
  transition: background-color 300ms ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gold};
    color: ${({ theme }) => theme.colors.black};
  }
`
export const CloseIconWrapper = styled.svg`
  position: absolute;
  top: 11px;
  right: 11px;
  stroke: ${({ theme }) => theme.colors.lightGrey};
  cursor: pointer;
  transition: stroke 300ms ease-in-out;

  &:hover {
    stroke: ${({ theme }) => theme.colors.gold};
    transform: scale(1.1);
  }
`
