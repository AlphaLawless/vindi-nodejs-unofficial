import type { ApiResponse, Options } from '@/protocols'
import type { VindiClient } from '@/vindi-client'
import type { ProductItemReturn } from '../protocols'

export declare interface ProductItemRemoveRequest
  extends Exclude<ProductItemRemoveData, 'requestOptions'> {
  config: VindiClient
}

export declare interface ProductItemRemoveData {
  id: string | number
  requestOptions?: Options
}

export declare interface ProductItemRemoveResponse
  extends ApiResponse,
    ProductItemReturn {}
