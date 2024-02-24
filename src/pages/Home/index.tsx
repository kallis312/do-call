import CameraView from "@/components/CameraView"
import Header from "@/components/Home/Header"
import LeftMenu from "@/components/Home/LeftMenu"
import { useContext } from "react"
import HomeProvider, { HomeContext } from "./HomeProvider"

// const cameras = [
//   { host: '128.22.24.240', cameraId: '1' },
//   { host: '128.22.24.240', cameraId: '2' },
//   { host: '128.22.24.240', cameraId: '3' },
//   { host: '128.22.24.240', cameraId: '4' },
//   { host: '128.22.24.241', cameraId: '1' },
//   { host: '128.22.24.241', cameraId: '2' },
//   { host: '128.22.24.241', cameraId: '3' },
//   { host: '128.22.24.241', cameraId: '4' },
//   { host: '128.22.24.242', cameraId: '1' },
//   { host: '128.22.24.242', cameraId: '2' },
//   { host: '128.22.24.242', cameraId: '3' },
//   { host: '128.22.24.242', cameraId: '4' },
//   { host: '128.22.24.243', cameraId: '1' },
//   { host: '128.22.24.243', cameraId: '2' },
//   { host: '128.22.24.243', cameraId: '3' },
//   { host: '128.22.24.243', cameraId: '4' },
// ]




const Home = () => {
  return (
    <HomeProvider>
      <div className="app-container flex-col">
        <Header />
        <div className="bg-[#0A6774] app-container py-2">
          <LeftMenu />
          <div className="app-container flex-col px-2">

            <CameraPannel />
          </div>
        </div>
      </div>
    </HomeProvider>
  )
}

const CameraPannel = () => {
  const { layout } = useContext(HomeContext)
  console.log(layout)
  return (
    <div className="grid grid-cols-4 grid-rows-4 w-full gap-2 h-full  overflow-auto scroll" >
      {
        layout.map((_, i) => (
          <CameraView key={i} w={_.w} h={_.h} />
        ))
      }
    </div>
  )
}

export default Home