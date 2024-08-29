import { createContext, Dispatch, ReactNode, SetStateAction, useMemo, useState } from "react";

type SidebarProviderProps = {
    children: ReactNode
}

type SidebarCOntextProps = {
    sideBarVisible: boolean,
    setSideBarVisible: Dispatch<SetStateAction<boolean>>;
}

export const SidebarContext = createContext({} as SidebarCOntextProps);

export const SidebarProvider = ({ children }: SidebarProviderProps) => {


    const [sideBarVisible, setSideBarVisible] = useState(false);

    console.log(sideBarVisible)

    const contextValue = useMemo(() => ({
        sideBarVisible,
        setSideBarVisible
    }), [sideBarVisible, setSideBarVisible]);


    return (
        <SidebarContext.Provider value={contextValue}>
            {children}
        </SidebarContext.Provider>
    )
}