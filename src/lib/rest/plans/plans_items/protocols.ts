import type { QueryParams } from '@/lib/rest/protocols'
import type { ApiResponse, Options } from '@/protocols'
import type { VindiClient } from '@/vindi-client'
import type { PlanItem } from '../protocols'

export interface PlanItemsQueryParams
  extends Omit<QueryParams<never>, 'query' | 'sort_by' | 'sort_order'> {}

export interface PlanItemsRequest
  extends Exclude<PlanItemsData, 'requestOptions'> {
  config: VindiClient
}

export interface PlanItemsData {
  id: string | number
  params?: PlanItemsQueryParams
  requestOptions?: Options
}

export interface PlanItemsResponse extends ApiResponse {
  plans: PlanItem[]
}
