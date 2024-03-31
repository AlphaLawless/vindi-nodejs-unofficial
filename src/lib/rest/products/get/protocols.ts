import type { ApiResponse, Options } from '@/protocols'
import type VindiClient from '../../../..'
import type { ProductsReturn } from '../protocols'

export declare interface ProductsGetRequest
  extends Exclude<ProductsGetData, 'requestOptions'> {
  config: VindiClient
}

export declare interface ProductsGetData {
  id: string | number
  requestOptions?: Options
}

export declare interface ProductsGetResponse extends ApiResponse {
  product: ProductsReturn
}
