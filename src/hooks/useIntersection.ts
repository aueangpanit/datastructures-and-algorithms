import {
  RefObject,
  useEffect,
  useState,
} from "react"

export const useIntersection = (ref: RefObject<HTMLElement>): [boolean] => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const entry = entries[0]
      if (entry.isIntersecting) {
        setVisible(true)
      }
    })

    if (ref?.current) observer.observe(ref.current)
  }, [])

  return [visible]
}
