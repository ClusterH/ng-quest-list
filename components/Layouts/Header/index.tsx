import { themeBreakPoint } from '@/styles/theme'
import Image from 'next/image'
import styled from 'styled-components'
import LOGO_IMG from '../../../public/logo.svg'

const HeaderContainer = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  padding: 10px 12px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black};
  z-index: 1;

  @media ${themeBreakPoint.tablet} {
    padding: 10px 36px;
  }
`

const Header = () => {
  return (
    <HeaderContainer>
      {/*Logo svg was detected as the largest Contentful Paint (LCP), https://nextjs.org/docs/api-reference/next/image#priority */}
      <Image src={LOGO_IMG} alt="main_logo" priority />
    </HeaderContainer>
  )
}

export default Header
