import { createContext, useState } from 'react';

const PasswordContext = createContext();

export const PasswordProvider = ({ children }) => {
  const [password, setPassword] = useState('Password');
  const [passwordLength, setPasswordLength] = useState(10);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [strength, setStrength] = useState('Weak');
  const [strengthColor, setStrengthColor] = useState('white');
  return (
    <PasswordContext.Provider
      value={{
        strengthColor,
        setStrengthColor,
        password,
        setPassword,
        passwordLength,
        setPasswordLength,
        includeUppercase,
        setIncludeUppercase,
        includeNumbers,
        setIncludeNumbers,
        includeSymbols,
        setIncludeSymbols,
        includeLowercase,
        setIncludeLowercase,
        strength,
        setStrength,
      }}
    >
      {children}
    </PasswordContext.Provider>
  );
};

export default PasswordContext;
