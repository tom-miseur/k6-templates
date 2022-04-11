# k6-templates
 
This repo contains various opinionated starter templates for k6 projects. Common across all templates is the use of folders and multiple JavaScript files to encourage code organization.

The `vanilla` template uses built-in k6 APIs and therefore requires no external dependencies. The remaining templates offer alternatives to built-in APIs that add functionality as described below.

## [Httpx](httpx/README.md)

This template uses the [Httpx](https://k6.io/docs/javascript-api/jslib/httpx/) library to perform requests instead of the built-in [k6/http](https://k6.io/docs/javascript-api/k6-http/) module. Httpx caters for setting:
- a base URL for all requests so that it can easily be changed (e.g. when testing different environments)
- global request headers
- a global request timeout

The template also includes an example re-usable function for performing response validation called `verifyResponse`.

## [k6chaijs](k6chaijs/README.md)

This template uses the [ChaiJS](https://www.chaijs.com/) library to perform assertions instead of using the built-in [group](https://k6.io/docs/javascript-api/k6/group-name-fn/) and [check](https://k6.io/docs/javascript-api/k6/check-val-sets-tags/) functions.