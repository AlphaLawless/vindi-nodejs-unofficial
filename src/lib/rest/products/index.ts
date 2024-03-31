import type { VindiClient } from '@/vindi-client'
import { get } from './get'
import type { ProductsGetData, ProductsGetResponse } from './get/protocols'
import { list } from './list'
import type { ProductsListData, ProductsListResponse } from './list/protocols'

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
}
