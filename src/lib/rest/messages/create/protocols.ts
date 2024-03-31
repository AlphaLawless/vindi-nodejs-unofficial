import type { ApiResponse, Options } from '@/protocols'
import type { VindiClient } from '@/vindi-client'
import type { MessageBody, MessageReturn } from '../protocols'

export declare interface MessageCreateRequest
  extends Exclude<MessageCreateData, 'requestOptions'> {
  config: VindiClient
}

export declare interface MessageCreateData {
  body: MessageBody
  requestOptions?: Options
}

export declare interface MessageCreateResponse extends ApiResponse {
  message: MessageReturn
}
