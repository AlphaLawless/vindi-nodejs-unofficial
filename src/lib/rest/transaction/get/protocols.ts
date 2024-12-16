import type { ApiResponse, Options } from '@/protocols'
import type VindiClient from '../../../..'
import type { TransactionReturn } from '../protocols'

export declare interface TransactionGetRequest
  extends Exclude<TransactionGetData, 'requestOptions'> {
  config: VindiClient
}

export declare interface TransactionGetData {
  id: string | number
  requestOptions?: Options
}

export declare interface TransactionGetResponse extends ApiResponse {
  transaction: TransactionReturn
}
