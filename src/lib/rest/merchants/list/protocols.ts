import type { QueryParams } from '@/lib/rest/protocols'
import type { ApiResponse, Options } from '@/protocols'
import type { VindiClient } from '@/vindi-client'
import type { MerchantReturn } from '../protocols'

type SearchAttributes =
  | 'id'
  | 'name'
  | 'status'
  | 'code'
  | 'email'
  | 'registry_code'
  | 'created_at'
  | 'updated_at'

export declare interface MerchantListQueryParams
  extends QueryParams<SearchAttributes> {}

export declare interface MerchantListRequest
  extends Exclude<MerchantListData, 'requestOptions'> {
  config: VindiClient
}

export declare interface MerchantListData {
  params?: MerchantListQueryParams
  requestOptions?: Options
}

export declare interface MerchantListResponse extends ApiResponse {
  merchants: MerchantReturn[]
}
