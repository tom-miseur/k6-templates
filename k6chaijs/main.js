export { scenario1 } from './scenarios/scenario1.js';

const PAUSE_MIN = __ENV.PAUSE_MIN || 1;
const PAUSE_MAX = __ENV.PAUSE_MAX || 5;

// load test config, used to populate exported options object:
const testConfig = JSON.parse(open('./config/test.json'));

// combine the above with options set directly:
export const options = Object.assign({
  insecureSkipTlsVerify: false, // set to true to ignore certificate errors (e.g. self-signed test certs)
}, testConfig);

export default function () {
  console.log('No scenarios in test.json. Executing default function...');
}