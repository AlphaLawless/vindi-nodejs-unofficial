import type { ApiResponse, Options } from '@/protocols'
import type { VindiClient } from '@/vindi-client'
import type { DiscountReturn } from '../protocols'

export declare interface DiscountCancelRequest
  extends Exclude<DiscountCancelData, 'requestOptions'> {
  config: VindiClient
}

export declare interface DiscountCancelData {
  id: string | number
  requestOptions?: Options
}

export declare interface DiscountCancelResponse
  extends ApiResponse,
    DiscountReturn {}
