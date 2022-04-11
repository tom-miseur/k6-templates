The following folders and files are included in the starter template:

### common

The `common` folder serves as a suitable location for storing re-usable functions.

An example of such a function can be found in `utils.js`, namely `randomIntBetween` (note the use of the `export` keyword to allow it to be imported elsewhere). This function can be used to add a random `sleep` "think-time" in `scripts/script1.js`.

### config

It is often useful to separate test configuration from  JavaScript code, particularly when the code is being kept under source control.

The contents of `test.json` will be merged with `options` set directly in the entry-point script (`main.js`). One of the more useful properties to store in this JSON file are [Scenario](https://k6.io/docs/using-k6/scenarios/) definitions.

The current `test.json` contains a single scenario that will run the exported function in `scripts/script1.js` as determined by the scenario's `exec` property that expects the name of an exported function to execute.

Note that it is necessary to re-export the function in the entry-point script (`main.js`) in order to make it accessible.

### scripts

The `scripts` folder can be used to store code that performs actual automation.

In the example script `script1.js`, a GET request is made and a [check](https://k6.io/docs/using-k6/checks/) is used to validate the response status code. A subsequent `sleep` statement is then used to apply "think-time" based on a random value between the global `PAUSE_MIN` and `PAUSE_MAX` constants defined in the entry-point script `main.js`.