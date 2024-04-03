import type { ICustomer } from '../customers/protocols'

export declare interface IssueReturn {
  id: number
  issue_type: string
  status: string
  item_type: string
  item_id: string
  data: string
  created_at: string
  updated_at: string
  customer: ICustomer
}
