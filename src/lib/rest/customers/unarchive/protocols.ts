import type { ApiResponse, Options } from '@/protocols'
import type { VindiClient } from '@/vindi-client'
import type { CustomerReturn } from '../protocols'

export declare interface CustomerUnarchiveRequest
  extends Exclude<CustomerUnarchiveData, 'requestOptions'> {
  config: VindiClient
}

export declare interface CustomerUnarchiveData {
  id: string | number
  requestOptions?: Options
}

export declare interface CustomerUnarchiveResponse extends ApiResponse {
  customer: CustomerReturn
}
