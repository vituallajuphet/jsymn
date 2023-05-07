import React, { createContext, useState } from 'react';

export const AppContext = createContext<any>(null)


const initState = { 
    appState: 'done',
    data: {
        
    }
}

const AppProvider = (props: any) => {

    const [state, send] = useState(initState)

    return (
        <AppContext.Provider value={{state, send}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppProvider