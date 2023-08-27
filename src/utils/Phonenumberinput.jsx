import { useState } from "react"

import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const Phonenumberinput = () => {

  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <div>
        <PhoneInput
            international
            countryCallingCodeEditable={false}
            defaultCountry="NG"
            value={phoneNumber}
            onChange={setPhoneNumber}
        />
    </div>
  )
}

export default Phonenumberinput