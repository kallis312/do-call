import { Disclosure, Tab } from '@headlessui/react'
import './Menu.scss'
import MonitoringMenu from './MonitoringMenu'
import RecordMenu from './RecordMenu'
import ScreenMenu from './ScreenMenu'

// const options = [
//   { value: '0', label: 'エリア名称' },
//   { value: '1', label: 'サンプルエリア' },
//   { value: '2', label: 'サンプルエリア' },
//   { value: '3', label: 'サンプルエリア' },
//   { value: '4', label: 'サンプルエリア' },
//   { value: '5', label: 'サンプルエリア' },
//   { value: '6', label: 'サンプルエリア' },
//   { value: '7', label: 'サンプルエリア' },
//   { value: '8', label: 'サンプルエリア' },
//   { value: '9', label: 'サンプルエリア' },
// ];

const LeftMenu = () => {
  return (
    <Disclosure as={'div'} className={'flex '}>
      {({ open }) => (
        <>
          <Disclosure.Panel className='ml-2 p-2 bg-black bg-opacity-[0.4] app-container flex-col'>
            <Tab.Group as={'div'} className={'w-[500px] flex flex-col max-h-full overflow-auto pt-2'}>
              <Tab.List className={'flex justify-between items-center'}>
                <div className='w-full flex justify-center h-full items-center px-4'>
                  <select className="px-2 py-1 w-full rounded-md" />
                </div>
                <div className='flex gap-1 pr-4'>
                  <Tab className={'py-3 px-6 text-nowrap ui-not-selected:bg-black text-white rounded-none ui-selected:bg-[#017A62] ui-selected:border-b-4 ui-selected:border-b-[#01CBA4]'}>監 視</Tab>
                  <Tab className={'py-3 px-6 text-nowrap ui-not-selected:bg-black text-white rounded-none ui-selected:bg-[#017A62] ui-selected:border-b-4 ui-selected:border-b-[#01CBA4]'}>録 画</Tab>
                  <Tab className={'py-3 px-6 text-nowrap ui-not-selected:bg-black text-white rounded-none ui-selected:bg-[#017A62] ui-selected:border-b-4 ui-selected:border-b-[#01CBA4]'}>設 定</Tab>
                </div>
              </Tab.List>
              <Tab.Panels className={'app-container flex-col bg-black'}>
                <Tab.Panel className={'app-container flex-col'}>
                  <MonitoringMenu />
                </Tab.Panel>
                <Tab.Panel >
                  <RecordMenu />
                </Tab.Panel>
                <Tab.Panel >
                  <ScreenMenu />
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </Disclosure.Panel>
          <div className="w-[22px]">
            <Disclosure.Button className={'w-full p-0'}>
              {
                open ?
                  <img src="/svg/btn-close-menu.svg" className="cursor-pointer hover:opacity-80" /> :
                  <img src="/svg/btn-open-menu.svg" className="cursor-pointer hover:opacity-80" />
              }
            </Disclosure.Button>
          </div>
        </>
      )}

    </Disclosure >
  )
}

export default LeftMenu