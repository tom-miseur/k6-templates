import { sleep } from 'k6';

// https://k6.io/docs/javascript-api/jslib/utils/randomintbetween-min-max/
import { randomIntBetween } from 'https://jslib.k6.io/k6-utils/1.1.0/index.js';

import { verifyResponse } from '../common/utils.js';

export function script1() {
  console.log('Executing script1...');

  // example code - replace with yours!
  const res = session.get('/public/crocodiles/');

  verifyResponse({
    response: res,
    expectedStatus: 200,
    expectedContent: 'Bert',
    failOnError: true,
    printOnError: true,
  });

  sleep(randomIntBetween(PAUSE_MIN, PAUSE_MAX));
}