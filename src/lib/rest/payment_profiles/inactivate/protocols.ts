import type { ApiResponse, Options } from '@/protocols'
import type { VindiClient } from '@/vindi-client'
import type { PaymentProfilesReturn } from '../protocols'

export declare interface PaymentProfilesInactivateQueryParams {
  remove_permanently?: boolean
}

export declare interface PaymentProfilesInactivateRequest
  extends Exclude<PaymentProfilesInactivateData, 'requestOptions'> {
  config: VindiClient
}

export declare interface PaymentProfilesInactivateData {
  id: string | number
  params?: PaymentProfilesInactivateQueryParams
  requestOptions?: Options
}

export declare interface PaymentProfilesInactivateResponse
  extends ApiResponse,
    PaymentProfilesReturn {}
