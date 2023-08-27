import { useState } from "react"

import Authheading from "../../components/auth/Authheading"
import Authbutton from "../../components/auth/Authbutton"
import Authbuttonsub from "../../components/auth/Authbuttonsub"

import { showNotification, ToastContainer } from "../../utils/showNotification"



const Signin = () => {


  const inputStyle ='p-4 w-full rounded-lg bg-transparent focus:outline-none focus:ring focus:ring-violet-300 border-2 border-neutral-200 dark:border-neutral-600';
  const inputText ='mb-3.5 text-urbanDark dark:text-urbanWhite';


  const [fullName, setFullName] = useState('');


   //submit user details
   const handleSubmit = (e) => {

      e.preventDefault();

      if(fullName.split(" ").length !== 2) {

          showNotification(false, {
              error: 'Invalid Name Inputted 😥'
            });
          

      } else {

          const FirstName = fullName.split(" ")[0];
          const LastName = fullName.split(" ")[1];

          showNotification(true, {
              success: 'Operation successful!'
          });


          console.log(FirstName, LastName)
      }

      

      

   }


  return (

    <div className="px-7">

          
          <Authheading headerText='Welcome Back' headerSubText="Let's get you back into your account"/>


            <div className="mt-16 signup">

                <form method="post" onSubmit={handleSubmit}>

                    <div className="grid mb-5">
                        <label className={inputText}>Full Name </label>
                        <input type="text" className={inputStyle} placeholder="Your Fullname" value={fullName} onChange={(e)=>setFullName(e.target.value)} required/>
                    </div>
                

                    <Authbutton buttonText="Get Started" buttonUpperClass='mt-12' buttonLowerClass='bg-urbanPurple text-white w-full smartphone:py-3 px-8 py-4'/>

                </form>

            </div>


          <Authbuttonsub linkText="Don't have an account? Register" linkUrl='.././Signup' linkTextClass='mt-6 pb-12'/>

          


      <ToastContainer/>

    </div>

  )
}

export default Signin