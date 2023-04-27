import {
  VoidFunction,
  VoidFunctionWithoutParam,
} from 'types/VoidFunction'
import {
  useCallback,
  useMemo,
  useState,
} from 'react'


interface UseVisibilityControls {
  show: VoidFunctionWithoutParam
  hide: VoidFunctionWithoutParam
  set: VoidFunction<boolean>
}

type UseVisibility = (startsVisible?: boolean) => [boolean, UseVisibilityControls]

export const useVisibility: UseVisibility = (startsVisible = false) => {
  const [isVisible, set] = useState(startsVisible)
  
  const show = useCallback(() => {
    set(true)
  }, [])
  
  const hide = useCallback(() => {
    set(false)
  }, [])
  
  const controls = useMemo(() => ({
    show,
    hide,
    set,
  }), [hide, show])
  
  return [isVisible, controls]
}