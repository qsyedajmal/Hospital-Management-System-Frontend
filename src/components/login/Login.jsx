import React from 'react'
import login from '../../assets/login_page_bg.jpg'
import { useNavigate } from 'react-router-dom'
import { TextField, Button, InputAdornment, } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/Key';


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


         <div className='flex justify-center'>
         <PersonIcon className='text-8xl bg-blue-700 text-white rounded-full -mt-14 p-2'/>
         </div>   
         
          
            <TextField className='mx-14 mt-6 my-2 ' label='USERNAME' size='small' InputProps={{
              startAdornment:(<InputAdornment position="start"><PersonIcon/></InputAdornment>)
            }}/>
            
            
            <TextField className='mx-14 my-2' label='PASSWORD' size='small' type='password' InputProps={{
                startAdornment:(<InputAdornment position="start"><KeyIcon/></InputAdornment>)
            }}/>

            <Button variant='contained' className='bg-blue-700 mx-20 my-2' onClick={loginHandler}>LOGIN</Button>

            <div className='inline-flex justify-between'>
              <Button variant='text'  className='text-xs mt-2 ' disableElevation disableRipple onClick={()=>navigate('/createaccount')}>Create Account ?</Button>
              <Button variant='text'  className='text-xs mt-2 ' disableElevation disableRipple>Forgot password ?</Button>
            </div>
          </form>

        </div>

        


        </div>
    </div>
  )
}
// import React from 'react'
// import login from '../../assets/login_page_bg.jpg'
// import { useNavigate } from 'react-router-dom'

// export default function Login() {

//   const navigate = useNavigate()

//   const loginHandler = () =>
//   {
//      navigate('/home')
//   }
//   return (
//     <div>
//         <div className='w-full h-screen bg-no-repeat bg-center bg-cover '
//         style={
//             {
//                 backgroundImage: `url(${login})`,
//             }
//         }>

//         <div className='max-w-screen-lg 2xl:max-w-screen-xl w-full h-full mx-auto flex flex-col justify-center items-center'>

//           <form action="" className='flex flex-col mx-auto p-2  md:w-1/3 border-2 border-gray-600 shadow-lg shadow-gray-400 rounded-3xl  bg-white '>

//             <label htmlFor="username" className='pb-4 text-xl text-center'>Username</label>
//             <input type="text" name="username" id="" placeholder='USERNAME' className='border p-2 border-blue-700 rounded-lg mb-2 mx-auto'/>

//             <label htmlFor="passsword" className='pb-4 text-xl text-center'>Password</label>
//             <input type="password" name="passsword" id="" placeholder='PASSWORD' className='border p-2 border-blue-700 rounded-lg mb-2 mx-auto'/>

//             <button type="submit" className='bg-blue-700 p-2 rounded-lg mx-24 2xl:mx-36 mt-4 text-white' onClick={loginHandler}>LOGIN</button>

//             <a href="" className=' text-right text-blue-700 mt-2'>Forgot password ?</a>

//           </form>

//         </div>

        


//         </div>
//     </div>
//   )
// }
