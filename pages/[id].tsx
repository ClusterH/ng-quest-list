import QuestDetail from '@/components/QuestCard/QuestDetail'
import { QuestDetailMainWrapper } from '@/components/QuestCard/styles'
import { Typography } from '@/styles/components'
import { fetchQuestDetail } from '@/utils'
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'

interface IParams extends ParsedUrlQuery {
  id: string
}

const QuestDetailContainer = () => {
  const {
    query: { id },
  } = useRouter()
  const questId = typeof id === 'string' ? id : ''
  const { isSuccess, data: questDetail, isLoading, isError } = useQuery(['questDetail', id], () => fetchQuestDetail(questId))

  if (isLoading)
    return (
      <QuestDetailMainWrapper>
        <Typography>{'Loading...'}</Typography>
      </QuestDetailMainWrapper>
    )

  if (!isSuccess || !questDetail || isError)
    return (
      <QuestDetailMainWrapper>
        <Typography>{'Something went wrong, please try refresh to fetch again'}</Typography>
      </QuestDetailMainWrapper>
    )

  return <QuestDetail questDetail={questDetail} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as IParams

  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(['questDetail', id], () => fetchQuestDetail(id))

  return { props: { dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))) } }
}

export default QuestDetailContainer
