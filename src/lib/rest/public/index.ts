import type { VindiClient } from '@/vindi-client'
import { create } from './create-payment-profile'
import type {
  PublicCreatePaymentProfileData,
  PublicCreatePaymentProfileResponse
} from './create-payment-profile/protocols'

export class Public {
  constructor(private config: VindiClient) {}

  /**
   * Vindi Public Create Payment Profile.
   *
   * @see {@link https://vindi.github.io/api-docs/dist/#/public/postV1PublicPaymentProfiles More Information}
   */
  createPaymentProfile(
    publicCreatePaymentProfileData: PublicCreatePaymentProfileData
  ): Promise<PublicCreatePaymentProfileResponse> {
    const { requestOptions, body } = publicCreatePaymentProfileData
    this.config.options = { ...this.config.options, ...requestOptions }
    return create({ body, config: this.config })
  }
}
