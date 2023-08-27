import { createContext, useEffect, useState } from "react";
import axios from "axios";

const UserContext = createContext();

export function UserContextProvider({ children }) {


  // State variables for user information
  const [userId, setUserId] = useState(null);
  const [userToken, setUserToken] = useState(null);
  const [userDetails, setUserDetails] = useState(null);

  

  useEffect(() => {
    if (userId) {
      axios.get(`/user/getuser/${userId}`)
        .then(response => {
          const { user_id, token, data } = response.data;
          setUserId(user_id);
          setUserToken(token);
          setUserDetails(data);
        })
        .catch(error => {
          console.error("Error fetching user data:", error);
        });
    }
  }, [userId]);

  // Provide user context values
  const userContextValues = {
    userId,
    setUserId,
    userToken,
    setUserToken,
    userDetails,
    setUserDetails
  };

  return (
    <UserContext.Provider value={userContextValues}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
