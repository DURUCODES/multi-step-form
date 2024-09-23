import { useState, createContext } from "react";

const MyContext = createContext();

export const ContextProvider = ({ children }) => {
  const [page, setPage] = useState(1);
  const [isYearly, setIsYearly] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [arcadeOpt, setArcadeOpt] = useState(true);
  const [advanceOpt, setAdvanceOpt] = useState(false);
  const [proOpt, setProOpt] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <MyContext.Provider
      value={{
        page,
        setPage,
        isYearly,
        setIsYearly,
        name,
        setName,
        email,
        setEmail,
        phone,
        setPhone,
        arcadeOpt,
        setArcadeOpt,
        proOpt,
        setProOpt,
        advanceOpt,
        setAdvanceOpt,
        selectedOption,
        setSelectedOption,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
