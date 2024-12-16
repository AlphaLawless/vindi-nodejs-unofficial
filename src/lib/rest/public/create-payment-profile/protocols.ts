import type { ApiResponse, Options } from '@/protocols'
import type { VindiClient } from '@/vindi-client'
import type {
  PublicPaymentProfilesBody,
  PublicPaymentProfilesReturn
} from '../protocols'

export declare interface PublicCreatePaymentProfileRequest
  extends Exclude<PublicCreatePaymentProfileData, 'requestOptions'> {
  config: VindiClient
}

export declare interface PublicCreatePaymentProfileData {
  body: PublicPaymentProfilesBody
  requestOptions?: Options
}

export declare interface PublicCreatePaymentProfileResponse
  extends ApiResponse {
  payment_profile: PublicPaymentProfilesReturn
}
