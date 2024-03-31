export declare type InitialOptions = {
  key: string
  options?: Options
}

export declare type Options = {
  idempotencyKey?: string
  sandbox?: boolean
}

export declare interface ApiResponse {
  api_response: ResponseFields
}

export declare type ResponseFields = {
  status: number
  headers: [string, string[]]
}
