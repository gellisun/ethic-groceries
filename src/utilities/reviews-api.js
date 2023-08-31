import sendRequest from './send-request';

const BASE_URL = '/api/reviews';

export async function addReview(orderId, reviewData) {
  return sendRequest(`${BASE_URL}/${orderId}`, 'POST', reviewData);
}

export async function getUserReviews(userId) {
  return sendRequest(`${BASE_URL}/${userId}`, 'GET');
}