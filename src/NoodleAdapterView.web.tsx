import * as React from 'react';

import { NoodleAdapterViewProps } from './NoodleAdapter.types';

export default function NoodleAdapterView(props: NoodleAdapterViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
