import type { QueryParams } from '@/lib/rest/protocols'
import type { ApiResponse, Options } from '@/protocols'
import type { VindiClient } from '@/vindi-client'
import type { PaymentMethodsReturn } from '../protocols'

type SearchAttributes = 'id' | 'name' | 'code'

export declare interface PaymentMethodsListQueryParams
  extends QueryParams<SearchAttributes> {}

export declare interface PaymentMethodsListRequest
  extends PaymentMethodsListData {
  config: VindiClient
}

export declare interface PaymentMethodsListData {
  params?: PaymentMethodsListQueryParams
  requestOptions?: Options
}

export declare interface PaymentMethodsListResponse extends ApiResponse {
  paymentmethods: PaymentMethodsReturn[]
}
