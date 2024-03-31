import type { QueryParams } from '@/lib/rest/protocols'
import type { ApiResponse, Options } from '@/protocols'
import type { VindiClient } from '@/vindi-client'
import type { PlanReturn } from '../protocols'

type SearchAttributes =
  | 'id'
  | 'name'
  | 'installments'
  | 'interval_count'
  | 'interval'
  | 'billing_cycles'
  | 'code'
  | 'status'
  | 'billing_trigger_day'
  | 'billing_trigger_type'
  | 'created_at'
  | 'updated_at'

export interface PlanListQueryParams extends QueryParams<SearchAttributes> {}

export interface PlanListRequest extends PlanListData {
  config: VindiClient
}

export interface PlanListData {
  params?: PlanListQueryParams
  requestOptions?: Options
}

export interface PlanListResponse extends ApiResponse {
  plans: PlanReturn[]
}
