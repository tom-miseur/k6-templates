import { sleep } from 'k6';

import http from 'k6/http';

// https://k6.io/docs/javascript-api/jslib/utils/randomintbetween-min-max/
import { randomIntBetween } from 'https://jslib.k6.io/k6-utils/1.1.0/index.js';

// https://k6.io/docs/javascript-api/jslib/chaijs
import { describe, expect } from 'https://jslib.k6.io/k6chaijs/4.3.4.0/index.js';

export function script1() {  
  // example code - replace with yours!
  
  console.log('Executing script1...');

  describe('Get Public Crocodiles', () => {
    const res = http.get('https://test-api.k6.io/public/crocodiles');

    expect(res.status, "response status").to.equal(200)
    expect(res).to.have.validJsonBody()
    expect(res.json().length, "Number of crocs").to.be.above(4)
  });

  sleep(randomIntBetween(globalThis.PAUSE_MIN, globalThis.PAUSE_MAX));
}