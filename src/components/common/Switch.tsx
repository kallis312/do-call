import { FC } from 'react'
import ReactSwitch from 'react-switch'

interface Props {
  value?: boolean
  onChange?: (check: boolean) => void
}

const Switch: FC<Props> = ({ value = false, onChange }) => {
  return (
    <ReactSwitch
      onColor='#01CBA4'
      checked={value}
      className='w-36'
      width={72}
      handleDiameter={20}
      checkedIcon={<span className='flex w-full justify-center pl-2 pt-[3px] text-white'>ON</span>}
      uncheckedIcon={<span className='flex w-full justify-center pr-2 pt-[3px] text-white'>OFF</span>}
      onChange={() => { onChange && onChange(!value) }}
    />
  )
}

export default Switch