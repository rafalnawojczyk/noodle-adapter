import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to NoodleAdapter.web.ts
// and on native platforms to NoodleAdapter.ts
import NoodleAdapterModule from './NoodleAdapterModule';
import NoodleAdapterView from './NoodleAdapterView';
import { ChangeEventPayload, NoodleAdapterViewProps } from './NoodleAdapter.types';

// Get the native constant value.
export const PI = NoodleAdapterModule.PI;

export function hello(): string {
  return NoodleAdapterModule.hello();
}

export async function setValueAsync(value: string) {
  return await NoodleAdapterModule.setValueAsync(value);
}

const emitter = new EventEmitter(NoodleAdapterModule ?? NativeModulesProxy.NoodleAdapter);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { NoodleAdapterView, NoodleAdapterViewProps, ChangeEventPayload };
