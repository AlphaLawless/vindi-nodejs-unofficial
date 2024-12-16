import type { VindiClient } from '@/vindi-client'
import { get } from './get'
import type {
  TransactionGetData,
  TransactionGetResponse
} from './get/protocols'
import { list } from './list'
import type {
  TransactionListData,
  TransactionListResponse
} from './list/protocols'

export class Transaction {
  constructor(private config: VindiClient) {}

  /**
   * Vindi List Transactions.
   *
   * @see {@link https://vindi.github.io/api-docs/dist/#/transactions/getV1Transactions More Information}
   */
  list(
    transactionListData: TransactionListData = {}
  ): Promise<TransactionListResponse> {
    const { requestOptions, params } = transactionListData
    this.config.options = { ...this.config.options, ...requestOptions }
    return list({ config: this.config, params })
  }

  /**
   * Vindi Get Transaction.
   *
   * @see {@link https://vindi.github.io/api-docs/dist/#/transactions/getV1TransactionsId More Information}
   */
  get(transactionGetData: TransactionGetData): Promise<TransactionGetResponse> {
    const { id, requestOptions } = transactionGetData
    this.config.options = { ...this.config.options, ...requestOptions }
    return get({ config: this.config, id })
  }
}
