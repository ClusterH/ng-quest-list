import QuestCard from '@/components/QuestCard'
import { Typography } from '@/styles/components'
import { themeBreakPoint, themeSize } from '@/styles/theme'
import { IQuest } from '@/types'
import { fetchQuests } from '@/utils'
import { dehydrate, DehydratedState, QueryClient, useInfiniteQuery } from '@tanstack/react-query'
import { GetStaticProps } from 'next'
import InfiniteScroll from 'react-infinite-scroll-component'
import styled from 'styled-components'

const MainWrapper = styled.main`
  width: 100%;
  max-width: ${themeSize.laptop};
  margin: 56px auto;
  padding: 0 4px;
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing.s};

  @media ${themeBreakPoint.tablet} {
    margin: 128px auto;
    padding: 0 28px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media ${themeBreakPoint.laptop} {
    margin: 200px auto;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`

const PageWrapper = ({ page }: { page: IQuest[] }) => {
  return (
    <>
      {page.map((quest: IQuest, index) => (
        <QuestCard key={index} quest={quest} />
      ))}
    </>
  )
}

const QUEST_PER_PAGE = 10
const TOTAL_QUEST = 35 // This value should be come from live api in real experience

const Home = () => {
  const { data, isSuccess, fetchNextPage, hasNextPage, isLoading, isError } = useInfiniteQuery(
    ['infiniteQuests'],
    ({ pageParam = { offset: 1, limit: QUEST_PER_PAGE } }) => fetchQuests(pageParam.offset, pageParam.limit),
    {
      getNextPageParam: (lastPage, pages) => {
        // Considered case when last page length could be less than QUEST_PER_PAGE
        // i.e. Total quest is not multiple of QUEST_PER_PAGE
        const totalFetchedQuest = (pages.length - 1) * QUEST_PER_PAGE + lastPage.length
        const remainedQuest = TOTAL_QUEST - totalFetchedQuest

        if (totalFetchedQuest < TOTAL_QUEST) {
          return { offset: pages.length + 1, limit: remainedQuest < QUEST_PER_PAGE ? remainedQuest : QUEST_PER_PAGE }
        }
      },
    }
  )

  if (isLoading)
    return (
      <MainWrapper>
        <Typography>{'Loading...'}</Typography>
      </MainWrapper>
    )

  // This logic can be implemented with react-toast to show notification messages with relavant texts
  if (!isSuccess || isError || !data)
    return (
      <MainWrapper>
        <Typography>{'Something went wrong, please try refresh to fetch again'}</Typography>
      </MainWrapper>
    )

  if (!data) return null

  return (
    <InfiniteScroll
      dataLength={data.pages.length * QUEST_PER_PAGE}
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={<h4>Loading...</h4>}
    >
      <MainWrapper>
        {data.pages.map((page: IQuest[], index) => (
          <PageWrapper key={index} page={page} />
        ))}
      </MainWrapper>
    </InfiniteScroll>
  )
}

export const getStaticProps: GetStaticProps<{ dehydratedState: DehydratedState }> = async () => {
  const offset = 1
  const queryClient = new QueryClient()
  await queryClient.prefetchInfiniteQuery(['infiniteQuests'], () => fetchQuests(offset, QUEST_PER_PAGE))

  return { props: { dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))) } }
}

export default Home
