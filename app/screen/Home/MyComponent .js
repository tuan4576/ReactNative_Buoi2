import { DrawerProgressContext } from 'react-native-drawer-layout';
import React from 'react'
class MyComponent extends React.Component {
  static contextType = DrawerProgressContext;

  render() {
    const progress = this.context;
  }
}