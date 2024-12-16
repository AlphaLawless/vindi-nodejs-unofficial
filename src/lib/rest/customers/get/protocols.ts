import type { ApiResponse, Options } from '@/protocols'
import type { VindiClient } from '@/vindi-client'
import type { CustomerReturn } from '../protocols'

export declare interface CustomerGetRequest
  extends Exclude<CustomerGetData, 'requestOptions'> {
  config: VindiClient
}

export declare interface CustomerGetData {
  id: string | number
  requestOptions?: Options
}

export declare interface CustomerGetResponse extends ApiResponse {
  customer: CustomerReturn
}
