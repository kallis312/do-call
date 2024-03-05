import { LayoutSetting, LayoutType } from "@/define/types/Layout";
import { ReactNode, createContext, useState } from "react";
import { files as InitFiles } from "@/define/datas/files";

export const HomeContext = createContext<{
  layout: LayoutType[],
  files: LayoutSetting[],
  setLayout: React.Dispatch<React.SetStateAction<LayoutType[]>>,
  setFiles: React.Dispatch<React.SetStateAction<LayoutSetting[]>>,
}>({
  layout: Array.from({ length: 16 }).map(() => ({ w: 1, h: 1, x: 0, y: 0 })),
  files: InitFiles,
  setLayout: () => { throw Error('Funtion is not defined.') },
  setFiles: () => { throw Error('Funtion is not defined.') }
})

type Props = {
  children: ReactNode
}

const HomeProvider = ({ children }: Props) => {
  const [layout, setLayout] = useState<LayoutType[]>(Array.from({ length: 16 }).map(() => ({ w: 1, h: 1, x: 0, y: 0 })))
  const [files, setFiles] = useState<LayoutSetting[]>(InitFiles)
  return (
    <HomeContext.Provider value={{
      layout, setLayout,
      files, setFiles
    }}>
      {children}
    </HomeContext.Provider>
  )
}

export default HomeProvider
