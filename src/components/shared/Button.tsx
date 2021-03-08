import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import { Button as PaperButton } from 'react-native-paper';
import { theme } from '../../core/theme';

type Props = React.ComponentProps<typeof PaperButton>;

const Button = ({ color, mode, style, children, ...props }: Props) => (
  <PaperButton
    style={[
      styles.button,
      mode === 'outlined' && { backgroundColor: theme.colors.surface },
      style,
    ]}
    labelStyle={[mode === 'outlined' ? styles.textBtWhite : styles.text]}
    mode={mode}
    color={color}
    {...props}
  >
    {children}
  </PaperButton>
);

const styles = StyleSheet.create({
  button: {
    width: '100%',
    marginVertical: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
    color: '#FFFF'
  },
  textBtWhite: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
    color: '#696969'
  },
});

export default memo(Button);
