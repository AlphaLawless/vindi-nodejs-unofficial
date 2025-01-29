import type { ApiResponse, Options } from '@/protocols'
import type { VindiClient } from '@/vindi-client'
import type { ChargesReturn } from '../protocols'

export declare interface ChargeRemoveParams {
  /**
   * Comments on cancellation.
   */
  comments?: string
  /**
   * Indicates whether the operation should be executed even if there is a
   * failure in communication with the financial institution. Only use if the
   * charge has already been modified outside the Vindi platform. Improper use
   * may cause inconsistencies in the transaction state. We recommend not
   * sending this parameter during normal API usage.
   */
  ignore_transaction_errors?: boolean
}

export declare interface ChargeRemoveRequest
  extends Exclude<ChargeRemoveData, 'requestOptions'> {
  config: VindiClient
}

export declare interface ChargeRemoveData {
  id: string | number
  params?: ChargeRemoveParams
  requestOptions?: Options
}

export declare interface ChargeRemoveResponse extends ApiResponse {
  charge: ChargesReturn
}
