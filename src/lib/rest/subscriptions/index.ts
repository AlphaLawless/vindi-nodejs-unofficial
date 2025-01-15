import type { VindiClient } from '@/vindi-client'
import { cancel } from './cancel'
import type {
  SubscriptionCancelData,
  SubscriptionCancelResponse
} from './cancel/protocols'
import { create } from './create'
import type {
  SubscriptionCreateData,
  SubscriptionCreateResponse
} from './create/protocols'
import { get } from './get'
import type {
  SubscriptionGetData,
  SubscriptionGetResponse
} from './get/protocols'
import { list } from './list'
import type {
  SubscriptionListData,
  SubscriptionListResponse
} from './list/protocols'
import { product_items } from './product_items'
import type {
  SubscriptionGetProductItemsData,
  SubscriptionGetProductItemsResponse
} from './product_items/protocols'
import { reactivate } from './reactivate'
import type {
  SubscriptionReactivateData,
  SubscriptionReactivateResponse
} from './reactivate/protocols'
import { renew } from './renew'
import type {
  SubscriptionRenewData,
  SubscriptionRenewResponse
} from './renew/protocols'
import { update } from './update'
import type {
  SubscriptionUpdateData,
  SubscriptionUpdateResponse
} from './update/protocols'

export class Subscription {
  constructor(private config: VindiClient) {}

  /**
   * Vindi Create Subscription.
   *
   * @see {@link https://vindi.github.io/api-docs/dist/#/subscriptions/postV1Subscriptions More Information}
   */
  create(
    subscriptionCreateData: SubscriptionCreateData
  ): Promise<SubscriptionCreateResponse> {
    const { body, requestOptions } = subscriptionCreateData
    this.config.options = { ...this.config.options, ...requestOptions }
    return create({ body, config: this.config })
  }

  /**
   * Vindi List Subscriptions.
   *
   * @see {@link https://vindi.github.io/api-docs/dist/#/subscriptions/getV1Subscriptions More Information}
   */
  list(
    subscriptionListData: SubscriptionListData = {}
  ): Promise<SubscriptionListResponse> {
    const { requestOptions, params } = subscriptionListData
    this.config.options = { ...this.config.options, ...requestOptions }
    return list({ config: this.config, params })
  }

  /**
   * Vindi Cancel a Subscription.
   *
   * @see {@link https://vindi.github.io/api-docs/dist/#/subscriptions/deleteV1SubscriptionsId More Information}
   */
  cancel(
    subscriptionListData: SubscriptionCancelData
  ): Promise<SubscriptionCancelResponse> {
    const { requestOptions, params, id } = subscriptionListData
    this.config.options = { ...this.config.options, ...requestOptions }
    return cancel({ config: this.config, params, id })
  }

  /**
   * Vindi Get a Subscription.
   *
   * @see {@link https://vindi.github.io/api-docs/dist/#/subscriptions/getV1SubscriptionsId More Information}
   */
  get(
    subscriptionGetData: SubscriptionGetData
  ): Promise<SubscriptionGetResponse> {
    const { id, requestOptions } = subscriptionGetData
    this.config.options = { ...this.config.options, ...requestOptions }
    return get({ config: this.config, id })
  }

  /**
   * Vindi update a Subscription.
   *
   * @see {@link https://vindi.github.io/api-docs/dist/#/subscriptions/putV1SubscriptionsId More Information}
   */
  update(
    subscriptionUpdateData: SubscriptionUpdateData
  ): Promise<SubscriptionUpdateResponse> {
    const { requestOptions, id, body } = subscriptionUpdateData
    this.config.options = { ...this.config.options, ...requestOptions }
    return update({ config: this.config, id, body })
  }

  /**
   * Vindi Product Items of Subscription.
   *
   * @see {@link https://vindi.github.io/api-docs/dist/#/subscriptions/getV1SubscriptionsIdProductItems More Information}
   */
  product_items(
    subscriptionGetProductItemsData: SubscriptionGetProductItemsData
  ): Promise<SubscriptionGetProductItemsResponse> {
    const { id, requestOptions, params } = subscriptionGetProductItemsData
    this.config.options = { ...this.config.options, ...requestOptions }
    return product_items({ config: this.config, id, params })
  }

  /**
   * Vindi Reactivate a Subscription.
   *
   * @see {@link https://vindi.github.io/api-docs/dist/#/subscriptions/postV1SubscriptionsIdReactivate More Information}
   */
  reactivate(
    subscriptionReactivateData: SubscriptionReactivateData
  ): Promise<SubscriptionReactivateResponse> {
    const { id, requestOptions } = subscriptionReactivateData
    this.config.options = { ...this.config.options, ...requestOptions }
    return reactivate({ config: this.config, id })
  }

  /**
   * Vindi Renew a Subscription.
   *
   * @see {@link https://vindi.github.io/api-docs/dist/#/subscriptions/postV1SubscriptionsIdRenew More Information}
   */
  renew(
    subscriptionRenewData: SubscriptionRenewData
  ): Promise<SubscriptionRenewResponse> {
    const { id, requestOptions } = subscriptionRenewData
    this.config.options = { ...this.config.options, ...requestOptions }
    return renew({ config: this.config, id })
  }
}
