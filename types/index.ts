export interface IQuest {
  id: number
  skillTree: string
  skill: string
  title: string
  difficulty: number
  experience: number
  gold: number
  type: string
  cover: string
}

export interface IQuestDetail extends IQuest {
  description: string
  rewards: {
    experience: number
    gold: number
  }
}
