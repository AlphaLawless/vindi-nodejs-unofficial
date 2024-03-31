import type { QueryParams } from '@/lib/rest/protocols'
import type { ApiResponse, Options } from '@/protocols'
import type { VindiClient } from '@/vindi-client'
import type { IssueReturn } from '../protocols'

type SearchAttributes =
  | 'id'
  | 'status'
  | 'item_id'
  | 'item_type'
  | 'issue_type'
  | 'customer_id'
  | 'created_at'
  | 'updated_at'

export declare interface IssueListQueryParams
  extends QueryParams<SearchAttributes> {}

export declare interface IssueListRequest
  extends Exclude<IssueListData, 'requestOptions'> {
  config: VindiClient
}

export declare interface IssueListData {
  params?: IssueListQueryParams
  requestOptions?: Options
}

export declare interface IssueListResponse extends ApiResponse {
  issues: IssueReturn[]
}
