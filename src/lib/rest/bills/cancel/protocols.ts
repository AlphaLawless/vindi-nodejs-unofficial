import type { ApiResponse, Options } from '@/protocols'
import type { VindiClient } from '@/vindi-client'
import type { BillsReturn } from '../protocols'

export declare interface BillCancelQueryParams {
  comments?: string
}

export declare interface BillCancelRequest
  extends Exclude<BillCancelData, 'requestOptions'> {
  config: VindiClient
}

export declare interface BillCancelData {
  id: string | number
  params?: BillCancelQueryParams
  requestOptions?: Options
}

export declare interface BillCancelResponse extends ApiResponse {
  bill: BillsReturn
}
