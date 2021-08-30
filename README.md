### No longer maintained

Use [setup-crate](https://github.com/extractions/setup-crate) instead. For
example:

```yaml
- uses: extractions/setup-crate@v1
  with:
    owner: rust-lang
    name: mdBook
```

# `setup-mdbook` action

![build](https://img.shields.io/github/workflow/status/extractions/setup-mdbook/build)

This GitHub Action will install the latest release of
[mdBook](https://github.com/rust-lang/mdBook) for you.

## Usage

### Inputs

| Name             | Required | Description                             | Type   | Default |
| ---------------- | -------- | --------------------------------------- | ------ | ------- |
| `mdbook-version` | no       | A valid NPM-style semver specification. | string | *       |

The semver specification is passed directly to NPM's [semver
package](https://www.npmjs.com/package/semver). This GitHub Action will install
the latest matching release. Examples include

- `mdbook-version: '*'` latest version (default).
- `mdbook-version: '0.4'` equivalent to `>=0.4.0 <0.5.0`.
- `mdbook-version: '0.4.x'` equivalent to `>=0.4.0 <0.5.0`.
- `mdbook-version: '0.4.6'` equivalent to `=0.4.6`.
- `mdbook-version: '^0.4.6'` equivalent to `>=0.4.6 <0.5.0`.

### Basic example

Add the following to your workflow.

```yaml
- uses: extractions/setup-mdbook@v1
  with:
    mdbook-version: 0.4
  env:
    # this is not required but add it if you get any rate limiting issues
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

## License

Licensed under either of

- Apache License, Version 2.0 ([LICENSE-APACHE](LICENSE-APACHE) or
   http://www.apache.org/licenses/LICENSE-2.0)
- MIT license ([LICENSE-MIT](LICENSE-MIT) or http://opensource.org/licenses/MIT)

at your option.
