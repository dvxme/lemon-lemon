import {
  useCallback,
  useEffect,
} from 'react'
import { VoidFunction } from 'types/VoidFunction'


interface UseOnKeyDownParams {
  key: string
  onKeyDown: VoidFunction<KeyboardEvent>
}
export const useOnKeyDown: VoidFunction<UseOnKeyDownParams> = ({
  key,
  onKeyDown,
}) => {
  const listener = useCallback((event: KeyboardEvent) => {
    if (event.key === key) {
      onKeyDown(event)
    }
  }, [onKeyDown, key])
  
  useEffect(() => {
    document.addEventListener('keydown', listener)
    return () => {
      document.removeEventListener('keydown', listener)
    }
  }, [listener])
}