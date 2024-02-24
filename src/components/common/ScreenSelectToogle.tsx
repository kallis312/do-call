import { colSpan, rowSpan } from "@/define/constants"
import { FC } from "react"

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  w: number
  h: number
  selected?: boolean
  isCamera?: boolean
}

const ScreenSelectToogle: FC<Props> = ({ children, w, h, selected, isCamera, ...rest }) => {
  return (
    <div
      {...rest}
      className={
        `w-full cursor-pointer rounded-md  flex items-center justify-center font-extrabold ${colSpan[w - 1]} ${rowSpan[h - 1]} `
        + (isCamera ? ' bg-white text-gray-800' : ' bg-black text-gray-400')
        + (selected ? ' border-2 border-[#01CBA4] ' : '')
      }>
      {children}
    </div>
  )
}

export default ScreenSelectToogle