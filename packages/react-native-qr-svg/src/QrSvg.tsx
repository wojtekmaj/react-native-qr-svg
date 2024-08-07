import { useMemo } from 'react';
import qrcodeGenerator from 'qrcode-generator';
import { Svg, Path } from 'react-native-svg';

import type { SvgProps } from 'react-native-svg';

export type TypeNumber =
  | 0 // Automatic type number
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27
  | 28
  | 29
  | 30
  | 31
  | 32
  | 33
  | 34
  | 35
  | 36
  | 37
  | 38
  | 39
  | 40;

export type ErrorCorrectionLevel = 'L' | 'M' | 'Q' | 'H';

export type QrSvgProps = {
  /**
   * Background color.
   *
   * @default 'white'
   * @example 'beige'
   * @example '#fefefe'
   */
  bgColor?: string;
  /**
   * Foreground color.
   *
   * @default 'black'
   * @example 'black'
   * @example '#000000'
   */
  fgColor?: string;
  /**
   * [Error correction level](https://en.wikipedia.org/wiki/QR_code#Error_correction). Can be `"L"`, `"M"`, `"Q"` and `"H"`.
   *
   * @default 'L'
   * @example 'M'
   */
  level?: ErrorCorrectionLevel;
  /**
   * Margin in pixels.
   *
   * @default 0
   * @example 4
   */
  margin?: number;
  /**
   * Type (size). Can be any number from 0 to 40. Set to `0` or leave as undefined to use the smallest possible size.
   *
   * @default 0
   * @example 10
   */
  type?: TypeNumber;
  /**
   * Value to render.
   *
   * @example 'Hello world'
   */
  value: string;
};

const rect = 'v1h1v-1z';

function makePath(qrcode: QRCode, margin: number, reverse?: boolean) {
  const moduleCount = qrcode.getModuleCount();

  let d = '';

  for (let row = 0; row < moduleCount; row++) {
    for (let col = 0; col < moduleCount; col++) {
      if (qrcode.isDark(row, col) === !reverse) {
        d += `M${col + margin},${row + margin}${rect}`;
      }
    }
  }

  return d;
}

export default function QrSvg({
  bgColor = '#fff',
  fgColor = '#000',
  level = 'L',
  margin = 0,
  type = 0,
  value = '',
  ...otherProps
}: QrSvgProps & Omit<SvgProps, keyof QrSvgProps>): React.ReactElement {
  const qrcode = useMemo(() => {
    const qrcode = qrcodeGenerator(type, level);
    qrcode.addData(value);
    qrcode.make();
    return qrcode;
  }, [level, type, value]);

  const size = qrcode.getModuleCount() + margin * 2;

  const bgPath = makePath(qrcode, margin, true);
  const fgPath = makePath(qrcode, margin);

  return (
    <Svg accessibilityLabel={value} viewBox={`0 0 ${size} ${size}`} {...otherProps}>
      <Path d={bgPath} fill={bgColor} />
      <Path d={fgPath} fill={fgColor} />
    </Svg>
  );
}
