import type { ApiResponse, Options } from '@/protocols'
import type { VindiClient } from '@/vindi-client'
import type { CustomerBody, CustomerReturn } from '../protocols'

export declare interface CustomerCreateRequest
  extends Exclude<CustomerCreateData, 'requestOptions'> {
  config: VindiClient
}

export declare interface CustomerCreateData {
  body: CustomerBody
  requestOptions?: Options
}

export declare interface CustomerCreateResponse extends ApiResponse {
  customer: CustomerReturn
}
