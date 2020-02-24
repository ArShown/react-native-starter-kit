import { useEffect, useState } from 'react';
import { AppState } from 'react-native';

/**
 * useAppState
 * @link https://facebook.github.io/react-native/docs/appstate.html
 * @returns {'active'|'background'|'inactive'}
 *
 * @example
 *
 * import useAppState from '@utils/hooks/use-app-state';
 *
 * export const Component = () => {
 *   const appState = useAppState();
 *
 *   return <Text>app's state:{appState}</Text>
 * }
 */
const useAppState = () => {
  const [appState, setAppState] = useState(AppState.currentState);

  const _handleAppStateChange = nextAppState => {
    setAppState(nextAppState);
  };

  useEffect(() => {
    AppState.addEventListener('change', _handleAppStateChange);
    return () => {
      AppState.removeEventListener('change', _handleAppStateChange);
    };
  }, []);

  return appState;
};

export default useAppState;
