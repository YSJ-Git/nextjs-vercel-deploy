import { createContext, useState } from "react";

export const UserContext = createContext();

const UserStore = (props) => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState(null);
  //console.log("USER STORE: ", user, email);
  return (
    <UserContext.Provider value={{ user, setUser, email, setEmail }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserStore;
