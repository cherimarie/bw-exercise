# BW Exercise

This project is an API providing an abstraction layer for email sending. It allows for easy switching between external email service providers via a change to environment variables. This switch is invisible to consumers.

Please see [design.md]('./design.md') for software design information.

## System Requirements

This is a Node application, and Node and npm are the only dependencies that must be manually installed before development.

- Node and npm https://nodejs.org/en/

## Development

### Running the Service Locally

Once you have npm installed, install all dependencies.

```
    $ npm install
```

Then, the server can be started with either command:

```
    $ npm start
    $ node index.js
```

### Code Quality

<!-- TODO: Linter? -->

### Testing

Tests are written with [Mocha](https://mochajs.org) and [Sinon](https://sinonjs.org/). Run the suite with either command:

```
    $ npm test
    $ npx mocha
```

Unit tests must be included with all changes to or additions of mission critical code.