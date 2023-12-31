import { GENDER, IAddress, IMembership, IModify, IOTP, IVoucherUser, ROLE, STATUS_USER } from 'global/constants'

export interface CmsUser {
  _id: string
  email: string
  password: string
  full_name: string
  phone: string
  avatar: string
  cover_image: string
  gender: GENDER
  birthday: string
  addresses: IAddress[]
  status: STATUS_USER
  favorite_products: string[]
  recently_products: string[]
  otp: IOTP
  access_token: string
  refresh_token: string
  role: ROLE
  membership: IMembership
  vouchers: IVoucherUser[]
  history_search: string[]
  created_at: string
  created_by: string
  modify: IModify[]
}

export interface CreateCmsUserPayload {
  email: string
  full_name: string
  phone: string
  avatar: string
}

export interface EditCmsUserPayload extends CreateCmsUserPayload {
  _id: string
}
