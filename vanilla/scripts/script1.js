import { sleep, check } from 'k6';

import http from 'k6/http';

import { randomIntBetween } from '../common/utils.js';

export function script1() {  
  // example code - replace with yours!
  
  console.log('Executing script1...');

  const res = http.get('https://test-api.k6.io/public/crocodiles');

  check(res, {
    'status is 200': r => r.status === 200,
  });

  sleep(randomIntBetween(globalThis.PAUSE_MIN, globalThis.PAUSE_MAX));
}
