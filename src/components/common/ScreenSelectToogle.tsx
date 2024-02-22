import { useState } from "react"

type Props = {
  children?: React.ReactNode
}

const ScreenSelectToogle = ({ children }: Props) => {
  const [select, setSelect] = useState<boolean>(false)
  return (
    <button onClick={() => setSelect(prev => !prev)} className={'w-full h-8 rounded-md  flex items-center justify-center font-extrabold ' + (select ? " text-white bg-[#01CBA4]  shadow-md" : "text-gray-700 bg-white")}>
      {children}
    </button>
  )
}

export default ScreenSelectToogle