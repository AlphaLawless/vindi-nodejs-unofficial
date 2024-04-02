import type { ApiResponse, Options } from '@/protocols'
import type { VindiClient } from '@/vindi-client'
import type { ProductItemReturn } from '../protocols'

export declare interface ProductItemGetRequest
  extends Exclude<ProductItemGetData, 'requestOptions'> {
  config: VindiClient
}

export declare interface ProductItemGetData {
  id: string | number
  requestOptions?: Options
}

export declare interface ProductItemGetResponse
  extends ApiResponse,
    ProductItemReturn {}
