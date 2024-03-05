import { useContext, useMemo } from "react"
import { ScreenLayoutContext } from "../Home/ScreenMenu"

type ScreenLayout = {
  g_id: string
  w: number
  h: number
  start_pos: number
}

type ScreenTable = {
  group_id: string
  group_name: string
  target_id: string
  target_kind: number
  target_name: string
  screens: ScreenLayout[]
}

const LayoutInfo = () => {
  const { selectedFile } = useContext(ScreenLayoutContext)

  const sreens = useMemo(() => {
    const result: ScreenTable[] = []
    selectedFile?.disp_comp.forEach(_dis => {
      _dis.tagets.forEach(_tar => {
        console.log(_tar.target_id, _dis.group_id)
        const existResult = result.findIndex(_res => _res.group_id === _dis.group_id && _res.target_id === _tar.target_id)
        if (existResult > -1)
          result[existResult].screens.push({
            start_pos: _dis.start_pos,
            g_id: _dis.g_id,
            w: _dis.w,
            h: _dis.h
          })
        else
          result.push({
            target_id: _tar.target_id,
            target_name: _tar.target_name,
            target_kind: _tar.target_kind,
            group_id: _dis.group_id,
            group_name: _dis.group_name,
            screens: [
              {
                start_pos: _dis.start_pos,
                g_id: _dis.g_id,
                w: _dis.w,
                h: _dis.h
              }
            ]
          })
      });
    })
    return result
  }, [selectedFile])

  return (
    <div className="app-container pt-1 flex-col gap-2">
      {
        sreens.map((_s, i) => (
          <div key={i} className="flex flex-col w-full">
            <div className="text-left text-lg font-medium"> • {_s.group_name} - {_s.target_name}</div>
            <table key={i} className="w-full border">
              <thead>
                <tr>
                  <th className="border-r">画面ID</th>
                  <th className="border-r">開始位置</th>
                  <th className="border-r">横</th>
                  <th>縦</th>
                </tr>
              </thead>
              <tbody>
                {
                  _s.screens.map(_scr => (
                    <tr key={_scr.g_id} className="border-t">
                      <td className="border-r">{_scr.g_id}</td>
                      <td className="border-r">{_scr.start_pos}</td>
                      <td className="border-r">{_scr.w}</td>
                      <td>{_scr.h}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        ))
      }
    </div>
  )
}

export default LayoutInfo