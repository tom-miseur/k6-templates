# k6-templates
 
This repo contains various opinionated starter templates for [k6](https://k6.io/) projects.

Common across all templates is the use of folders and multiple JavaScript files to encourage code organization:

- `common`: A suitable location for storing re-usable functions
- `config`: Contains a JSON file that is used to populate the [options](https://k6.io/docs/using-k6/options/) object at runtime (allowing the separation of test config from code)
- `scenarios`: A folder for storing scripts representing end-to-end scenarios
- `scripts`: A folder for storing code that performs the actual automation


## [Vanilla](vanilla/README.md)
This template uses built-in k6 APIs and therefore requires no external dependencies. Use this template if you prefer to use the built-in APIs over those provided by the other templates.

## [Httpx](httpx/README.md)

This template uses the [Httpx](https://k6.io/docs/javascript-api/jslib/httpx/) library to perform requests instead of the built-in [k6/http](https://k6.io/docs/javascript-api/k6-http/) module. Httpx caters for setting:
- a base URL for all requests so that it can easily be changed (e.g. when testing different environments)
- global request headers
- a global request timeout

The template also includes an example re-usable function for performing response validation called `verifyResponse`.

## [k6chaijs](k6chaijs/README.md)

This template uses the [ChaiJS](https://www.chaijs.com/) library through [k6chaijs](https://k6.io/docs/javascript-api/jslib/k6chaijs/) to perform assertions instead of using the built-in [group](https://k6.io/docs/javascript-api/k6/group-name-fn/) and [check](https://k6.io/docs/javascript-api/k6/check-val-sets-tags/) functions.
