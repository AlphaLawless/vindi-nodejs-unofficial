import type { QueryParams } from '@/lib/rest/protocols'
import type { ApiResponse, Options } from '@/protocols'
import type { VindiClient } from '@/vindi-client'
import type { ChargesReturn } from '../protocols'

type SearchAttributes =
  | 'id'
  | 'customer_id'
  | 'bill_id'
  | 'amount'
  | 'payment_method_id'
  | 'due_at'
  | 'paid_at'
  | 'installments'
  | 'attempt_count'
  | 'next_attempt'
  | 'status'
  | 'created_at'
  | 'updated_at'

type SortBy = 'created_at' | 'updated_at' | 'due_at' | 'paid_at'

export declare interface ChargesListQueryParams
  extends QueryParams<SearchAttributes, SortBy> {}

export declare interface ChargesListRequest
  extends Exclude<ChargesListData, 'requestOptions'> {
  config: VindiClient
}

export declare interface ChargesListData {
  params?: ChargesListQueryParams
  requestOptions?: Options
}

export declare interface ChargesListResponse extends ApiResponse {
  charges: ChargesReturn[]
}
