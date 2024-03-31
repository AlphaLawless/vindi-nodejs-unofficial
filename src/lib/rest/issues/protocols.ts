export interface IssueReturn {
  id: number
  issue_type: string
  status: string
  item_type: string
  item_id: string
  data: string
  created_at: string
  updated_at: string
  customer: Customer
}

export interface Customer {
  id: number
  name: string
  email: string
  code: string
}
