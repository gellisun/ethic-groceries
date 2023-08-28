import sendRequest from './send-request';

const BASE_URL = '/api/orders';

export function getCart() {
  return sendRequest(`${BASE_URL}/new`);
}

export function addProductToCart(productId) {
  return sendRequest(`${BASE_URL}/product/${productId}`, 'POST');
}

export function setProductQtyInCart(orderId, productId, newQty) {
  return sendRequest(`${BASE_URL}/qty`, 'PUT', { orderId, productId, newQty });
}

export function getOrder(orderId) {
  return sendRequest(`${BASE_URL}/order/${orderId}`);
}

export function checkout() {
  return sendRequest(`${BASE_URL}/checkout`, 'POST');
}

export function getPaidOrders() {
  return sendRequest(`${BASE_URL}`);
}