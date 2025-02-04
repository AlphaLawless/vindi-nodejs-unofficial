import type { ApiResponse, Options } from '@/protocols'
import type { VindiClient } from '@/vindi-client'
import type { BillsReturn } from '../protocols'

export declare interface BillGetRequest
  extends Exclude<BillGetData, 'requestOptions'> {
  config: VindiClient
}

export declare interface BillGetData {
  id: string | number
  requestOptions?: Options
}

export declare interface BillGetResponse extends ApiResponse {
  bill: BillsReturn
}
