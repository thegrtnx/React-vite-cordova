import OnboardingButton from '../../components/OnboardingButton';
import { Carousel } from 'react-responsive-carousel';

import imglght1 from '../../assets/img/onboarding/light/1.svg';
import imgdrk1 from '../../assets/img/onboarding/dark/1.svg';

import imglght2 from '../../assets/img/onboarding/light/2.svg';
import imgdrk2 from '../../assets/img/onboarding/dark/2.svg';

import imglght3 from '../../assets/img/onboarding/light/3.svg';
import imgdrk3 from '../../assets/img/onboarding/dark/3.svg';

const Onboarding = () => {
  
  const settings = {

    showArrows:false,
    showStatus:false,
    showThumbs:false,
    autoPlay:false,
    infiniteLoop:true,
    interval:4800
  }

  const set1 = 'p-10 smartphone:p-6 grid justify-items-center';
  const set2 = 'pt-10 onboard-image';
  const set3 = 'pt-32 smartphone:pt-24';


  return (

    <div>

             
          <Carousel {...settings}>


            <div className={set1}>


                <div className={set2}>
                  
                    <div className='block dark:hidden'>
                      <img src={imglght1} alt=""/>                    
                    </div>

                    <div className='dark:block hidden'>
                      <img src={imgdrk1} alt=""/>                    
                    </div>

                </div>


                <div className={set3}>
                  <h1 className='text-2xl mb-3 text-urbanDark dark:text-white onboard-text'>Seamless Transactions and even more</h1>
                  <p className='text-sm px-4 text-urbanDark dark:text-urbanWhite'>Dive yourself into a versatile app that excels in efficient transactions and beyond</p>
                </div>

            </div>



            <div className={set1}>


                <div className={set2}>
                  
                    <div className='block dark:hidden'>
                      <img src={imglght2} alt=""/>                    
                    </div>

                    <div className='dark:block hidden'>
                      <img src={imgdrk2} alt=""/>                    
                    </div>

                </div>


                <div className={set3}>
                  <h1 className='text-2xl px-5 mb-3 text-urbanDark dark:text-white onboard-text'>Detect fake transfers in seconds</h1>
                  <p className='text-sm px-2 text-urbanDark dark:text-urbanWhite'>You will get notified in seconds if a fake transaction has been made</p>
                </div>

            </div>



            <div className={set1}>


                <div className={set2}>
                  
                    <div className='block dark:hidden'>
                      <img src={imglght3} alt=""/>                    
                    </div>

                    <div className='dark:block hidden'>
                      <img src={imgdrk3} alt=""/>                    
                    </div>

                </div>


                <div className={set3}>
                  <h1 className='text-2xl px-5 mb-3 text-urbanDark dark:text-white onboard-text'>Enjoy the best deals from supermarkets</h1>
                  <p className='text-sm px-2 text-urbanDark dark:text-urbanWhite'>Experience the best value for all your shopping needs from top supermarkets</p>
                </div>


            </div>


          </Carousel>


        <OnboardingButton/>
    </div>

  )
}

export default Onboarding