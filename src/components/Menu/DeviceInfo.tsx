import Swal from "sweetalert2"
import DispToogle from "./DispToogle"
import { DispLayout, FPS } from "@/define/types/Layout"
import { useContext, useMemo } from "react"
import { ScreenLayoutContext } from "../Home/ScreenMenu"

type ScreenLayout = {
  g_id: string
  w: number
  h: number
  start_pos: number
  device_id: string
  device_name: string
  device_kind: number
  camera_id: string
  camera_name: string
  fps: FPS
  time?: number
  dps_h: number
  dps_w: number
}

type ScreenTable = {
  group_id: string
  group_name: string
  target_id: string
  target_kind: number
  target_name: string
  screens: ScreenLayout[]
}

const DeviceInfo = () => {

  const { selectedFile } = useContext(ScreenLayoutContext)

  const sreens = useMemo(() => {
    const dispComp: DispLayout[] = selectedFile?.disp_comp || []
    const result: ScreenTable[] = []
    dispComp.forEach(_dis => {
      _dis.tagets.forEach(_tar => {
        _tar.devices.forEach(_dev => {
          _dev.cameras.forEach(_cam => {
            const existResult = result.findIndex(_res => _res.group_id === _dis.group_id && _res.target_id === _tar.target_id)
            if (existResult > -1)
              result[existResult].screens.push({
                start_pos: _dis.start_pos,
                g_id: _dis.g_id,
                device_id: _dev.device_id,
                device_name: _dev.device_name,
                camera_id: _cam.camera_id,
                camera_name: _cam.camera_name,
                device_kind: _dev.device_kind,
                fps: _cam.fps,
                time: _dis.time,
                dps_h: _cam.dps_h,
                dps_w: _cam.dps_w,
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
                    device_id: _dev.device_id,
                    device_name: _dev.device_name,
                    device_kind: _dev.device_kind,
                    camera_id: _cam.camera_id,
                    camera_name: _cam.camera_name,
                    time: _dis.time,
                    fps: _cam.fps,
                    dps_h: _cam.dps_h,
                    dps_w: _cam.dps_w,
                    w: _dis.w,
                    h: _dis.h
                  }
                ]
              })
          })
        })
      });
    })
    return result
  }, [selectedFile])

  const onDelete = () => {
    Swal.fire({
      icon: 'warning',
      text: 'Are you delete?',
      cancelButtonText: 'Cencel',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      confirmButtonColor: 'red'
    })
  }
  return (
    <div className="app-container pt-1 flex-col gap-2">
      {
        sreens.map((_s, i) => (
          <div key={i} className="flex flex-col gap-2 w-full">
            <div className="text-left text-lg font-medium"> • {_s.group_name} - {_s.target_name}</div>
            <table className="w-full border">
              <thead>
                <tr>
                  <th className="border-r">画面ID</th>
                  <th className="border-r">機器ID</th>
                  <th className="border-r">機器名</th>
                  <th className="border-r">機器区分</th>
                  <th className="border-r">カメラID</th>
                  <th className="border-r">カメラ名</th>
                  <th className="border-r">FPS</th>
                  <th className="border-r">解像度横</th>
                  <th className="border-r">解像度縦</th>
                  <th className="border-r">時間</th>
                  <th className="border-r">動作</th>
                  <th>非表示／削除</th>
                </tr>
              </thead>
              <tbody>
                {
                  _s.screens.map((_s, i) => (
                    <tr key={i} className="border-t hover:bg-gray-100">
                      <td className="border-r">{_s.g_id}</td>
                      <td className="border-r">{_s.device_id}</td>
                      <td className="border-r">{_s.device_name}</td>
                      <td className="border-r">{_s.device_id}</td>
                      <td className="border-r">{_s.device_kind}</td>
                      <td className="border-r">{_s.camera_name}</td>
                      <td className="border-r">{_s.fps}</td>
                      <td className="border-r">{_s.dps_w}</td>
                      <td className="border-r">{_s.dps_h}</td>
                      <td className="border-r">{_s.time}</td>
                      <td className="border-r">ループ</td>
                      <td>
                        <div className="flex gap-1 w-full justify-center">
                          <DispToogle />
                          <span onClick={() => onDelete()} className="px-1 cursor-pointer text-white rounded-lg bg-red-500">削除</span>
                        </div>
                      </td>
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

export default DeviceInfo