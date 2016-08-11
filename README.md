# pkg-down [![Build status for pkg-down on Circle CI.](https://img.shields.io/circleci/project/sholladay/pkg-down/master.svg "Circle Build Status")](https://circleci.com/gh/sholladay/pkg-down "Pkg Down Builds")

> Find the topmost package.json file.

## Why?

 - Find the end user's project.
 - Useful to find where developer projects [might live](https://github.com/sholladay/code-dir).
 - Keeps you resilient to filesystem changes.

## Install

```sh
npm install pkg-down --save
```

## Usage

Get it into your program.

```js
const pkgDown = require('pkg-down');
```

Find the package.json file closest to the root of the filesystem.

```js
pkgDown().then(filepath => {
    console.log(filepath);  // => '/Users/sholladay/foo/package.json'
});
```

## Contributing

See our [contributing guidelines](https://github.com/sholladay/pkg-down/blob/master/CONTRIBUTING.md "The guidelines for participating in this project.") for more details.

1. [Fork it](https://github.com/sholladay/pkg-down/fork).
2. Make a feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. [Submit a pull request](https://github.com/sholladay/pkg-down/compare "Submit code to this project for review.").

## License

[MPL-2.0](https://github.com/sholladay/pkg-down/blob/master/LICENSE "The license for pkg-down.") © [Seth Holladay](http://seth-holladay.com "Author of pkg-down.")

Go make something, dang it.
