import type { ApiResponse, Options } from '@/protocols'
import type { VindiClient } from '@/vindi-client'
import type { CustomerReturn } from '../protocols'

export declare interface CustomerArchiveRequest
  extends Exclude<CustomerArchiveData, 'requestOptions'> {
  config: VindiClient
}

export declare interface CustomerArchiveData {
  id: string | number
  requestOptions?: Options
}

export declare interface CustomerArchiveResponse
  extends ApiResponse,
    CustomerReturn {}
