import type { VindiClient } from '@/vindi-client'
import type {
  DiscountCancelData,
  DiscountCancelResponse
} from './cancel/protocols'
import { create } from './create'
import type {
  DiscountCreateData,
  DiscountCreateResponse
} from './create/protocols'
import { get } from './get'
import type { DiscountGetData, DiscountGetResponse } from './get/protocols'

export class Discount {
  constructor(private config: VindiClient) {}

  /**
   * Vindi Create Discount.
   *
   * @see {@link https://vindi.github.io/api-docs/dist/#/discounts/postV1Discounts More Information}
   */
  create(
    discountCreateData: DiscountCreateData
  ): Promise<DiscountCreateResponse> {
    const { body, requestOptions } = discountCreateData
    this.config.options = { ...this.config.options, ...requestOptions }
    return create({ body, config: this.config })
  }

  /**
   * Vindi Cancel a Discount.
   *
   * @see {@link https://vindi.github.io/api-docs/dist/#/discounts/deleteV1DiscountsId More Information}
   */
  cancel(
    discountCancelData: DiscountCancelData
  ): Promise<DiscountCancelResponse> {
    const { id, requestOptions } = discountCancelData
    this.config.options = { ...this.config.options, ...requestOptions }
    return get({ config: this.config, id })
  }

  /**
   * Vindi Get a Discount.
   *
   * @see {@link https://vindi.github.io/api-docs/dist/#/discounts/getV1DiscountsId More Information}
   */
  get(discountGetData: DiscountGetData): Promise<DiscountGetResponse> {
    const { id, requestOptions } = discountGetData
    this.config.options = { ...this.config.options, ...requestOptions }
    return get({ config: this.config, id })
  }
}
