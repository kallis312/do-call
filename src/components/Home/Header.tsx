import { PersonCircle } from 'react-bootstrap-icons'
const Header = () => {
  return (
    <div className="bg-[#575757] p-2 flex w-full justify-between">
      <div />
      <div className='flex items-center gap-2'>
        <PersonCircle color='white' size={32} />
        <span className='text-white'>Admin</span>
        <button className='ml-2 rounded-full'>
          ログアウト
        </button>
      </div>
    </div>
  )
}

export default Header