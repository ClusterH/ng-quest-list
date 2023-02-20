// theme.ts
import { DefaultTheme } from 'styled-components'

export const defaultTheme = {
  radius: {
    s: '3px',
    m: '5px',
    l: '7px',
    xl: '10px',
  },
  spacing: {
    unset: 'unset',
    '6xs': '2px',
    '5xs': '4px',
    '4xs': '8px',
    '3xs': '12px',
    '2xs': '16px',
    xs: '20px',
    s: '24px',
    m: '32px',
    l: '40px',
    xl: '48px',
    '2xl': '64px',
    '3xl': '80px',
    '4xl': '100px',
    '5xl': '120px',
    '6xl': '140px',
    '7xl': '160px',
    '8xl': '180px',
  },
}

export const darkTheme: DefaultTheme = {
  ...defaultTheme,
  colors: {
    // set theme colors
    gold: '#BEA77E',
    white: '#FFFFFF',
    grey: '#8E8E8E',
    lightGrey: '#CACACA',
    darkGrey: '#333030',
    darkGrey50: '#3A3A3A80',
    lighterBlack: '#1D1C1A',
    black: '#151515',
    blue: '#98A7F5',
    green: '#93D788',
  },
}

export const themeTypography = {
  tiny: '8px',
  xs: '12px',
  sm: '14px',
  base: '16px',
  lg: '18px',
  xl: '20px',
}

export const themeFontWeight = {
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
}

export const themeFontFamily = {
  cinzel: 'var(--cinzel-font)',
  lato: 'var(--lato-font)',
}

export const themeSize = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1044px',
  laptopL: '1440px',
  desktop: '2560px',
}

export const themeBreakPoint = {
  mobileS: `(min-width: ${themeSize.mobileS})`,
  mobileM: `(min-width: ${themeSize.mobileM})`,
  mobileL: `(min-width: ${themeSize.mobileL})`,
  tablet: `(min-width: ${themeSize.tablet})`,
  laptop: `(min-width: ${themeSize.laptop})`,
  laptopL: `(min-width: ${themeSize.laptopL})`,
  desktop: `(min-width: ${themeSize.desktop})`,
  desktopL: `(min-width: ${themeSize.desktop})`,
}
