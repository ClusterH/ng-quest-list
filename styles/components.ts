import styled, { DefaultTheme } from 'styled-components'
import { themeFontFamily, themeFontWeight, themeTypography } from './theme'
import { TFlexAlignItems, TFlexJustifyContents } from './types'

const FlexBox = styled.div<{
  justifyContent?: TFlexJustifyContents | TFlexAlignItems
  alignItems?: TFlexAlignItems | TFlexJustifyContents
  gap?: string
  padding?: string
  margin?: string
  width?: string
  height?: string
  backgroundColor?: string
  borderRadius?: string
  border?: string
  isWrap?: boolean
}>`
  position: relative;
  display: flex;
  flex-wrap: ${({ isWrap }) => (isWrap ? 'wrap' : 'nowrap')};
  justify-content: ${({ justifyContent }) => (justifyContent ? justifyContent : 'flex-start')};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : 'center')};
  gap: ${({ gap }) => (gap ? gap : '0px')};
  padding: ${({ padding }) => (padding ? padding : '0')};
  margin: ${({ margin }) => (margin ? margin : '0')};
  width: ${({ width }) => width ?? '100%'};
  height: ${({ height }) => height ?? 'auto'};
  background-color: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : 'transparent')};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : 'none')};
  border: ${({ border }) => (border ? border : 'none')};
`

export const FlexRow = styled(FlexBox)`
  flex-direction: row;
`
export const FlexColumn = styled(FlexBox)`
  flex-flow: column nowrap;
`

export const Typography = styled.span<{
  color?: keyof DefaultTheme['colors']
  fontSize?: keyof typeof themeTypography
  fontWeight?: keyof typeof themeFontWeight
  fontFamily?: keyof typeof themeFontFamily
  lineHeight?: string
  opacity?: number
  textAlign?: string
  margin?: string
}>`
  color: ${({ color, theme }) => (color ? theme.colors[color] : theme.colors.white)};
  font-size: ${({ fontSize }) => (fontSize ? themeTypography[fontSize] : themeTypography.base)};
  font-weight: ${({ fontWeight }) => (fontWeight ? themeFontWeight[fontWeight] : themeFontWeight.regular)};
  font-family: ${({ fontFamily }) => (fontFamily ? themeFontFamily[fontFamily] : themeFontFamily.lato)};
  line-height: ${({ lineHeight }) => lineHeight ?? '150%'};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'start')};
  opacity: ${({ opacity }) => (opacity ? opacity : 1)};
  margin: ${({ margin }) => (margin ? margin : '0px')};
`
