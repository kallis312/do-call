import { useContext } from "react"
import { ScreenLayoutContext } from "../Home/ScreenMenu"
import { Tab } from "@headlessui/react"
import LayoutInfo from "./LayoutInfo"
import DeviceInfo from "./DeviceInfo"

const SettingInfo = () => {
  const { selectedFile } = useContext(ScreenLayoutContext)

  return (
    <div className="app-container flex-col">
      <div className="text-2xl font-bold w-fll text-left">設定内容一覧（{selectedFile?.setting_filename}）</div>
      <Tab.Group as={'div'} className={'w-full flex flex-col max-h-full overflow-auto pt-2'}>
        <Tab.List className={'flex justify-between items-center'}>
          <div className='flex gap-1'>
            <Tab className={'py-1 px-3 text-nowrap rounded-none ui-not-selected:bg-white ui-not-selected:text-black ui-selected:text-white rounded-t-lg ui-selected:bg-[#01CBA4]'}>画面レイアウト</Tab>
            <Tab className={'py-1 px-3 text-nowrap rounded-none ui-not-selected:bg-white ui-not-selected:text-black ui-selected:text-white rounded-t-lg ui-selected:bg-[#01CBA4]'}>機器レイアウト</Tab>
          </div>
        </Tab.List>
        <Tab.Panels className={'app-container flex-col'}>
          <Tab.Panel className={'app-container flex-col'}>
            <LayoutInfo />
          </Tab.Panel>
          <Tab.Panel className={'app-container flex-col'}>
            <DeviceInfo />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default SettingInfo