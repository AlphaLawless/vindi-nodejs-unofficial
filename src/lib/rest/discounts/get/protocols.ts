import type { ApiResponse, Options } from '@/protocols'
import type { VindiClient } from '@/vindi-client'
import type { DiscountReturn } from '../protocols'

export declare interface DiscountGetRequest
  extends Exclude<DiscountGetData, 'requestOptions'> {
  config: VindiClient
}

export declare interface DiscountGetData {
  id: string | number
  requestOptions?: Options
}

export declare interface DiscountGetResponse
  extends ApiResponse,
    DiscountReturn {}
