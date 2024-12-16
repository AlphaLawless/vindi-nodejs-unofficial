import { Http } from '@/lib/http'
import type { TransactionGetRequest, TransactionGetResponse } from './protocols'

export const get = async ({
  config,
  id
}: TransactionGetRequest): Promise<TransactionGetResponse> => {
  return await Http.fetch<TransactionGetResponse>(`/v1/transactions/${id}`, {
    headers: {
      Authorization: `Basic ${Buffer.from(`${config.key}:`).toString('base64')}`
    },
    ...config.options
  })
}
