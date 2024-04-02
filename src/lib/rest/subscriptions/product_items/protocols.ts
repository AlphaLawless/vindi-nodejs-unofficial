import type { ApiResponse, Options } from '@/protocols'
import type { VindiClient } from '@/vindi-client'
import type { QueryParams } from '../../protocols'
import type { ProductItem } from '../protocols'

export declare interface SubscriptionGetProductItemsRequest
  extends Exclude<SubscriptionGetProductItemsData, 'requestOptions'> {
  config: VindiClient
}

export declare interface SubscriptionGetProductItemsData {
  id: string | number
  params?: Omit<QueryParams<never>, 'query' | 'sort_by' | 'sort_order'>
  requestOptions?: Options
}

export declare interface SubscriptionGetProductItemsResponse
  extends ApiResponse,
    ProductItem {}
