import type { ApiResponse, Options } from '@/protocols'
import type { VindiClient } from '@/vindi-client'
import type { ProductsBody, ProductsReturn } from '../protocols'

export declare interface ProductsCreateRequest
  extends Exclude<ProductsCreateData, 'requestOptions'> {
  config: VindiClient
}

export declare interface ProductsCreateData {
  body: ProductsBody
  requestOptions?: Options
}

export declare interface ProductsCreateResponse extends ApiResponse {
  products: ProductsReturn
}
