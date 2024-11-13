import React, { useContext } from 'react'
import { Xicon } from '../icons/Xicon'
import { Oicon } from '../icons/Oicon'
import { GameContext } from '../../context/GameContext';

export const BordCard = ({user="nouser", active, index}) => {
  const {handleSquareClick} = useContext(GameContext); 

  return (
    <div className={`card ${active && user === "x" && "shadow-blue"} ${active && user === "o" && "shadow-yellow"} 
    ${!active ? "shadow-gray" : "active"} `} onClick={() => handleSquareClick(index)}>
        {user === "x" && <Xicon color={active && "dark"} size="lg"/>}
        {user === "o" && <Oicon color={active && "dark"} size="lg"/>}
    </div>
  )
}
