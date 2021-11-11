import { CurrencyValue } from './money.model'

export interface Platforms {
  instagram: boolean | string
  facebook: boolean | string
  twitter: boolean | string
}

export interface UserTasks {
  title: string
  description: string
  budget: CurrencyValue
  platforms: Array<string> | Platforms
  filesIds: Array<null>
}


