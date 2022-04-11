The following folders and files are included in the starter template:

### common

The `common` folder serves as a suitable location for storing re-usable (exported) functions. It currently contains a commented-out example of such a function.

### config

It is often useful to separate test configuration from JavaScript code, particularly when the code is being kept under source control.

The contents of `test.json` will be merged with `options` set directly in the entry-point script (`main.js`). One of the more useful properties to store in this JSON file are [Scenario](https://k6.io/docs/using-k6/scenarios/) definitions.

The current `test.json` contains a single scenario that will run the exported function in `scripts/script1.js` as determined by the scenario's `exec` property that expects the name of an exported function to execute.

Note that it is necessary to re-export the function in the entry-point script (`main.js`) in order to make it accessible.

### scripts

The `scripts` folder can be used to store code that performs actual automation.

Unlike the `httpx` template that uses `verifyResponse` to perform response validation/assertion, `k6chaijs` does so instead with [ChaiJS](https://www.chaijs.com/) to enable BDD- and TDD-style assertions.