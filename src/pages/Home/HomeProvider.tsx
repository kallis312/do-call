import { LayoutType } from "@/define/types/Layout";
import { ReactNode, createContext, useState } from "react";

export const HomeContext = createContext<{
  layout: LayoutType[],
  setLayout: React.Dispatch<React.SetStateAction<LayoutType[]>>
}>({
  layout: Array.from({ length: 16 }).map(() => ({ w: 1, h: 1, x: 0, y: 0 })),
  setLayout: () => { throw Error('Funtion is not defined.') }
})

type Props = {
  children: ReactNode
}

const HomeProvider = ({ children }: Props) => {
  const [layout, setLayout] = useState<LayoutType[]>(Array.from({ length: 16 }).map(() => ({ w: 1, h: 1, x: 0, y: 0 })))
  return (
    <HomeContext.Provider value={{ layout, setLayout }}>
      {children}
    </HomeContext.Provider>
  )
}

export default HomeProvider
