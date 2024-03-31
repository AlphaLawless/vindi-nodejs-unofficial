import type { QueryParams } from '@/lib/rest/protocols'
import type { ApiResponse, Options } from '@/protocols'
import type { VindiClient } from '@/vindi-client'
import type { MessageReturn } from '../protocols'

type SearchAttributes =
  | 'id'
  | 'notification_type'
  | 'notification_id'
  | 'seen_at'
  | 'message_type'
  | 'customer_id'
  | 'charge_id'
  | 'created_at'

export declare interface MessageListQueryParams
  extends QueryParams<SearchAttributes> {}

export declare interface MessageListRequest
  extends Exclude<MessageListData, 'requestOptions'> {
  config: VindiClient
}

export declare interface MessageListData {
  params?: MessageListQueryParams
  requestOptions?: Options
}

export declare interface MessageListResponse extends ApiResponse {
  messages: MessageReturn[]
}
