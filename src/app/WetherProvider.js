'use client'
import React, { createContext, useContext, useState } from 'react'

const wetherContext = createContext()
export const WetherProvider = ({ children }) => {
    const [wetherDetail, setWetherDetail] = useState({})

    return (
        <wetherContext.Provider value={{ wetherDetail, setWetherDetail }}>
            {children}
        </wetherContext.Provider>
    )
}


export const useWetherContext = () => {
    return useContext(wetherContext)
}