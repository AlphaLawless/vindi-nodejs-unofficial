import type { ApiResponse, Options } from '@/protocols'
import type { VindiClient } from '@/vindi-client'
import type { VindiMetadata } from '../../protocols'
import type { SubscriptionAffiliate, SubscriptionReturn } from '../protocols'

export declare interface SubscriptionUpdateRequest
  extends Exclude<SubscriptionUpdateData, 'requestOptions'> {
  config: VindiClient
}

/**
 * PaymentProfile object for managing plan-related products.
 * To unlink a payment profile from a subscription without linking another profile, send:
 * ```
 *  {
 *    "payment_profile": {
 *      "id": null
 *    }
 *  }
 * ```
 */
export declare interface PaymentProfileUpdate {
  id?: number | null
  token?: string
  holder_name?: string
  registry_code?: string
  bank_branch?: string
  bank_account?: string
  card_expiration?: string
  allow_as_fallback?: boolean
  card_number?: string
  card_cvv?: string
  card_token?: string
  gateway_id?: string
  payment_method_code?: string
  payment_company_code?: string
  gateway_token?: string
}

/**
 * Body for updating a subscription.
 * All fields are optional since you can update only specific attributes.
 * @remarks
 * The **subscription_affiliates** array has special behavior:
 * - To add a new participant to the subscription, the following parameters
 * must be sent: `affiliate_id`, `amount`, `amount_type`, `status: active`.
 * - To remove a participant from the subscription, the following parameters
 * must be sent: `ID`, `affiliate_id`, `amount_type`, `remove`.
 * - To update the value of a subscription participant, the following
 * parameters must be sent: `ID`, `affiliate_id`, `amount`, `amount_type`, `status: active`.
 * Note: The structure must follow the example above, just making the change with the parameters described according to the action you want to perform.
 */
export declare interface SubscriptionUpdateBody {
  code?: string
  payment_method_code?: string
  installments?: number
  billing_trigger_type?: string
  billing_trigger_day?: number
  payment_profile?: PaymentProfileUpdate
  invoice_split?: boolean
  subscription_affiliates?: Array<
    SubscriptionAffiliate & { id: number; remove?: boolean }
  >
  metadata?: VindiMetadata
}

export declare interface SubscriptionUpdateData {
  id: string | number
  body: SubscriptionUpdateBody
  requestOptions?: Options
}

export declare interface SubscriptionUpdateResponse extends ApiResponse {
  subscription: SubscriptionReturn
}
