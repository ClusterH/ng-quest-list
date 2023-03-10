import { FlexRow } from '@/styles/components'
import { useTheme } from 'styled-components'

const DIFFICULTY_ARRAY = [...Array(5).keys()]

const DifficultyItem = ({ difficulty }: { difficulty: number }) => {
  const theme = useTheme()

  return (
    <FlexRow width="fit-content" gap="3px">
      {DIFFICULTY_ARRAY.map((level) => (
        <svg key={level} width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M2.76036 1.17309H1.63411L6.9134 6.45202L7.49999 5.90067M10.4095 9.45514L9.91673 9.94784C9.86246 10.0022 9.798 10.0454 9.72704 10.0748C9.65608 10.1042 9.58001 10.1194 9.50319 10.1194C9.42636 10.1194 9.35029 10.1042 9.27933 10.0748C9.20837 10.0454 9.14391 10.0022 9.08964 9.94784L7.25949 8.11782L5.68743 9.67803L4.86034 8.851L5.6933 8.0181L0.460938 2.7861V0H3.24723L8.47959 5.232L9.31254 4.39911L10.1396 5.22614L8.57344 6.79222L10.4036 8.62225C10.6382 8.85687 10.6382 9.22639 10.4095 9.45514Z"
            fill={theme.colors.gold}
            fillOpacity={level >= difficulty ? '0.3' : '1'}
          />
        </svg>
      ))}
    </FlexRow>
  )
}

export default DifficultyItem
