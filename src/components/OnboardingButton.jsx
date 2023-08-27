import { Link } from 'react-router-dom';

const OnboardingButton = () => {

  //link center
  const alignCenter = 'text-decoration-line grid justify-items-center onboard-button';


  return (
    <div className="container mx-auto">

      <div className="absolute inset-x-0 bottom-0 smartphone:mb-7 mb-10">
        <Link className={alignCenter} to='./signup'><button className="bg-urbanPurple text-white w-10/12 smartphone:py-3 mb-5 px-8 py-4">Get Started</button></Link>
        <Link className={alignCenter} to='./signin'><button className="border-urbanPurple text-urbanPurple dark:text-white smartphone:py-3 px-10 w-10/12 py-3">Log in</button></Link>
      </div>
     
    </div>
  )
}

export default OnboardingButton