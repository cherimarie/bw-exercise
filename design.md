# Introduction


## Problem

The main application often needs to switch which third party mail service it uses.

## Solution

Create an intermediary mail service that abstracts the external tools, allowing main application to always use the same endpoint. The intermediary service can switch which external service it uses with just a simple config change and redeploy.

## Scope


### Design Considerations

Scale. Brightwheel sends millions of emails to users every day.

Reliability. This service is needed specifically to address reliability concerns with third party services.

### Specifications

Accepts POST requests to /email endpoint with paramaters (all required):

 - `to` The email address to send to
 - `to_name` The name to accompany the email
 - `from` The email address in the from and reply fields
 - `from_name` the name to accompany the from/reply emails
 - `subject` The subject line of the email
 - `body` the HTML body of the email

Validates paramaters.

Returns error response if any are missing/incorrect type.

Makes call to selected external service, passing through received paramaters in correct format.

Returns success response as appropriate.

## System Overview

This project is built with Node, using Express library. Node provides nonblocking concurrency, allowing for heavy traffic. Express is widely used, well documented, and offers some conveniences.

Secrets management is via environment variables, using the dotenv library.

HTTP requests with Axios library.

Swagger is used for documentation and data validation.

Unit testing is done with Sinon and Mocha. Jest may be a better choice, as it has mocking built in. We may want to revisit this decision later.

## System Architecture



## Resources

https://www.npmjs.com/package/dotenv

## Next Steps

With additional time and resources, I would implement the following:

-

