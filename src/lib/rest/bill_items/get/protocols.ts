import type { ApiResponse, Options } from '@/protocols'
import type { VindiClient } from '@/vindi-client'
import type { BillItemsReturn } from '../protocols'

export declare interface BillItemsGetRequest
  extends Exclude<BillItemsGetData, 'requestOptions'> {
  config: VindiClient
}

export declare interface BillItemsGetData {
  id: string | number
  requestOptions?: Options
}

export declare interface BillItemsGetResponse
  extends ApiResponse,
    BillItemsReturn {}
