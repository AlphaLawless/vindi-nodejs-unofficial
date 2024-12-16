import type { ApiResponse, Options } from '@/protocols'
import type { VindiClient } from '@/vindi-client'
import type { MessageReturn } from '../protocols'

export declare interface MessageGetRequest
  extends Exclude<MessageGetData, 'requestOptions'> {
  config: VindiClient
}

export declare interface MessageGetData {
  id: string | number
  requestOptions?: Options
}

export declare interface MessageGetResponse extends ApiResponse {
  message: MessageReturn
}
