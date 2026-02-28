import { createContext, type ReactNode } from 'react';

export const AppContext = createContext({});

interface ProviderProps {
    children: ReactNode;
}

export const AppContextProvider = ({children}: ProviderProps) => {
    const contextValue = {

    }
    return (
        <AppContext.Provider value={{contextValue}}>
            {children}
        </AppContext.Provider>
    )
}