import Status from 'http-status-codes';

export default (request, response) => {
  if (request.method !== 'GET') {
    return response.status(Status.BAD_REQUEST).send('');
  }
  return response.json({
    data: 'hello world',
  });
};