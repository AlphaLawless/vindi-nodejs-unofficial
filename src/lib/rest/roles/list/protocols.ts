import type { QueryParams } from '@/lib/rest/protocols'
import type { ApiResponse, Options } from '@/protocols'
import type { VindiClient } from '@/vindi-client'
import type { RolesReturn } from '../protocols'

export declare interface ProductListQueryParams extends QueryParams<string> {}

export declare interface RolesListRequest
  extends Exclude<RolesListData, 'requestOptions'> {
  config: VindiClient
}

export declare interface RolesListData {
  params?: ProductListQueryParams
  requestOptions?: Options
}

export declare interface RolesListResponse extends ApiResponse {
  roles: RolesReturn[]
}
