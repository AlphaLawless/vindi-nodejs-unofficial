import type { VindiClient } from '@/vindi-client'
import { create } from './create'
import type {
  PaymentProfilesCreateData,
  PaymentProfilesCreateResponse
} from './create/protocols'
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

  /**
   * Vindi Create Payment Profile.
   *
   * @see {@link https://vindi.github.io/api-docs/dist/#/payment_profiles/postV1PaymentProfiles More Information}
   */
  create(
    paymentProfilesCreateData: PaymentProfilesCreateData
  ): Promise<PaymentProfilesCreateResponse> {
    const { requestOptions, body } = paymentProfilesCreateData
    this.config.options = { ...this.config.options, ...requestOptions }
    return create({ body, config: this.config })
  }
}
