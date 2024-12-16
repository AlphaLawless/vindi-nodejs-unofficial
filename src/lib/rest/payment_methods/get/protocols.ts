import type { ApiResponse, Options } from '@/protocols'
import type { VindiClient } from '@/vindi-client'
import type { PaymentMethodsReturn } from '../protocols'

export declare interface PaymentMethodsGetRequest
  extends Exclude<PaymentMethodsGetData, 'requestOptions'> {
  config: VindiClient
}

export declare interface PaymentMethodsGetData {
  id: string | number
  requestOptions?: Options
}

export declare interface PaymentMethodsGetResponse extends ApiResponse {
  payment_method: PaymentMethodsReturn
}
