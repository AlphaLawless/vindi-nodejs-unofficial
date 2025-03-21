import type { VindiClient } from '@/vindi-client'
import { create } from './create'
import type {
  ProductsCreateData,
  ProductsCreateResponse
} from './create/protocols'
import { get } from './get'
import type { ProductsGetData, ProductsGetResponse } from './get/protocols'
import { list } from './list'
import type { ProductsListData, ProductsListResponse } from './list/protocols'
import { update } from './update'
import type {
  ProductUpdateData,
  ProductUpdateResponse
} from './update/protocols'

export class Product {
  constructor(private config: VindiClient) {}

  /**
   * Vindi List Products.
   *
   * @see {@link https://vindi.github.io/api-docs/dist/#/products/getV1Products More Information}
   */
  list(productsListData: ProductsListData = {}): Promise<ProductsListResponse> {
    const { requestOptions, params } = productsListData
    this.config.options = { ...this.config.options, ...requestOptions }
    return list({ config: this.config, params })
  }

  /**
   * Vindi Get Product.
   *
   * @see {@link https://vindi.github.io/api-docs/dist/#/products/getV1ProductsId More Information}
   */
  get(productsGetData: ProductsGetData): Promise<ProductsGetResponse> {
    const { id, requestOptions } = productsGetData
    this.config.options = { ...this.config.options, ...requestOptions }
    return get({ config: this.config, id })
  }

  /**
   * Vindi Update Products.
   *
   * @see {@link https://vindi.github.io/api-docs/dist/#/products/putV1ProductsId More Information}
   */
  update(
    productsUpdateData: ProductUpdateData
  ): Promise<ProductUpdateResponse> {
    const { requestOptions, id, body } = productsUpdateData
    this.config.options = { ...this.config.options, ...requestOptions }
    return update({ config: this.config, id, body })
  }

  /**
   * Vindi Create Product.
   *
   * @see {@link https://vindi.github.io/api-docs/dist/#/products/postV1Products More Information}
   */
  create(
    productCreateData: ProductsCreateData
  ): Promise<ProductsCreateResponse> {
    const { requestOptions, body } = productCreateData
    this.config.options = { ...this.config.options, ...requestOptions }
    return create({ body, config: this.config })
  }
}
