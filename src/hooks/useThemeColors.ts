import {useTheme} from 'hooks';

import {colors} from '../constants';

export function useThemeColor(
  props: {light?: string; dark?: string},
  colorName: keyof typeof colors.light & keyof typeof colors.dark,
) {
  const {theme} = useTheme() ?? 'light';
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  }
  return colors[theme][colorName];
}
