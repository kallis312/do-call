/* eslint-disable react-hooks/exhaustive-deps */
import { forwardRef, useImperativeHandle, useMemo, useState } from "react"
import ScreenSelectToogle from "../common/ScreenSelectToogle"
import { InitScreens } from "@/define/constants"

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  onLayoutSelect?: (selectedItem: LayoutItem) => void
  onLayoutChange?: (layout: {
    w: number;
    h: number;
    x: number;
    y: number;
  }[]) => void
}

export type cameraRef = {
  setCameraView: ({ w, h }: { w?: number, h?: number }) => void,
  getSelectedItem: { x: number, y: number, w: number, h: number },
  layout: {
    w: number;
    h: number;
    x: number;
    y: number;
  }[]
}

export type LayoutItem = {
  x: number
  y: number
  w: number
  h: number
}

const CameraLayout = forwardRef<cameraRef, Props>(({ onLayoutSelect, onLayoutChange }, ref) => {
  const [selected, setSelected] = useState<{ x: number, y: number }>({ x: 0, y: 0 })
  const [layout, setLayout] = useState(InitScreens)

  const girdView = useMemo(() => {
    let nX = 0
    let nY = 0
    const temp = []
    const tStatus = Array.from({ length: 4 }).map(() => [false, false, false, false])

    while (nY < 4) {
      while (nX < 4) {
        if (!tStatus[nY][nX]) {
          const item = layout[nY][nX]
          for (let i = nY; i < nY + item.h; i++) {
            for (let j = nX; j < nX + item.w; j++) {
              if (!tStatus[i][j]) {
                tStatus[i][j] = true
              }
            }
          }
          temp.push({ x: nX, y: nY, ...item })
          nX += item.w
        } else {
          nX++
        }
      }
      nY++
      nX = 0
    }
    onLayoutChange && onLayoutChange(temp)
    return temp
  }, [layout])

  const setCameraView = ({ w: pw, h: ph, x: px, y: py }: { w?: number, h?: number, x?: number, y?: number }) => {
    setLayout(prev => {
      const temp = [...prev]
      const sx = px || selected.x
      const sy = py || selected.y
      const { w: ow, h: oh } = temp[sy][sx]
      const sh = ph || oh
      const sw = pw || ow

      for (let i = 0; i < 4; i++)
        for (let j = 0; j < 4; j++) {
          const { w: nw, h: nh } = temp[i][j]
          if (i < sy + sh && i + nh > sy && j < sx + sw && j + nw > sx)
            temp[i][j] = { w: 1, h: 1 }
        }
      temp[sy][sx] = { w: sw, h: sh }
      return temp
    })
  }

  useImperativeHandle(ref, () => ({
    setCameraView: setCameraView,
    layout: girdView,
    getSelectedItem: { x: selected.x, y: selected.y, ...layout[selected.y][selected.x] }
  }));


  return (
    <div className="py-2 px-4 grid grid-cols-4 grid-rows-4 h-48 gap-3 justify-between w-full">
      {
        girdView.map((_, i) => (
          <ScreenSelectToogle onClick={() => {
            setSelected({ x: _.x, y: _.y })
            onLayoutSelect && onLayoutSelect({ x: _.x, y: _.y, ...layout[_.y][_.x] })
          }} selected={_.x === selected.x && _.y === selected.y} w={_.w} h={_.h} key={i}>
            {i + 1}
          </ScreenSelectToogle>
        ))
      }
    </div>
  )
})

export default CameraLayout