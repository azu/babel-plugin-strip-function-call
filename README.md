# babel-plugin-strip-function-call

Babel plugin that strip any function call.

This is simiar with [yahoo/strip-loader: Webpack loader to strip arbitrary functions out of your production code.](https://github.com/yahoo/strip-loader "yahoo/strip-loader: Webpack loader to strip arbitrary functions out of your production code.").

## Install

Install with [npm](https://www.npmjs.com/):

    npm install babel-plugin-strip-function-call --save-dev

## Usage


Via `.babelrc`

```json
{
  "plugins": [
    ["strip-function-call", {
        "strip": [
            "console.log"
        ]
    }]
  ]
}
```

In production only:

```json
{
  "presets": [
    "es2015"
  ],
  "env": {
    "production": {
        "plugins": [
            ["strip-function-call", {
                "strip": [
                    "console.log"
                ]
            }]
        ]
    }
  }
}
```

## Options

- `strip`: `string[]`
    - specify to strip function names

For example, want to strip `console.log(...)`.
Write following:

```js
["strip-function-call", {
    "strip": [
        // not include ()
        "console.log"
    ]
}]
```

### Notes

```js
["strip-function-call", {
    "strip": [
        // not include ()
        "console.log"
    ]
}]
```

The pattern don't strip `console["log"](...)` by design.
If you want to strip computed method pattern, please file issue.


## Changelog

See [Releases page](https://github.com/azu/babel-plugin-strip-function-call/releases).

## Running tests

Install devDependencies and Run `npm test`:

    npm i -d && npm test

## Contributing

Pull requests and stars are always welcome.

For bugs and feature requests, [please create an issue](https://github.com/azu/babel-plugin-strip-function-call/issues).

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

- [github/azu](https://github.com/azu)
- [twitter/azu_re](https://twitter.com/azu_re)

## License

MIT © azu
