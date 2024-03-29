# Creating icons

OUI provides an ever-growing set of [icons][icons], but our set can be incomplete. If you find you need an icon that does not exist, create a new issue and tag it with the *icons* label. A designer from the OUI team will respond to discuss your needs.

If you are willing and able to design the icon yourself, this document describes the guidelines for designing a new icon, cleaning up the SVG, and getting it added to OUI. While designers on the OUI team are available to assist, we greatly appreciate your contributions and pull requests.

If you read through these guidelines or begin designing your icon and realize you're in too deep, then create an issue in this repo and request assistance. An OUI team member will reply and discuss options.

_**Note**: The `OuiIcon` component accepts external references to icon files, so you have the option to maintain the icon in your consuming application._

## Design the icon

From a content perspective, we've taken an approach of being open to many types of icons so long as they don't duplicate an icon that already exists. Stylistically, we have more stringent requirements outlined below.

### Content

While we're pretty much open to all requests, we ask that you first try to use an existing icon as this helps us avoid having multiple versions of the same glyph.  Likewise, if there is a universally known icon that represents an action, we recommend leveraging those existing patterns (e.g. a scissors for cut).

Finding and sharing reference icons is a great way to get moving if you're uncertain of the general shape. Post these examples to your issue and we'll provide feedback.

Lastly, we reserve the right to reject any icons that do not fit the OUI style or may be deemed inappropriate.

### Style

This is where things get more opinionated. To maintain a cohesive, high quality icon set, we require that all new glpyhs adhere to the following guidelines:

- Use an outline style with a 1 pixel width stroke, straight edges, rounded corners and ends
- Adhere to an overall 16 pixel square shape

![Dimensions](https://user-images.githubusercontent.com/446285/63458957-56bd8c00-c419-11e9-958c-9fd912736180.png)

- Center the glyph in the square leaving a 1 or 2 pixel trim area, where possible
- Align vertical and horizontal paths to a 16x16 pixel grid

![Guides](https://user-images.githubusercontent.com/446285/63458958-5624f580-c419-11e9-89cf-45fa1b596329.png)

#### _For Sketch users_
_As a reference, you can download and view the `icons.sketch` file via the **Sketch libraries** link atop the [OUI documentation site][docs] site. The Symbols page within this file contains artboards for the vast majority of OUI glyphs._

#### _For non-Sketch users_
_While we use Sketch to maintain our internal design library, you can use any design tool to produce the SVG file._

## Add the icon to the OUI repo

Once you've designed your new icon, the last step is adding it to the OUI repo.

### Clean the SVG

OUI provides SVG icon formats only. After exporting your icon as an SVG from your design tool, open it in a code or text editor and remove any unnecessary elements and attributes, such as:
- `<def>...</def>`
- `<use>...</use>`
- `id: <value>`
- `fill: <value>`
- `fill-rule: <value>` or `fillRule: <value>`

_**Note**: Sketch users can use the [SVGO plugin][sketch-SVGO-plugin] to remove any extraneous code added by Sketch. Once installed, this plugin will run automatically any time an SVG is exported from Sketch._

### Prepare the pull request

Create a new feature branch against this repo and make the following changes:

_1. Add your glyph to the `OuiIcon` component_
- Add your SVG file to the `/src/components/icon/assets` folder
- Add a reference in the `/src/components/icon/icon.tsx` file (in alphabetical order)

_2. Display the icon in the docs_
- Add the icon name to `/src-docs/src/views/icon/icons.js` *

_3. Compile and test_
- Run `yarn compile-icons`
- Preview your icon locally at `http://localhost:8030/#/display/icons` **
- Switch the docs to dark mode and verify that the icon is visible (all paths should be filled with the reverse color)
- Run `yarn run test-unit icon -u` to create/update the jest snapshots

If everything looks good, then commit your changes, push up your branch, and open a PR! :raised_hands:

Opening a PR will notify the OUI team that your work is ready for review. Please include a screenshot in the description and reference the issue that your PR fixes.

### Ship it
Once your PR is approved, you will be able to merge it and give yourself a well-deserved pat on the back. Finally, stay tuned for the next release of OUI at which point your icon will become available to the masses and appear on the OUI docs site.

:trophy: _**Welcome to the Official OUI Icon Design Club**_ :beers:

---

_\* The Icons page actually contains several sections. In most cases, you will be adding your icon to the base set. However, if your icon should appear in a different set, then add it to the appropriate section file in `/src-docs/src/views/icon`._

_\** Run `yarn && yarn start` to view the OUI docs site locally._


[icons]: https://elastic.github.io/eui/#/display/icons
[docs]: https://elastic.github.io/eui/
[sketch-SVGO-plugin]: [https://www.sketch.com/extensions/plugins/svgo-compressor/]
[sketch-symbol-organizer-plugin]: [https://github.com/sonburn/symbol-organizer]
