import ReactSwitch from 'react-switch'
import { useState } from 'react'

const Switch = () => {
  const [check, setCheck] = useState<boolean>(false)

  return (
    <ReactSwitch onColor='#01CBA4' checked={check} onChange={() => { setCheck(prev => !prev) }} />
  )
}

export default Switch