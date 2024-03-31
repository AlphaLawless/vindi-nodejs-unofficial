import type { QueryParams } from '@/lib/rest/protocols'
import type { ApiResponse, Options } from '@/protocols'
import type { VindiClient } from '@/vindi-client'
import type { CustomerReturn } from '../protocols'

type SearchAttributes =
  | 'id'
  | 'name'
  | 'status'
  | 'code'
  | 'email'
  | 'registry_code'
  | 'created_at'
  | 'updated_at'

export declare interface CustomerListQueryParams
  extends QueryParams<SearchAttributes> {}

export declare interface CustomerListRequest
  extends Exclude<CustomerListData, 'requestOptions'> {
  config: VindiClient
}

export declare interface CustomerListData {
  params?: CustomerListQueryParams
  requestOptions?: Options
}

export declare interface CustomerListResponse extends ApiResponse {
  customers: CustomerReturn[]
}
