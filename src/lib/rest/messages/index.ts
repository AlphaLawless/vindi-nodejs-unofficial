import type { VindiClient } from '@/vindi-client'
import { create } from './create'
import type {
  MessageCreateData,
  MessageCreateResponse
} from './create/protocols'
import { get } from './get'
import type { MessageGetData, MessageGetResponse } from './get/protocols'
import { list } from './list'
import type { MessageListData, MessageListResponse } from './list/protocols'

export class Message {
  constructor(private config: VindiClient) {}

  /**
   * Vindi Create Message.
   *
   * @see {@link https://vindi.github.io/api-docs/dist/#/messages/postV1Messages More Information}
   */
  create(messageCreateData: MessageCreateData): Promise<MessageCreateResponse> {
    const { body, requestOptions } = messageCreateData
    this.config.options = { ...this.config.options, ...requestOptions }
    return create({ body, config: this.config })
  }

  /**
   * Vindi List Messages.
   *
   * @see {@link https://vindi.github.io/api-docs/dist/#/messages/getV1Messages More Information}
   */
  list(messageListData: MessageListData = {}): Promise<MessageListResponse> {
    const { requestOptions, params } = messageListData
    this.config.options = { ...this.config.options, ...requestOptions }
    return list({ config: this.config, params })
  }

  /**
   * Vindi Get a Message.
   *
   * @see {@link https://vindi.github.io/api-docs/dist/#/messages/getV1MessagesId More Information}
   */
  get(messageGetData: MessageGetData): Promise<MessageGetResponse> {
    const { id, requestOptions } = messageGetData
    this.config.options = { ...this.config.options, ...requestOptions }
    return get({ config: this.config, id })
  }
}
