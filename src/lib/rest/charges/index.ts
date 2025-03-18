import type { VindiClient } from '@/vindi-client'
import { capture } from './capture'
import type {
  CaptureChargeData,
  CaptureChargeResponse
} from './capture/protocols'
import { fraud_review } from './fraude-view'
import type {
  FraudReviewChargeData,
  FraudReviewChargeResponse
} from './fraude-view/protocols'
import { get } from './get'
import type { ChargeGetData, ChargeGetResponse } from './get/protocols'
import { list } from './list'
import type { ChargesListData, ChargesListResponse } from './list/protocols'
import { refund } from './refund'
import type { RefundChargeData, RefundChargeResponse } from './refund/protocols'
import { reissue } from './reissue'
import type {
  ReissueChargeData,
  ReissueChargeResponse
} from './reissue/protocols'
import { remove } from './remove'
import type { ChargeRemoveData, ChargeRemoveResponse } from './remove/protocols'
import { retry_charge } from './retry-charge'
import type {
  RetryChargeData,
  RetryChargeResponse
} from './retry-charge/protocols'
import { update } from './update'
import type { ChargeUpdateData, ChargeUpdateResponse } from './update/protocols'

export class Charge {
  constructor(private config: VindiClient) {}

  /**
   * Vindi List Charges.
   *
   * @see {@link https://vindi.github.io/api-docs/dist/#/charges/getV1ChargesMore Information}
   */
  list(chargesListData: ChargesListData = {}): Promise<ChargesListResponse> {
    const { requestOptions, params } = chargesListData
    this.config.options = { ...this.config.options, ...requestOptions }
    return list({ config: this.config, params })
  }

  /**
   * Vindi Update a Charge.
   *
   * @see {@link https://vindi.github.io/api-docs/dist/#/charges/putV1ChargesId More Information}
   */
  update(chargeUpdateData: ChargeUpdateData): Promise<ChargeUpdateResponse> {
    const { body, id, requestOptions } = chargeUpdateData
    this.config.options = { ...this.config.options, ...requestOptions }
    return update({ config: this.config, id, body })
  }

  /**
   * Vindi Get a Charge.
   *
   * @see {@link https://vindi.github.io/api-docs/dist/#/charges/getV1ChargesId More Information}
   */
  get(chargeGetData: ChargeGetData): Promise<ChargeGetResponse> {
    const { id, requestOptions } = chargeGetData
    this.config.options = { ...this.config.options, ...requestOptions }
    return get({ config: this.config, id })
  }

  /**
   * Vindi Remove a Charge.
   *
   * @see {@link https://vindi.github.io/api-docs/dist/#/charges/deleteV1ChargesId More Information}
   */
  remove(chargeRemoveData: ChargeRemoveData): Promise<ChargeRemoveResponse> {
    const { id, requestOptions, params } = chargeRemoveData
    this.config.options = { ...this.config.options, ...requestOptions }
    return remove({ config: this.config, id, params })
  }

  /**
   * Vindi Retry a Charge.
   *
   * @see {@link https://vindi.github.io/api-docs/dist/#/charges/postV1ChargesIdCharge More Information}
   */
  retry_charge(retryChargeData: RetryChargeData): Promise<RetryChargeResponse> {
    const { id, requestOptions, body } = retryChargeData
    this.config.options = { ...this.config.options, ...requestOptions }
    return retry_charge({ config: this.config, id, body })
  }

  /**
   * Vindi Refund a Charge.
   *
   * @see {@link https://vindi.github.io/api-docs/dist/#/charges/postV1ChargesIdRefund More Information}
   */
  refund(refundChargeData: RefundChargeData): Promise<RefundChargeResponse> {
    const { id, requestOptions, body } = refundChargeData
    this.config.options = { ...this.config.options, ...requestOptions }
    return refund({ config: this.config, id, body })
  }

  /**
   * Vindi Reissue a Charge.
   *
   * @see {@link https://vindi.github.io/api-docs/dist/#/charges/postV1ChargesIdReissue More Information}
   */
  reissue(
    reissueChargeData: ReissueChargeData
  ): Promise<ReissueChargeResponse> {
    const { id, requestOptions, body } = reissueChargeData
    this.config.options = { ...this.config.options, ...requestOptions }
    return reissue({ config: this.config, id, body })
  }

  /**
   * Vindi Capture a Charge.
   *
   * @see {@link https://vindi.github.io/api-docs/dist/#/charges/postV1ChargesIdCapture More Information}
   */
  capture(
    captureChargeData: CaptureChargeData
  ): Promise<CaptureChargeResponse> {
    const { id, requestOptions } = captureChargeData
    this.config.options = { ...this.config.options, ...requestOptions }
    return capture({ config: this.config, id })
  }

  /**
   * Vindi Fraud Review a Charge.
   *
   * @see {@link https://vindi.github.io/api-docs/dist/#/charges/postV1ChargesIdFraudReview More Information}
   */
  fraud_review(
    fraudReviewChargeData: FraudReviewChargeData
  ): Promise<FraudReviewChargeResponse> {
    const { id, requestOptions, body } = fraudReviewChargeData
    this.config.options = { ...this.config.options, ...requestOptions }
    return fraud_review({ config: this.config, id, body })
  }
}
