import { check, fail } from 'k6';

export function verifyResponse({
  response,
  expectedStatus,
  expectedContent,
  failOnError,
  printOnError,
  doCheck = true,
  verbose = false,
  dynamicIds,
  dynamicIdPlaceholder = '[id]',
}) {
  if (!response) throw 'No response object provided';
  if (!expectedStatus && !expectedContent) throw 'No expected status or content specified in call to verifyResponse for URL ' + response.url;

  if (Array.isArray(response)) {
    response.forEach((r) => {
      verify(
        r, 
        expectedStatus, 
        expectedContent,
        failOnError, 
        printOnError, 
        doCheck, 
        verbose, 
        dynamicIds, 
        dynamicIdPlaceholder);
    });
  } else {
    verify(
      response,
      expectedStatus, 
      expectedContent, 
      failOnError, 
      printOnError, 
      doCheck, 
      verbose, 
      dynamicIds,
      dynamicIdPlaceholder);
  }
}

function verify(
  response,
  expectedStatus,
  expectedContent,
  failOnError,
  printOnError,
  doCheck,
  verbose,
  dynamicIds,
  dynamicIdPlaceholder,
) {
  let url = response.url;
  let contentCheckResult, statusCheckResult;

  // replace dynamic IDs in the URL
  if (dynamicIds) {
    dynamicIds.forEach((dynamicId) => {
      if (response.url.includes(dynamicId)) {
        url = url.replace(dynamicId, dynamicIdPlaceholder);
      }
    });
  }

  // status check
  if (expectedStatus) {
    const statusText = `${response.request.method} ${url} status ${expectedStatus}`;
    statusCheckResult = response.status === expectedStatus;

    if (doCheck) {
      check(response, {
        [statusText]: () => statusCheckResult
      });
    }

    if (statusCheckResult && verbose) console.debug(statusText);
  }

  // content check
  if (expectedContent) {
    const contentText = `"${expectedContent}" in ${url}`;

    try {
      contentCheckResult = response.body.includes(expectedContent);
    } catch (err) { // no response.body
      contentCheckResult = false;
    }

    if (doCheck) {
      check(response, {
        [contentText]: (r) => contentCheckResult,
      });
    }

    if (contentCheckResult && verbose) console.debug(contentText);
  }

  // if either check failed...
  if (typeof statusCheckResult !== 'undefined' && !statusCheckResult || !contentCheckResult && expectedContent) {
    // print the response body if it exists (timeouts won't have any)
    if (printOnError && response.body) console.warn("Unexpected response:\n" + response.body);

    if (failOnError) {
      // if both checks failed:
      if (!statusCheckResult && (!contentCheckResult && expectedContent)) {
        fail(`${response.request.method} ${url} unexpected status ${response.status} and "${expectedContent}" not found in response`);
      }
      else {
        if (!statusCheckResult && expectedStatus) {
          fail(`Received unexpected status code ${response.status} for URL: ${url}, expected ${expectedStatus}`);
        }
        else if (!contentCheckResult) {
          fail(`"${expectedContent}" not found in response for URL: ${url}`);
        }
      }
    }
  }
}
