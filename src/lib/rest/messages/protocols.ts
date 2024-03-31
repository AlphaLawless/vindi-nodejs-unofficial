export declare interface MessageBody {
  customer_id: number
  charge_id: number
  notification_id: number
  email: string
}

export declare interface MessageReturn {
  id: number
  notification_type: string
  seen_at: string
  created_at: string
  customer: Customer
  charge: Charge
  notification: Notification
}

export declare interface Customer {
  id: number
  name: string
  email: string
  code: string
}

export declare interface Charge {
  id: number
}

export declare interface Notification {
  id: number
  notification_type: string
}
