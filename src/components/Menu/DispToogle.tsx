import { useState } from "react"

const DispToogle = () => {
  const [disp, setDisp] = useState<boolean>(true)
  return (
    <div className="select-none" onClick={() => setDisp(prev => !prev)}>
      {
        disp ?
          <span className="px-1 cursor-pointer text-white rounded-md bg-blue-500">表示</span> :
          <span className="px-1 cursor-pointer text-white rounded-md bg-gray-500">非表示</span>
      }
    </div>
  )
}

export default DispToogle