import ReactSwitch from 'react-switch'
import { useState } from 'react'

const Switch = () => {
  const [check, setCheck] = useState<boolean>(false)

  return (
    <ReactSwitch
      onColor='#01CBA4'
      checked={check}
      className='w-36'
      width={72}
      handleDiameter={20}
      checkedIcon={<span className='flex w-full justify-center pl-2 pt-[3px] text-white'>ON</span>}
      uncheckedIcon={<span className='flex w-full justify-center pr-2 pt-[3px] text-white'>OFF</span>}
      onChange={() => { setCheck(prev => !prev) }}
    />
  )
}

export default Switch