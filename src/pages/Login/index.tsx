import { FormEvent, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import './index.scss'
import { LockClosedIcon } from '@heroicons/react/24/outline'

const Login = () => {
  const navigate = useNavigate()
  const userIdRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const loginHandler = async (e: FormEvent) => {
    try {
      e.preventDefault()
      const userId = userIdRef.current?.value
      const password = passwordRef.current?.value
      if (userId !== 'testSuperUser001') throw Error('そのユーザーは存在しません。')
      if (password !== 'password001') throw Error('パスワードが間違っています。')
      await Swal.fire({
        icon: 'success',
        text: '成果的に加入しました。',
        timer: 2000,
        showConfirmButton: false
      })
      navigate('/', { replace: true })
    } catch (err) {
      Swal.fire({
        icon: 'error',
        text: err instanceof Error ? err.message : 'Unknown Error.',
        confirmButtonText: 'はい'
      })
    }
  }

  return (
    <div className="app-container p-4 flex-col items-center justify-center bg-login">
      <form className='max-w-[400px] min-w-24 bg-[#272727] p-8 z-10 rounded-md text-left' onSubmit={loginHandler}>
        <div className='h-56 flex items-center justify-center p-8' >
          <LockClosedIcon className='h-full p-8 text-[#57abff] border-[#57abff] border-[5px] rounded-full' />
        </div>
        <label htmlFor='userId' className='text-white text-lg'>ログイン名</label>
        <input ref={userIdRef} type='text' id='userId' className='w-full p-3 text-lg rounded-md my-4' />
        <label htmlFor='password' className='text-white text-lg'>パスワード</label>
        <input ref={passwordRef} type='password' id='password' className='w-full p-3 text-lg rounded-md my-4' />
        <button className='py-3 w-full bg-[#57abff] hover:bg-opacity-80 text-white text-lg font-bold mt-16'>ログイン</button>
      </form>
    </div>
  )
}

export default Login