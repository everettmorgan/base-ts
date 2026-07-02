# Base TypeScript Project _(`base-ts`)_

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

> A minimal starter for small TypeScript libraries and packages.

This repository uses TypeScript, tsup, Vitest, ESLint flat config, Yarn 4, and GitHub Actions to provide a small dual-format library template that publishes both ESM and CommonJS builds. The package name and repository URL intentionally remain placeholders (`---name---` and `---repo---`) until real package metadata is provided.

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Project Layout](#project-layout)
- [Development](#development)
- [Continuous Integration](#continuous-integration)
- [Publishing](#publishing)
- [API](#api)
- [Maintainers](#maintainers)
- [Contributing](#contributing)
- [License](#license)

## Install

This project requires Node.js 22 or newer. Yarn 4.14.1 is managed through Corepack.

```sh
corepack enable
corepack prepare yarn@4.14.1 --activate
yarn install
```

## Usage

Build the package (ESM, CommonJS, and type declarations) into `dist/`:

```sh
yarn build
```

The package ships both module formats, and the consumer's tooling resolves the right one automatically through the `exports` map:

```js
// ESM
import * as library from '---name---';

// CommonJS
const library = require('---name---');
```

Deep imports from `src/` or internal `dist/` paths are not part of the public package contract.

## Project Layout

- `src/` - TypeScript source files.
- `test/` - Vitest tests.
- `dist/` - Generated output: `index.js` (ESM), `index.cjs` (CommonJS), and matching `index.d.ts` / `index.d.cts` declarations.
- `coverage/` - Generated Vitest coverage reports.
- `tsconfig.base.json` - Shared TypeScript strictness and runtime settings.
- `tsconfig.json` - Development typecheck project for `src/` and `test/`.
- `tsup.config.ts` - Build configuration (ESM + CommonJS bundles and declarations).
- `eslint.config.cjs` - ESLint flat config.
- `vitest.config.ts` - Vitest test and coverage configuration.

## Development

Run the full local validation suite:

```sh
yarn test
```

Useful scripts:

- `yarn clean` - remove generated build and coverage output.
- `yarn lint` - lint the project with ESLint.
- `yarn typecheck` - typecheck source and tests without emitting files.
- `yarn tests` - run Vitest with V8 coverage.
- `yarn build` - bundle ESM + CommonJS output and type declarations into `dist/` with tsup.
- `yarn test-publish` - run a package dry-run with the generated output.

## Continuous Integration

GitHub Actions runs on pushes, pull requests, merge queues, and manual dispatches.

- Node.js CI runs on Node.js 22, 24, and 26. Each job installs with Corepack-managed Yarn 4.14.1, then runs linting, typechecking, Vitest coverage, builds, and a package dry-run.
- The Node.js 24 job also runs `yarn npm audit --recursive --all`.
- CodeQL analyzes JavaScript and TypeScript with the extended security and quality query packs after an install and build.
- Dependabot checks npm and GitHub Actions updates weekly and groups related update pull requests.

## Publishing

Before publishing, replace the package identity placeholders in `package.json`:

```json
{
  "name": "---name---",
  "repository": {
    "type": "git",
    "url": "---repo---"
  }
}
```

Verify package contents:

```sh
yarn test-publish
```

Publish:

```sh
yarn release
```

## API

This starter does not export a library API yet. Add public exports from `src/index.ts` when real package behavior is introduced.

The published package surface is the root entrypoint only, through `exports["."]`, which exposes both `import` and `require` conditions with their matching type declarations.

## Maintainers

- [@everettmorgan](https://github.com/everettmorgan)

## Contributing

Questions and changes can go through GitHub issues and pull requests. Keep changes focused, run `yarn test` before submitting, and include tests for behavior changes.

## License

MIT (c) Everett Morgan. See [LICENSE](LICENSE).
