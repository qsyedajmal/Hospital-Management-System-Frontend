import React, { useState } from 'react'
import login from '../../assets/login_page_bg.jpg'
import { useNavigate } from 'react-router-dom'
import { TextField, Button, InputAdornment, Alert } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/Key'
// import Alert from '@mui/material';


export default function Createaccount() {

  const navigate = useNavigate()
  const [password, setPassword] = useState('')
  const [reEnterPassword, setReEnterPassword] = useState('')
  const [error, setError] = useState(false)

  const handleReEnterPassword = (event) =>
  {
      setError(false)
      setReEnterPassword(event.target.value)

  }
  const handleSubmitButton = () =>
  {
    if ( password === reEnterPassword )
    {
      setError(false)
    }
    else
    {
      setError(true)
    }

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
         
          
            <TextField className='mx-14 mt-6 my-2' label='USERNAME' size='small' InputProps={{
              startAdornment:(<InputAdornment position="start"><PersonIcon/></InputAdornment>)
            }}/>
            
            
            <TextField className='mx-14 my-2' label='PASSWORD' size='small' type='password' InputProps={{
                startAdornment:(<InputAdornment position="start"><KeyIcon/></InputAdornment>)
            }}
            onChange={(event)=>setPassword(event.target.value)}/>

            <TextField className='mx-14 my-2' label='RE-ENTER PASSWORD' size='small' type='password' InputProps={{
                startAdornment:(<InputAdornment position="start"><KeyIcon/></InputAdornment>)
            }}
            helperText={error && 'The password does not match'}
            error={error}
            onChange={handleReEnterPassword}/>
{/* 
           {error && <Alert severity='error' className='mx-7'>The password does not match</Alert> }  */}

            <Button variant='contained' className='bg-blue-700 mx-20 my-2' onClick={handleSubmitButton}>CREATE</Button>

            
              <Button variant='text'  className='inline text-xs mt-2 text-right ' disableElevation disableRipple onClick={()=>navigate('/')}>Already Have an Account ?</Button>
           
           
          </form>

        </div>

        


        </div>
    </div>
  )
}