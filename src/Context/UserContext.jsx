import { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const updateUser = (newUsername) => {
    setUsername(newUsername);
  };

  const updatePassword = (newPassword) => {
    setPassword(newPassword);
  };

  return (
    <UserContext.Provider value={{ username, updateUser, password, updatePassword }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
