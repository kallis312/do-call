import Header from "@/components/Home/Header"
import LeftMenu from "@/components/Home/LeftMenu"
import { BasicPlayer, Format } from 'media-stream-player'

const cameras = [
  { host: '128.22.24.240', cameraId: '1' },
  { host: '128.22.24.240', cameraId: '2' },
  { host: '128.22.24.240', cameraId: '3' },
  { host: '128.22.24.240', cameraId: '4' },
  { host: '128.22.24.241', cameraId: '1' },
  { host: '128.22.24.241', cameraId: '2' },
  { host: '128.22.24.241', cameraId: '3' },
  { host: '128.22.24.241', cameraId: '4' },
  { host: '128.22.24.242', cameraId: '1' },
  { host: '128.22.24.242', cameraId: '2' },
  { host: '128.22.24.242', cameraId: '3' },
  { host: '128.22.24.242', cameraId: '4' },
  { host: '128.22.24.243', cameraId: '1' },
  { host: '128.22.24.243', cameraId: '2' },
  { host: '128.22.24.243', cameraId: '3' },
  { host: '128.22.24.243', cameraId: '4' },
]

const dev = false

const Home = () => {
  return (
    <div className="app-container flex-col">
      <Header />
      <div className="bg-[#0A6774] app-container py-2">
        <LeftMenu />
        <div className="app-container flex-col px-2">
          <div className="grid grid-cols-4 grid-rows-4 w-full gap-2 h-full  overflow-auto scroll">
            {
              cameras.map((_, i) => (
                <div key={i} className="flex flex-col justify-center text-sm w-full h-full bg-black text-white relative">
                  {dev ? < BasicPlayer
                    hostname={_.host}
                    format={Format.RTP_H264}
                    // initialFormat={Format.RTP_H264}
                    autoPlay
                    autoRetry
                    vapixParams={{ camera: _.cameraId }}
                  /> : null
                  }
                  <div className="absolute top-0 right-0 px-2 bg-gray-800 py-0 text-gray-200">{_.host} ( ID : {_.cameraId} )</div>

                </div>
              ))
            }
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home