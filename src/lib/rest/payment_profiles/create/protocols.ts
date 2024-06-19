import type { ApiResponse, Options } from '@/protocols'
import type { VindiClient } from '@/vindi-client'
import type {
  PaymentProfilesCreateBody,
  PaymentProfilesReturn
} from '../protocols'

export declare interface PaymentProfilesCreateRequest
  extends Exclude<PaymentProfilesCreateData, 'requestOptions'> {
  config: VindiClient
}

export declare interface PaymentProfilesCreateData {
  body: PaymentProfilesCreateBody
  requestOptions?: Options
}

export declare interface PaymentProfilesCreateResponse extends ApiResponse {
  payment_profile: PaymentProfilesReturn
}
