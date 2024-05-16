import type { QueryParams } from '@/lib/rest/protocols'
import type { ApiResponse, Options } from '@/protocols'
import type { VindiClient } from '@/vindi-client'
import type { PaymentProfilesReturn } from '../protocols'

type SearchAttributes =
  | 'id'
  | 'customer_id'
  | 'card_number_first_six '
  | 'card_number_last_four '
  | 'card_expiration '
  | 'payment_company_id'
  | 'payment_method_id'
  | 'status'
  | 'type'
  | 'created_at'
  | 'registry_code'
  | 'bank_account'
  | 'bank_branch'
  | 'updated_at'

export declare interface PaymentProfilesListQueryParams
  extends QueryParams<SearchAttributes> {}

export declare interface PaymentProfilesListRequest
  extends Exclude<PaymentProfilesListData, 'requestOptions'> {
  config: VindiClient
}

export declare interface PaymentProfilesListData {
  params?: PaymentProfilesListQueryParams
  requestOptions?: Options
}

export declare interface PaymentProfilesListResponse extends ApiResponse {
  paymentProfiles: PaymentProfilesReturn[]
}
