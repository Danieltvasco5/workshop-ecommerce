import React from 'react';

import {useGetData} from "../hooks/useGetData";
const TodoContext = React.createContext()
function TodoProvider({children}) {
    const {data} = useGetData();
    const [info, setInfo] = React.useState(data);
    return (
        <TodoContext.Provider value={{
            data,
            info,
            setInfo
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export {TodoProvider, TodoContext}