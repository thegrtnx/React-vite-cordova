import Cookies from "js-cookie";

import Idle from "../pages/auth/Idle";
import Onboarding from "../pages/onboarding/Onboarding";

const Auth = () => {

    const userID = Cookies.get('usrID');
    const userToken = Cookies.get('usrTkn');

    if( userID && userToken ) {

        return <Idle/>
    }

  return (

    <Onboarding/> 
  )
}

export default Auth