
import { UserCircleIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  const signOutHandler = () => {
    navigate('/login', { replace: true })
  }
  return (
    <div className="bg-[#575757] p-2 flex w-full justify-between">
      <div />
      <div className='flex items-center gap-2'>
        <UserCircleIcon color='white' width={36} />
        <span className='text-white'>Admin</span>
        <button onClick={signOutHandler} className='ml-2 rounded-full text-nowrap'>
          ログアウト
        </button>
      </div>
    </div>
  )
}

export default Header