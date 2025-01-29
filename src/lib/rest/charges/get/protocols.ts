import type { ApiResponse, Options } from '@/protocols'
import type { VindiClient } from '@/vindi-client'
import type { BillReturn } from '../../subscriptions/protocols'

export declare interface ChargeGetRequest
  extends Exclude<ChargeGetData, 'requestOptions'> {
  config: VindiClient
}

export declare interface ChargeGetData {
  id: string | number
  requestOptions?: Options
}

export declare interface ChargeGetResponse extends ApiResponse {
  charge: BillReturn
}
