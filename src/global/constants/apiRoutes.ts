export const API_ROUTES = {
  // auth
  login: `/auth/login_cms`,
  logout: `/auth/logout`,
  check_otp: `/auth/check_otp`,
  set_password: `/auth/set_password`,
  refresh_token: `/auth/refresh_token`,
  me: `/auth/me`,

  // product
  getProducts: `/cms/products`,
  getProductDetail: `/cms/products/`,
  createProduct: `/products/`,
  updateProduct: `/products/`,
  deleteProduct: (id: string) => `/products/${id}`,
  generateStock: `/products/generate_stock/`,

  //categories
  getCategories: `/categories`,
  getCategoryDetail: `/categories/`,
  createCategory: `/categories/`,
  updateCategory: `/categories/`,
  deleteCategory: (id: string) => `/categories/${id}`,

  //colors
  getColors: `/colors`,
  getColorDetail: `/colors/`,
  createColor: `/colors/`,
  updateColor: `/colors/`,
  deleteColor: (id: string) => `/colors/${id}`,

  //sizes
  getSizes: `/sizes`,
  getSizeDetail: `/sizes/`,
  createSize: `/sizes/`,
  updateSize: `/sizes/`,
  deleteSize: (id: string) => `/sizes/${id}`,

  //sizes
  getUsers: `/users`,
  getUserDetail: `/users/get/`,
  createUser: `/users/`,
  updateUser: `/users/`,
  deleteUser: (id: string) => `/users/${id}`,

  // order
  getOrders: `/orders`,
  getOrderDetail: `/orders/get/`,
  updateOrder: `/orders/`,
  updateStatusOrder: `/orders/`,

  //payment
  getTransactions: `/pay/transactions`,

  //upload
  single: `/upload/single`,
  multiple: `/upload/multiple`,

  //vouchers
  getVouchers: `/voucher`,
  getVoucherDetail: `/voucher/`,
  createVoucher: `/voucher/`,
  updateVoucher: `/voucher/`,
  deleteVoucher: (id: string) => `/voucher/${id}`,

  //dashboard
  getRevenue: `/dashboard/revenue_day`,
  getCountQuantity: `/dashboard/count_quantity`,
  getHistorySearch: `/dashboard/get_history_search`,
  getProductsBestSellers: `/dashboard/get_products_best_seller`,
  getFeed: `/dashboard/get_feed`,

  //notification
  getNotifications: `/notification/get`,
  pushNotifications: `/notification/push_notifications_all`
}
export default API_ROUTES
