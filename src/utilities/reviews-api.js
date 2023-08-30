import sendRequest from './send-request';

const BASE_URL = '/api/reviews';

export async function addReview(orderId, reviewData) {
  return sendRequest(`${BASE_URL}/${orderId}`, 'POST', reviewData);
}
