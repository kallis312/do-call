import { colSpan, rowSpan } from "@/define/constants"
import { BasicPlayer, Format } from "media-stream-player"
import { FC } from "react"

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  w: number
  h: number
  cameraInfo?: {
    host: string,
    id: number
  }
}

const CameraView: FC<Props> = ({ w, h, cameraInfo, ...rest }) => {
  return (
    <div
      {...rest}
      className={
        `w-full cursor-pointer flex flex-col relative justify-center text-sm h-full ${colSpan[w - 1]} ${rowSpan[h - 1]} `
        + (!cameraInfo ? ' bg-black' : ' bg-gray-700')
      }>
      {cameraInfo ? <BasicPlayer
        hostname={cameraInfo.host}
        format={Format.RTP_H264}
        // initialFormat={Format.RTP_H264}
        autoPlay
        autoRetry
        vapixParams={{ camera: cameraInfo.id.toString() }}
      /> : null
      }
      <div className="px-2 bg-gray-700 text-sm text-gray-200 absolute top-0 right-0">
        Camera Info
      </div>
    </div>
  )
}

export default CameraView