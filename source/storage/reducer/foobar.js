/* @flow */
import reducerCreator from './_reducer-creator';

/* action type */
export const FOO = 'foo';
export const BAR = 'bar';

export const defaultState = 'foo';

export default reducerCreator(defaultState, {
  [FOO]: () => FOO,
  [BAR]: () => BAR
});
