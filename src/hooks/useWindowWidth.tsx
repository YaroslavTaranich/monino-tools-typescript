import { useLayoutEffect, useState } from 'react'

export function useWindowWidth() {
  const [width, setWidth] = useState<number>(window.innerWidth)

  useLayoutEffect(() => {
    const updateSize = () => setWidth(window.innerWidth)

    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  return width
}
