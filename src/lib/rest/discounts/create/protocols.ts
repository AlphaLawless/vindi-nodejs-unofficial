import type { ApiResponse, Options } from '@/protocols'
import type { VindiClient } from '@/vindi-client'
import type { DiscountBody, DiscountReturn } from '../protocols'

export declare interface DiscountCreateRequest
  extends Exclude<DiscountCreateData, 'requestOptions'> {
  config: VindiClient
}

export declare interface DiscountCreateData {
  body: DiscountBody
  requestOptions?: Options
}

export declare interface DiscountCreateResponse extends ApiResponse {
  discount: DiscountReturn
}
