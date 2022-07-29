import { Httpx } from 'https://jslib.k6.io/httpx/0.0.3/index.js';

export { scenario1 } from './scenarios/scenario1.js';

globalThis.BASE_URL = __ENV.BASE_URL || 'https://test-api.k6.io';
globalThis.PAUSE_MIN = __ENV.PAUSE_MIN || 1;
globalThis.PAUSE_MAX = __ENV.PAUSE_MAX || 5;

// initialize a Httpx client with the base URL, global headers and a request timeout:
globalThis.session = new Httpx({
  baseURL: BASE_URL,
  headers: {
    'User-Agent': 'k6 (https://k6.io)',
  },
  timeout: 60000 // 60 sec (k6 default)
});

// load test config, used to populate exported options object:
const testConfig = JSON.parse(open('./config/test.json'));

// combine the above with options set directly:
export const options = Object.assign({
  insecureSkipTlsVerify: false, // set to true to ignore certificate errors (e.g. self-signed test certs)
}, testConfig);

export default function () {
  console.log('No scenarios in test.json. Executing default function...');
}