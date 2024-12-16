import { Http } from '@/lib/http'
import type {
  TransactionListRequest,
  TransactionListResponse
} from './protocols'

export const list = async ({
  config,
  params
}: TransactionListRequest): Promise<TransactionListResponse> => {
  return await Http.fetch<TransactionListResponse>('/v1/transactions', {
    headers: {
      Authorization: `Basic ${Buffer.from(`${config.key}:`).toString('base64')}`
    },
    queryParams: {
      ...params
    },
    ...config.options
  })
}
