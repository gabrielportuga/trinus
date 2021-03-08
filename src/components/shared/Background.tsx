import React, { memo } from 'react';
import {
  ImageBackground,

  KeyboardAvoidingView, Platform, StyleSheet
} from 'react-native';
import { HeaderHeightContext } from "@react-navigation/stack";

type Props = {
  children: React.ReactNode;
};

const Background = ({ children }: Props) => (
 
    <HeaderHeightContext.Consumer>
      {headerHeight => (
        <KeyboardAvoidingView {...(Platform.OS === "ios" ? { behavior: "padding" } : {})} 
        contentContainerStyle={{ flex: 1 }} style={styles.container} 
        behavior="padding" keyboardVerticalOffset={-(headerHeight + 60)}>
          {children}
        </KeyboardAvoidingView>
      )}
    </HeaderHeightContext.Consumer>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
  },
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 400,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default memo(Background);
