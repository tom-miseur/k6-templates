The following folders and files are included in the starter template:

### common

The `common` folder serves as a suitable location for storing re-usable functions.

An example of such a function can be found in `utils.js`, namely `verifyResponse` (note the use of the `export` keyword to allow it to be imported elsewhere). This function can be used to generate [checks](https://k6.io/docs/javascript-api/k6/check-val-sets-tags/) for the response by specifying the expected status code and/or expected `response.body` content. Example usage can be found in `scripts/script1.js`.

### config

It is often useful to separate test configuration from  JavaScript code, particularly when the code is being kept under source control.

The contents of `test.json` will be merged with `options` set directly in the entry-point script (`main.js`). One of the more useful properties to store in this JSON file are [Scenario](https://k6.io/docs/using-k6/scenarios/) definitions.

The current `test.json` contains a single scenario that will run the exported function in `scripts/script1.js` as determined by the scenario's `exec` property that expects the name of an exported function to execute.

Note that it is necessary to re-export the function in the entry-point script (`main.js`) in order to make it accessible.

### scripts

The `scripts` folder can be used to store code that performs actual automation. In the case of Httpx, this involves using the global `session` object (declared in `main.js`) to perform HTTP requests and validating responses.

In the example script `script1.js`, a GET request is made to the endpoint (note the exclusion of the absolute URL; only the path is needed) and the response is validated with `verifyResponse` from `utils.js`. A subsequent `sleep` statement can then be used to apply "think-time" based on a random value between the global `PAUSE_MIN` and `PAUSE_MAX` constants defined in the entry-point script `main.js`.