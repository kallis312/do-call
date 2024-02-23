import { FC } from "react"

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  w: number
  h: number
  selected?: boolean
  isCamera?: boolean
}

const colSpan = [
  'col-span-1',
  'col-span-2',
  'col-span-3',
  'col-span-4',
]

const rowSpan = [
  'row-span-1',
  'row-span-2',
  'row-span-3',
  'row-span-4',
]

const ScreenSelectToogle: FC<Props> = ({ children, w, h, selected, isCamera, ...rest }) => {
  console.log(isCamera)
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