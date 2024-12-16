import type { ApiResponse, Options } from '@/protocols'
import type { VindiClient } from '@/vindi-client'
import type { QueryParams } from '../../protocols'
import type { PeriodReturn } from '../protocols'

type SearchAttributes =
  | 'id'
  | 'billing_at'
  | 'subscription_id'
  | 'start_at'
  | 'end_at'
  | 'cycle'
  | 'duration'
  | 'created_at'
  | 'updated_at'

export declare interface PeriodListQueryParams
  extends QueryParams<SearchAttributes> {}

export declare interface PeriodListRequest
  extends Exclude<PeriodListData, 'requestOptions'> {
  config: VindiClient
}

export declare interface PeriodListData {
  params?: PeriodListQueryParams
  requestOptions?: Options
}

export declare interface PeriodListResponse extends ApiResponse {
  periods: PeriodReturn[]
}
