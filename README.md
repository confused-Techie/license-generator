# License-Generator Pulsar Package

The `license-generator` Pulsar Package is able to generate any valid, recognized [SPDX](https://spdx.org/licenses/) license.

This package is conceptually inspired by [`atom-oss-license`](https://github.com/mmk2410/atom-oss-license), but as that package is now archived, and had some licenses missing, it's now been totally reinvented here to allow support for as many licenses as possible.

## Usage

To use this package, simply install then open up the Command Palette [`CTRL+SHIFT+P`/`CMD+SHIFT+P`] and search for the license you want.
All licenses provided by this package are prefixed with `LicenseGenerator:` to make them easy to identify.

When using this package you'll first need to create the file for your license to be inserted into. Then ensuring that the pane including your file is the active one within Pulsar, use the Command Palette and select the license you want, and the whole license will be inserted into your document.

Additionally, this package supports a number of automatic insertions into the license, such as where a license calls for the current year, the current year will be automatically inserted.

But this package also supports automatic insertions of the following information, where applicable:

  * `name`: Your name
  * `email`: Your email
  * `professional-identification`: Some licenses allow a professional identification to be added, such as your title.
  * `url`: A URL to refer to you or your organization.
  * `promotional slogan`: Some licenses allow a promotional slogan to be added.

All of these values are configurable in this package's settings.

## Issues

### Automatic Insertion Issues

If you encounter any issues with automatic insertion, such as an insertion not occurring where you might expect, feel free to open an issue on this repo, or open a PR adding the automatic insertion template into the license where you expect it.

The supported automatic insertion templates are below:

  * Name: `<NAME>`
  * Email: `<EMAIL>`
  * Professional Identification: `<PROFESSIONAL IDENTIFICATION>`
  * URL: `<URL>`
  * Promotional Slogan: `<PROMOTIONAL SLOGAN>`

### Issues with the text of a license

If you encounter or find any issues with the content of a license, keep in mind this package does zero modifications of the license content beyond support for automatic insertions.

Any issues found should have an issue or PR raised against the [SPDX](https://github.com/spdx/license-list-data) repo where this data originates.

## Development

The general process to update all licenses here is as follows:

1. Ensure you have Git installed and available via your CLI.
2. Run `npm run update` to run the automatic update script via NodeJS.
3. After running all license files will be replaced with their up to date versions, as well as any new licenses will be added.
4. Also, after running a new file in the root of the repo will be created titled `COMMANDS.txt` this contains valid JavaScript that should replace all Atom Command entries within `./lib/license-generator.js` starting at the line declaring this text is automatically generated.
5. Finally, you'll need to update any and all Automatic Insertions throughout all packages. There is a `replacements.patch` file showing all the previous changes needed for automatic insertions, and once done you should create the same file for the next maintainer.
