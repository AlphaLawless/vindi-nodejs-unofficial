import type { VindiClient } from '@/vindi-client'
import { get } from './get'
import type {
  PaymentMethodsGetData,
  PaymentMethodsGetResponse
} from './get/protocols'
import { list } from './list'
import type {
  PaymentMethodsListData,
  PaymentMethodsListResponse
} from './list/protocols'

export class PaymentMethods {
  constructor(private config: VindiClient) {}

  /**
   * Vindi List PaymentMethods.
   *
   * @see {@link https://vindi.github.io/api-docs/dist/#/payment_methods/getV1PaymentMethods More Information}
   */
  list(
    paymentMethodsListData: PaymentMethodsListData = {}
  ): Promise<PaymentMethodsListResponse> {
    const { requestOptions, params } = paymentMethodsListData
    this.config.options = { ...this.config.options, ...requestOptions }
    return list({ config: this.config, params })
  }

  /**
   * Vindi Get a PaymentMethods.
   *
   * @see {@link https://vindi.github.io/api-docs/dist/#/payment_methods/getV1PaymentMethodsId More Information}
   */
  get(
    paymentMethodsGetData: PaymentMethodsGetData
  ): Promise<PaymentMethodsGetResponse> {
    const { id, requestOptions } = paymentMethodsGetData
    this.config.options = { ...this.config.options, ...requestOptions }
    return get({ config: this.config, id })
  }
}
