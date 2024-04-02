import type { VindiClient } from '@/vindi-client'
import { create } from './create'
import type {
  ProductItemCreateData,
  ProductItemCreateResponse
} from './create/protocols'
import { get } from './get'
import type {
  ProductItemGetData,
  ProductItemGetResponse
} from './get/protocols'
import { remove } from './remove'
import type {
  ProductItemRemoveData,
  ProductItemRemoveResponse
} from './remove/protocols'

export class ProductItem {
  constructor(private config: VindiClient) {}

  /**
   * Vindi Create Product Item.
   *
   * @see {@link https://vindi.github.io/api-docs/dist/#/product_items/postV1ProductItems More Information}
   */
  create(
    productItemCreateData: ProductItemCreateData
  ): Promise<ProductItemCreateResponse> {
    const { body, requestOptions } = productItemCreateData
    this.config.options = { ...this.config.options, ...requestOptions }
    return create({ body, config: this.config })
  }

  /**
   * Vindi Remove a Product Item.
   *
   * @see {@link https://vindi.github.io/api-docs/dist/#/product_items/deleteV1ProductItemsId More Information}
   */
  remove(
    productItemRemoveData: ProductItemRemoveData
  ): Promise<ProductItemRemoveResponse> {
    const { id, requestOptions } = productItemRemoveData
    this.config.options = { ...this.config.options, ...requestOptions }
    return remove({ config: this.config, id })
  }

  /**
   * Vindi Get a Product Item.
   *
   * @see {@link https://vindi.github.io/api-docs/dist/#/product_items/getV1ProductItemsId More Information}
   */
  get(productItemGetData: ProductItemGetData): Promise<ProductItemGetResponse> {
    const { id, requestOptions } = productItemGetData
    this.config.options = { ...this.config.options, ...requestOptions }
    return get({ config: this.config, id })
  }
}
