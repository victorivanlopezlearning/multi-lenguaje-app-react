import { LangContext } from './';

export const LangProvider = ({ children }) => {
  return (
    <LangContext.Provider
      value={{}}
    >
      {children}
    </LangContext.Provider>
  )
}