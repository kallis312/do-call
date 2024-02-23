import { forwardRef, useImperativeHandle, useState } from "react"
import ScreenSelectToogle from "../common/ScreenSelectToogle"

type Props = {

}

const InitScreens = [
  { w: 1, h: 1, isCamera: true },
  { w: 1, h: 1, isCamera: true },
  { w: 1, h: 1 },
  { w: 1, h: 1 },
  { w: 1, h: 1 },
  { w: 1, h: 1 },
  { w: 1, h: 1 },
  { w: 1, h: 1 },
  { w: 1, h: 1 },
  { w: 1, h: 1 },
  { w: 1, h: 1 },
  { w: 1, h: 1 },
  { w: 1, h: 1 },
  { w: 1, h: 1 },
  { w: 1, h: 1 },
  { w: 1, h: 1 },
]

export type cameraRef = {
  setCameraView: ({ w, h }: { w?: number, h?: number }) => void
}

const CameraLayout = forwardRef<cameraRef, Props>((props, ref) => {
  const [selected, setSelected] = useState<number>(0)
  const [layout, setLayout] = useState(InitScreens)

  const setCameraView = ({ w, h }: { w?: number, h?: number }) => {
    console.log(w, h)
    setLayout(prev => {
      const temp = [...prev]
      temp[selected] = { ...temp[selected], w: w || temp[selected].w, h: h || temp[selected].h }
      const result = []
      let sum = 0
      for (let i = 0; i < temp.length; i++) {
        sum += temp[i].w * temp[i].h
        if (sum > 16) break
        result.push(temp[i])
      }
      return result
    })
  }

  useImperativeHandle(ref, () => ({
    setCameraView: setCameraView
  }));


  return (
    <div className="py-2 px-4 grid grid-cols-4 grid-rows-4 h-48 gap-3 justify-between w-full">
      {
        layout.map((_, i) => (
          <ScreenSelectToogle onClick={() => { setSelected(i) }} isCamera={_.isCamera} selected={i === selected} w={_.w} h={_.h} key={i}>
            {i + 1}
          </ScreenSelectToogle>
        ))
      }
    </div>
  )
})

export default CameraLayout