


type Props = {
  label?: string
  value?: boolean
  onChange?: (check: boolean) => void
}

const CheckBox = ({ label, value = false, onChange }: Props) => {
  return (
    <div className="flex items-center gap-4">
      <input id="check_2" type="checkbox" checked={value} onChange={() => { onChange && onChange(!value) }} className="w-[18px] h-[18px] accent-[#01CBA4]" />
      <label htmlFor="check_2" className="text-white text-nowrap" >{label}</label>
    </div>
  )
}

export default CheckBox