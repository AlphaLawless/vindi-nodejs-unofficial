import type { QueryParams } from '@/lib/rest/protocols'
import type { ApiResponse, Options } from '@/protocols'
import type { VindiClient } from '@/vindi-client'
import type { TransactionReturn } from '../protocols'

type SearchAttributes =
  | 'id'
  | 'customer_id'
  | 'charge_id'
  | 'gateway_id'
  | 'connector'
  | 'payment_method_id'
  | 'transaction_type'
  | 'amount'
  | 'installments'
  | 'status'
  | 'import_batch_id'
  | 'export_batch_id'
  | 'gateway_authorization'
  | 'gateway_transaction_id'
  | 'fraud_detector_score'
  | 'fraud_detector_status'
  | 'fraud_detector_id'
  | 'created_at'
  | 'updated_at'

type SortBy = 'created_at' | 'updated_at'

export declare interface TransactionListQueryParams
  extends QueryParams<SearchAttributes, SortBy> {}

export declare interface TransactionListRequest
  extends Exclude<TransactionListData, 'requestOptions'> {
  config: VindiClient
}

export declare interface TransactionListData {
  params?: TransactionListQueryParams
  requestOptions?: Options
}

export declare interface TransactionListResponse extends ApiResponse {
  transactions: TransactionReturn[]
}
