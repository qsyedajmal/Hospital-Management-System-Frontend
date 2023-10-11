import React from 'react'
import login from '../../assets/login_page_bg.jpg'
import { useNavigate } from 'react-router-dom'

export default function Login() {

  const navigate = useNavigate()

  const loginHandler = () =>
  {
     navigate('/home')
  }
  return (
    <div>
        <div className='w-full h-screen bg-no-repeat bg-center bg-cover '
        style={
            {
                backgroundImage: `url(${login})`,
            }
        }>

        <div className='max-w-screen-lg 2xl:max-w-screen-xl w-full h-full mx-auto flex flex-col justify-center items-center'>

          <form action="" className='flex flex-col mx-auto p-2  md:w-1/3 border-2 border-gray-600 shadow-lg shadow-gray-400 rounded-3xl  bg-white '>

            <label htmlFor="username" className='pb-4 text-xl text-center'>Username</label>
            <input type="text" name="username" id="" placeholder='USERNAME' className='border p-2 border-blue-700 rounded-lg mb-2 mx-auto'/>

            <label htmlFor="passsword" className='pb-4 text-xl text-center'>Password</label>
            <input type="password" name="passsword" id="" placeholder='PASSWORD' className='border p-2 border-blue-700 rounded-lg mb-2 mx-auto'/>

            <button type="submit" className='bg-blue-700 p-2 rounded-lg mx-24 2xl:mx-36 mt-4 text-white' onClick={loginHandler}>LOGIN</button>

            <a href="" className=' text-right text-blue-700 mt-2'>Forgot password ?</a>

          </form>

        </div>

        


        </div>
    </div>
  )
}
