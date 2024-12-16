import type { ApiResponse, Options } from '@/protocols'
import type { VindiClient } from '@/vindi-client'
import type { ProductItemBody, ProductItemReturn } from '../protocols'

export declare interface ProductItemCreateRequest
  extends Exclude<ProductItemCreateData, 'requestOptions'> {
  config: VindiClient
}

export declare interface ProductItemCreateData {
  body: ProductItemBody
  requestOptions?: Options
}

export declare interface ProductItemCreateResponse extends ApiResponse {
  product_item: ProductItemReturn
}
