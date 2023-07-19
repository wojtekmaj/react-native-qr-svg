[![npm](https://img.shields.io/npm/v/@wojtekmaj/react-native-qr-svg.svg)](https://www.npmjs.com/package/@wojtekmaj/react-native-qr-svg) ![downloads](https://img.shields.io/npm/dt/@wojtekmaj/react-native-qr-svg.svg) [![CI](https://github.com/wojtekmaj/react-native-qr-svg/workflows/CI/badge.svg)](https://github.com/wojtekmaj/react-native-qr-svg/actions)

# React-Native-QR-SVG

Render QR codes as SVG in your React Native app.

## tl;dr

- Ensure that you have `react-native-svg@^12.0.0` or `react-native-svg@^13.0.01` installed.
- Install by executing `npm install @wojtekmaj/react-native-qr-svg` or `yarn add @wojtekmaj/react-native-qr-svg`.
- Import by adding `import QrSvg from '@wojtekmaj/react-native-qr-svg'`.
- Use by adding `<QrSvg value="Hello world" />`.

## Demo

A minimal demo page can be found in `sample` directory.

## Getting started

### Compatibility

Your project needs to use React 16.8 or later.

Need library for React? Check out [React-QR-SVG](https://github.com/wojtekmaj/react-qr-svg).

### Installation

First, ensure that you have `react-native-svg@^12.0.0` or `react-native-svg@^13.0.0` installed. Then, add React-Native-QR-SVG to your project by executing `npm install @wojtekmaj/react-native-qr-svg` or `yarn add @wojtekmaj/react-native-qr-svg`.

### Usage

Here's an example of basic usage:

```tsx
import { View } from 'react-native';
import QrSvg from '@wojtekmaj/react-native-qr-svg';

function MyApp() {
  return (
    <View>
      <QrSvg value="Hello world" />
    </View>
  );
}
```

## User guide

### QrSvg

Renders QR code as SVG.

#### Props

| Prop name | Description                                                                                                             | Default value | Example values                                                         |
| --------- | ----------------------------------------------------------------------------------------------------------------------- | ------------- | ---------------------------------------------------------------------- |
| bgColor   | Background color.                                                                                                       | `"white"`     | <ul><li>Color name: `"beige"`</li><li>Color hex: `"#fefefe"`</li></ul> |
| fgColor   | Foreground color.                                                                                                       | `"black"`     | <ul><li>Color name: `"black"`</li><li>Color hex: `"#000000"`</li></ul> |
| level     | [Error correction level](https://en.wikipedia.org/wiki/QR_code#Error_correction). Can be `"L"`, `"M"`, `"Q"` and `"H"`. | `"L"`         | `"M"`                                                                  |
| margin    | Margin in pixels.                                                                                                       | `0`           | `4`                                                                    |
| type      | Type (size). Can be any number from 0 to 40. Set to `0` or leave as undefined to use the smallest possible size.        | `0`           | `10`                                                                   |
| value     | Value to render.                                                                                                        | n/a           | `"Hello world"`                                                        |

You can also specify all the props that are valid for the `<svg>` React element (e.g. `style`, `className` or `width`).

## License

The MIT License.

## Author

<table>
  <tr>
    <td>
      <img src="https://github.com/wojtekmaj.png?s=100" width="100">
    </td>
    <td>
      Wojciech Maj<br />
      <a href="mailto:kontakt@wojtekmaj.pl">kontakt@wojtekmaj.pl</a><br />
      <a href="https://wojtekmaj.pl">https://wojtekmaj.pl</a>
    </td>
  </tr>
</table>

## Thank you

This project wouldn't be possible without the awesome work of Dan Homola <dan.homola@hotmail.cz> who created its original version.
