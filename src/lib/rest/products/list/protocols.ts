import type { QueryParams } from '@/lib/rest/protocols'
import type { ApiResponse, Options } from '@/protocols'
import type { VindiClient } from '@/vindi-client'
import type { ProductsReturn } from '../protocols'

type SearchAttributes =
  | 'id'
  | 'name'
  | 'code'
  | 'status'
  | 'invoice'
  | 'unit'
  | 'pricing_schema_id'
  | 'schema_type'
  | 'price'
  | 'created_at'
  | 'updated_at'

export declare interface ProductListQueryParams
  extends QueryParams<SearchAttributes> {}

export declare interface ProductsListRequest
  extends Exclude<ProductsListData, 'requestOptions'> {
  config: VindiClient
}

export declare interface ProductsListData {
  params?: ProductListQueryParams
  requestOptions?: Options
}

export declare interface ProductsListResponse extends ApiResponse {
  products: ProductsReturn[]
}
