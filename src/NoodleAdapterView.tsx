import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { NoodleAdapterViewProps } from './NoodleAdapter.types';

const NativeView: React.ComponentType<NoodleAdapterViewProps> =
  requireNativeViewManager('NoodleAdapter');

export default function NoodleAdapterView(props: NoodleAdapterViewProps) {
  return <NativeView {...props} />;
}
