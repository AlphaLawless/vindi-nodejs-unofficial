import type { VindiClient } from '@/vindi-client'
import { inactivate } from './inactivate'
import type {
  PaymentProfilesInactivateData,
  PaymentProfilesInactivateResponse
} from './inactivate/protocols'
import { list } from './list'
import type {
  PaymentProfilesListData,
  PaymentProfilesListResponse
} from './list/protocols'

export class PaymentProfiles {
  constructor(private config: VindiClient) {}

  /**
   * Vindi List Payment Profiles.
   *
   * @see {@link https://vindi.github.io/api-docs/dist/#/payment_profiles/getV1PaymentProfiles More Information}
   */
  list(
    paymentProfilesListData: PaymentProfilesListData = {}
  ): Promise<PaymentProfilesListResponse> {
    const { requestOptions, params } = paymentProfilesListData
    this.config.options = { ...this.config.options, ...requestOptions }
    return list({ config: this.config, params })
  }

  /**
   * Vindi Inactivate a Payment Profile by ID.
   *
   * @see {@link https://vindi.github.io/api-docs/dist/#/payment_profiles/deleteV1PaymentProfilesId More Information}
   */
  inactivate(
    inactivatePaymentProfileData: PaymentProfilesInactivateData
  ): Promise<PaymentProfilesInactivateResponse> {
    const { requestOptions, params, id } = inactivatePaymentProfileData
    this.config.options = { ...this.config.options, ...requestOptions }
    return inactivate({ config: this.config, params, id })
  }
}
