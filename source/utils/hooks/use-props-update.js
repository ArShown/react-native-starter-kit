import { useRef, useEffect } from 'react';
import { equals } from 'ramda';

/**
 * usePropsUpdate
 * @desc 當監聽的資料過於複雜可使用
 * @notice
 * 1. 建議先使用 useEffect 或 useMemo，當有問題才嘗試使用
 * 2. callback 呼叫時機是渲染之後(同 useEffect)
 * 3. 不支援 callback 帶回傳值喔！要實作 componentUnmount 還是透過 useEffect 吧
 *
 * @param {function} callback 資料異動時的處理
 * @props {Array<any>} props 監聽異動的資料
 *
 * @example
 *
 * import { usePropsUpdate, usePathSelector } from '@core/hooks'
 *
 * export const Component = () => {
 *   const a = usePathSelector('aaa');
 *   usePropsUpdate(() => {
 *     // do something
 *   },[a])
 * }
 */
const usePropsUpdate = (fn, props) => {
  const _ = useRef([]);
  useEffect(() => {
    const preProps = _.current;
    if (!equals(preProps, props)) {
      _.current = props;
      fn();
    }
  });
};

export default usePropsUpdate;
