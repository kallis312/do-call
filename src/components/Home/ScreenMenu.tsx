import { LayoutSetting, LayoutType, ViewType } from "@/define/types/Layout"
import CameraLayout, { LayoutItem, cameraRef } from "@components/Menu/CameraLayout"
import SettingInfo from "@components/Menu/SettingInfo"
import CheckBox from "@components/common/CheckBox"
import Switch from "@components/common/Switch"
import { HomeContext } from "@pages/Home/HomeProvider"
import { createContext, useContext, useEffect, useRef, useState } from "react"
import Rodal from 'rodal'

type ScreenLayout = {
  selectedFile?: LayoutSetting,
  setSelectedFile: React.Dispatch<React.SetStateAction<LayoutSetting | undefined>>
}

export const ScreenLayoutContext = createContext<ScreenLayout>({
  setSelectedFile: () => { throw Error('Funtion is not defined.') }
})


const ScreenMenu = () => {
  const { setLayout, files } = useContext(HomeContext)
  const camLayoutRef = useRef<cameraRef>(null)
  const layoutRef = useRef<LayoutType[]>([])
  const [selectedItem, setSelectedItem] = useState<LayoutItem | undefined>({ x: 0, y: 0, w: 1, h: 1 })
  const [selectedFile, setSelectedFile] = useState<LayoutSetting>()
  const [dimon, setDimon] = useState<{ w: number, h: number }>({ w: 1, h: 1 })
  const [editMode, setEditMode] = useState<boolean>(false)
  const [newFileMode, setNewFileMode] = useState<boolean>(false)
  const [viewMode, setViewMode] = useState<ViewType>('normal')
  const [infoVisible, setInfoVisible] = useState<boolean>(false)

  useEffect(() => {
    setSelectedFile(selectedFile || files[0])
    setViewMode(selectedFile?.d_mode || files[0].d_mode)
  }, [selectedFile])

  const onLayoutChange = (layout: LayoutType[]) => {
    layoutRef.current = layout
  }

  const onViewModeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setViewMode(e.target.value as ViewType)
  }

  const onFileChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    const file = files.find((_f) => _f.setting_file_id === value)
    setSelectedFile(file)
    setViewMode(file?.d_mode as ViewType)
  }

  return (
    <ScreenLayoutContext.Provider value={{
      selectedFile, setSelectedFile
    }}>
      <div className="app-container flex-col p-2 gap-2">
        <div className="menu-title">設 定</div>
        <div className="app-container scroll flex-col gap-2">
          <div className="rounded-md ">
            <div className="bg-[#434343] rounded-t-md text-white py-1 px-2 text-left">情報一覧</div>
            <div className="bg-[rgb(46,46,46)] rounded-b-md ">
              <div className="py-2 px-4 border-b-black border-b flex gap-2 justify-between w-full items-center">
                <select className="p-1 px-2 w-full rounded-md" onChange={onFileChange}>
                  {
                    files.map((item, index) => (
                      <option key={index} value={item.setting_file_id}>{item.setting_filename}</option>
                    ))
                  }
                </select>
              </div>
            </div>
          </div>
          {/* Section start */}
          <div className="flex gap-2 w-full">
            <div className="rounded-md w-full">
              <div className="bg-[#434343] rounded-t-md text-white py-1 px-2 text-left">緊急停止時のポップアップ通知</div>
              <div className="bg-[rgb(46,46,46)] rounded-b-md ">
                <div className="py-2 px-4 border-b-black border-b flex gap-2 justify-between w-full">
                  <Switch />
                </div>
              </div>
            </div>
            <div className="rounded-md w-full">
              <div className="bg-[#434343] rounded-t-md text-white py-1 px-2 text-left">表示画面設定変更モード</div>
              <div className="bg-[rgb(46,46,46)] rounded-b-md ">
                <div className="py-2 px-4 flex gap-4  w-full items-center ">
                  <Switch value={editMode} onChange={setEditMode} />
                  <div className="w-full">
                    {
                      editMode && <select value={viewMode} onChange={onViewModeChange} className="p-1 px-1 w-full rounded-md">
                        <option value='normal'>表示画面設定</option>
                        <option value="auto">自動レイアウト</option>
                        <option value="abnormal">異常画面設定</option>
                      </select>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
          {
            editMode && <div className="app-container scroll flex-col gap-2">
              {/* Section start */}
              <div className="rounded-md ">
                <div className="bg-[#434343] rounded-t-md text-white py-1 px-2 text-left">表示画面設定</div>
                <div className="bg-[rgb(46,46,46)] rounded-b-md ">
                  <div className="py-2 px-4 flex gap-8 justify-between w-full items-center">
                    <CheckBox value={newFileMode} onChange={setNewFileMode} label="新規作成" />
                    <div className="w-full">
                      <input type="text" className="py-1 px-2 rounded-md w-full" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Section start */}
              <div className="rounded-md ">
                <div className="bg-[#434343] rounded-t-md text-white py-1 px-2 text-left">表示画面構成</div>
                <div className="bg-[rgb(46,46,46)] rounded-b-md">
                  <CameraLayout ref={camLayoutRef}
                    onLayoutChange={onLayoutChange}
                    onLayoutSelect={(item) => {
                      setSelectedItem(item)
                    }} />
                </div>
              </div>
              {/* Section start */}
              <div className="rounded-md ">
                <div className="bg-[#434343] rounded-t-md text-white py-1 px-2 text-left">表示画面サイズ（横×縦）/自動レイアウト切替時間</div>
                <div className="bg-[rgb(46,46,46)] rounded-b-md py-2 px-4 flex gap-3">
                  <div className="flex gap-3 items-center w-full">
                    <select
                      value={dimon.w}
                      className="w-16 py-1 px-2 rounded-md"
                      onChange={(e) => {
                        camLayoutRef.current?.setCameraView({ w: Number(e.target.value) })
                        setDimon(prev => ({ ...prev, w: Number(e.target.value) }))
                      }}>
                      {
                        Array.from({ length: 4 - (selectedItem?.x || 0) }).map((_, i) => (
                          <option value={i + 1} key={i}>{i + 1}</option>
                        ))
                      }
                    </select>
                    <div className="text-white text-2xl">
                      ×
                    </div>
                    <select value={dimon.h} className="w-16 py-1 px-2 rounded-md"
                      onChange={(e) => {
                        camLayoutRef.current?.setCameraView({ h: Number(e.target.value) })
                        setDimon(prev => ({ ...prev, h: Number(e.target.value) }))
                      }}>
                      {
                        Array.from({ length: 4 - (selectedItem?.y || 0) }).map((_, i) => (
                          <option value={i + 1} key={i}>{i + 1}</option>
                        ))
                      }
                    </select>
                  </div>
                  {viewMode !== "normal" &&
                    <div className="w-full flex gap-3 h-full items-center">
                      <input type="text" className="py-1 px-2 rounded-md w-16" />
                      <div className="text-white">秒</div>
                      <div className="w-full" />
                      <button className="py-2 px-8 rounded-full text-nowrap font-extrabold bg-[#01CBA4] hover:opacity-75 text-white">設 定</button>
                    </div>
                  }
                </div>
              </div>

              {/* Section start */}
              <div className="rounded-md ">
                <div className="bg-[#434343] rounded-t-md text-white py-1 px-2 text-left">監視対象グループ / 監視対象 / カメラ表示・非表示切替</div>
                <div className="bg-[rgb(46,46,46)] rounded-b-md py-2 px-4 flex flex-col gap-2">
                  <div className="flex gap-3 items-center">
                    <select className="w-full py-1 px-2 rounded-md ">
                      <option>グループ1</option>
                      <option>サンプルアイテム</option>
                    </select>
                    <select className="w-full py-1 px-2 rounded-md ">
                      <option>車両1</option>
                      <option>サンプルアイテム</option>
                    </select>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-full">
                      <select className="w-full py-1 px-2 rounded-md ">
                        <option>車内カメラ</option>
                        <option>サンプルアイテム</option>
                      </select>
                    </div>
                    <div className="flex w-full items-center gap-4">
                      <input id="check_3" type="checkbox" className="w-[18px] h-[18px] accent-[#01CBA4]" />
                      <label htmlFor="check_3" className="text-white text-nowrap" >映像表示ボタンと関連付ける</label>
                    </div>
                  </div>
                </div>
              </div>
              {/* Section start */}
              <div className="rounded-md w-full">
                <div className="bg-[#434343] rounded-t-md text-white py-1 px-2 text-left">目標FPS</div>
                <div className="bg-[rgb(46,46,46)] rounded-b-md py-2 px-4 ">
                  <select className="w-full py-1 px-2 rounded-md cursor-pointer">
                    {['自動', 5, 10, 15, 20, 25, 30].map((_, i) => (
                      <option className="" key={i}>{_}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Bottom Button start */}
              <div className="flex gap-4 justify-center">
                <button onClick={() => setInfoVisible(true)} className="py-2 px-8 rounded-full font-extrabold bg-[#01CBA4] hover:opacity-75 text-white">設定情報</button>
                <Rodal height={600} width={800} className="p-0" visible={infoVisible} duration={0} onClose={() => setInfoVisible(false)}>
                  <SettingInfo />
                </Rodal>
                <button onClick={() => {
                  console.log(camLayoutRef.current?.layout)
                  setLayout(camLayoutRef.current?.layout || [])
                }} className="py-2 px-8 rounded-full font-extrabold bg-[#01CBA4] hover:opacity-75 text-white">表 示</button>
                <button className="py-2 px-8 rounded-full font-extrabold bg-[#01CBA4] hover:opacity-75 text-white">保 存</button>
              </div>
            </div>
          }
        </div>
      </div >
    </ScreenLayoutContext.Provider>
  )
}

export default ScreenMenu