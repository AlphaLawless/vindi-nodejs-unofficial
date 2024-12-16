import type { VindiClient } from '@/vindi-client'
import { archive } from './archive'
import type {
  CustomerArchiveData,
  CustomerArchiveResponse
} from './archive/protocols'
import { create } from './create'
import type {
  CustomerCreateData,
  CustomerCreateResponse
} from './create/protocols'
import { get } from './get'
import type { CustomerGetData, CustomerGetResponse } from './get/protocols'
import { list } from './list'
import type { CustomerListData, CustomerListResponse } from './list/protocols'
import { unarchive } from './unarchive'
import type {
  CustomerUnarchiveData,
  CustomerUnarchiveResponse
} from './unarchive/protocols'
import { update } from './update'
import type {
  CustomerUpdateData,
  CustomerUpdateResponse
} from './update/protocols'

export class Customer {
  constructor(private config: VindiClient) {}

  /**
   * Vindi Create Customer.
   *
   * @see {@link https://vindi.github.io/api-docs/dist/#/customers/postV1Customers More Information}
   */
  create(
    customerCreateData: CustomerCreateData
  ): Promise<CustomerCreateResponse> {
    const { body, requestOptions } = customerCreateData
    this.config.options = { ...this.config.options, ...requestOptions }
    return create({ body, config: this.config })
  }

  /**
   * Vindi List Customers.
   *
   * @see {@link https://vindi.github.io/api-docs/dist/#/customers/getV1Customers More Information}
   */
  list(customerListData: CustomerListData = {}): Promise<CustomerListResponse> {
    const { requestOptions, params } = customerListData
    this.config.options = { ...this.config.options, ...requestOptions }
    return list({ config: this.config, params })
  }

  /**
   * Vindi Update Customers.
   *
   * @see {@link https://vindi.github.io/api-docs/dist/#/customers/putV1CustomersId More Information}
   */
  update(
    customerUpdateData: CustomerUpdateData
  ): Promise<CustomerUpdateResponse> {
    const { requestOptions, id, body } = customerUpdateData
    this.config.options = { ...this.config.options, ...requestOptions }
    return update({ config: this.config, id, body })
  }

  /**
   * Vindi Archive Customer.
   *
   * @see {@link https://vindi.github.io/api-docs/dist/#/customers/deleteV1CustomersId More Information}
   */
  archive(
    customerArchiveData: CustomerArchiveData
  ): Promise<CustomerArchiveResponse> {
    const { id, requestOptions } = customerArchiveData
    this.config.options = { ...this.config.options, ...requestOptions }
    return archive({ config: this.config, id })
  }

  /**
   * Vindi Get a Customer.
   *
   * @see {@link https://vindi.github.io/api-docs/dist/#/customers/getV1CustomersId More Information}
   */
  get(customerGetData: CustomerGetData): Promise<CustomerGetResponse> {
    const { id, requestOptions } = customerGetData
    this.config.options = { ...this.config.options, ...requestOptions }
    return get({ config: this.config, id })
  }

  /**
   * Vindi Unarchive a Customer.
   *
   * @see {@link https://vindi.github.io/api-docs/dist/#/customers/postV1CustomersIdUnarchive More Information}
   */
  unarchive(
    customerUnarchiveData: CustomerUnarchiveData
  ): Promise<CustomerUnarchiveResponse> {
    const { id, requestOptions } = customerUnarchiveData
    this.config.options = { ...this.config.options, ...requestOptions }
    return unarchive({ config: this.config, id })
  }
}
