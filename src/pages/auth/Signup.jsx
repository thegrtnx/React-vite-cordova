import { useState } from "react"


import Authbutton from "../../components/auth/Authbutton"
import Authbuttonsub from "../../components/auth/Authbuttonsub"
import Authheading from "../../components/auth/Authheading"
import Offcanvas from "../../components/offcanvas/OffCanvas"


import Phonenumberinput from "../../utils/Phonenumberinput"
import { showNotification, ToastContainer } from "../../utils/showNotification"



const Signup = () => {


    const inputStyle ='p-4 w-full rounded-lg bg-transparent focus:outline-none focus:ring focus:ring-violet-300 border-2 border-neutral-200 dark:border-neutral-600';
    const inputText ='mb-3.5 text-urbanDark dark:text-urbanWhite';


    const [fullName, setFullName] = useState('');
    const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

    

    const closeOffcanvas = () => {
        setIsOffcanvasOpen(false);
    };


    const offcanvascontrol = {

        title: "OTP Verification",
        subtitle: "Enter OTP code sent to your email",
        isOpen: isOffcanvasOpen,
        onClose: closeOffcanvas,

    }



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


            setIsOffcanvasOpen(true);


            console.log(FirstName, LastName)
        }

        

        

    }

   
  return (


    <div className="px-7">

 
            <Authheading headerText='Create Account' headerSubText='Send and receive cash globally or locally'/>

                <div className="mt-16 signup">

                    <form method="post" onSubmit={handleSubmit}>

                        <div className="grid mb-5">
                            <label className={inputText}>Full Name </label>
                            <input type="text" className={inputStyle} placeholder="Your Fullname" value={fullName} onChange={(e)=>setFullName(e.target.value)} required/>
                        </div>

                        <div className="grid mb-5">
                            <label className={inputText}>Username</label>
                            <input type="text" className={inputStyle} placeholder="What should others to call you?" required/>
                        </div>

                        <div className="grid mb-5">
                            <label className={inputText}>Email</label>
                            <input type="email" className={inputStyle} placeholder="Kindly input your email address" required/>
                        </div>

                        <div className="grid">
                            <label className={inputText}>Phone Number</label>
                            <Phonenumberinput/>
                        </div>

                        <Authbutton buttonText="Get Started" buttonUpperClass='mt-12' buttonLowerClass='bg-urbanPurple text-white w-full smartphone:py-3 px-8 py-4'/>
                    
                    </form>

                </div>
        
            <Authbuttonsub linkText="Already have an account? Sign-in" linkUrl='.././Signin' linkPclass="text-sm text-urbanDark dark:text-urbanWhite" linkTextClass='mt-6 pb-12'/>


           
           <Offcanvas {...offcanvascontrol} />
           

        <ToastContainer/>
      
    </div>
    

  )
}

export default Signup