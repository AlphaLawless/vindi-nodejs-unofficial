import type { QueryParams } from '@/lib/rest/protocols'
import type { ApiResponse, Options } from '@/protocols'
import type { VindiClient } from '@/vindi-client'
import type { SubscriptionReturn } from '../protocols'

type SearchAttributes =
  | 'id'
  | 'code'
  | 'installments'
  | 'customer_id'
  | 'interval'
  | 'interval_count'
  | 'billing_trigger_day'
  | 'billing_trigger_type'
  | 'billing_cycles'
  | 'plan_id'
  | 'payment_method_id'
  | 'start_at'
  | 'cancel_at'
  | 'overdue_since'
  | 'created_at'
  | 'updated_at'
  | 'end_at'

export declare interface SubscriptionListQueryParams
  extends QueryParams<SearchAttributes> {}

export declare interface SubscriptionListRequest
  extends Exclude<SubscriptionListData, 'requestOptions'> {
  config: VindiClient
}

export declare interface SubscriptionListData {
  params?: SubscriptionListQueryParams
  requestOptions?: Options
}

export declare interface SubscriptionListResponse extends ApiResponse {
  subscriptions: SubscriptionReturn[]
}
