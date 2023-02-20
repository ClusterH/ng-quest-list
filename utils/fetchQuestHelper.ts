import { IQuest, IQuestDetail } from '@/types'
import axios from 'axios'

export const fetchQuests = async (offset: number, limit: number): Promise<IQuest[]> => {
  try {
    const { data, status } = await axios.get(`api/quests?offset=${offset}&limit=${limit}`)
    if (status === 200) return data as IQuest[]
    return []
  } catch (error) {
    console.log(error)
    return []
  }
}

export const fetchQuestDetail = async (id: string): Promise<IQuestDetail | undefined> => {
  try {
    const { data, status } = await axios.get(`api/quests/${id}`)
    if (status === 200) return data as IQuestDetail
    return
  } catch (error) {
    console.log(error)
    return
  }
}
