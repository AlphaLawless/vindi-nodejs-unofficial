export declare interface MovementBody {
  body: string
  amount: number
  movement_type: string
  origin: string
  bill_id: number
  description: string
}

export declare interface MovementReturn {
  id: number
  status: string
  amount: number
  movement_type: string
  description: string
  bill: Bill
}

export declare interface Bill {
  id: number
  code: string
}
