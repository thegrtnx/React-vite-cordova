import { useState } from 'react';

import OtpInput from 'react-otp-input';
import Authbutton from '../auth/Authbutton';
import CloseOffCanvas from './CloseOffCanvas';

const Offcanvas = ({ isOpen, onClose, title, subtitle }) => {


  const [otp, setOtp] = useState('');


  //clear the otp value on resend otp
  const clearsetOtp = () => {

    setOtp('');
    onClose();

  }



  
  /*const buttons = [];
  const keyclass = 'Idle text-gray-800 font-semibold py-3 px-4 mb-3 rounded';
  const keyclasstop = 'grid grid-cols-3 gap-5';


  for (let i = 1; i <= 9; i++) {
    buttons.push( <button key={i} className={keyclass}> {i} </button> );
  }*/


  return (

    <div className={`fixed bottom-0 left-0 right-0 top-0 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="fixed inset-0 bg-black opacity-80"></div>
      <div className="fixed offcanva bottom-0 px-10 left-0 right-0 container mx-auto bg-urbanWhite p-4 shadow-lg transform transition-transform ease-in-out duration-300 overflow-y-auto max-h-screen">
        
        <div className="mb-5">
          <h2 className="text-xl font-semibold text-urbanPurple mb-1 pt-5">{title}</h2>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>




          <div className='otp mt-10'>

              <OtpInput 
                value={otp}
                onChange={setOtp}
                numInputs={4}
                containerStyle="otpbox"
                inputType="number"
                renderSeparator={<span>&nbsp;</span>}
                renderInput={(props) => <input {...props} autoComplete="off"  />}
                />

          </div>


            <div>
              <Authbutton buttonUpperClass="mt-12" buttonLowerClass="bg-urbanPurple text-white w-full smartphone:py-3 px-8 py-4" buttonText="Verify Account"/>
              <CloseOffCanvas closCanva={clearsetOtp} linkTextClass="mt-6 pb-12" linkPclass="text-sm text-urbanDark" linkUrl="" linkText="Didn't get OTP?&nbsp; Resend OTP"/>
            </div>






         {/* <div className='mt-10 pb-2'>
            
              <div className="flex flex-col space-y-2">
                {Array.from({ length: 4 }, (_, index) => (
                  <div key={index} className={keyclasstop}>
                  {buttons.slice(index * 3, (index + 1) * 3)}
                  </div>
                ))}
              </div>


              <div className={keyclasstop}>
                  <button className={keyclass}> . </button>
                  <button className={keyclass}> 0 </button>
                  <button className={keyclass}> &#9003; </button>
              </div>

          </div>*/}

      </div>
    </div>
  );
};

export default Offcanvas;
