import type { QueryParams } from '@/lib/rest/protocols'
import type { ApiResponse, Options } from '@/protocols'
import type { VindiClient } from '@/vindi-client'
import type { BillsReturn } from '../protocols'

type SearchAttributes =
  | 'id'
  | 'code'
  | 'installments'
  | 'period_id'
  | 'subscription_id'
  | 'customer_id'
  | 'amount'
  | 'status'
  | 'payment_method_id'
  | 'seen_at'
  | 'due_at'
  | 'billing_at'
  | 'created_at'
  | 'updated_at'

export declare interface BillsListQueryParams
  extends QueryParams<SearchAttributes> {}

export declare interface BillsListRequest
  extends Exclude<BillsListData, 'requestOptions'> {
  config: VindiClient
}

export declare interface BillsListData {
  params?: BillsListQueryParams
  requestOptions?: Options
}

export declare interface BillsListResponse extends ApiResponse {
  bills: BillsReturn[]
}
