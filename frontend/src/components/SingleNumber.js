import React from 'react'
import {BsLock} from "react-icons/bs" 
import {IoIosArrowBack} from "react-icons/io"
import {BsUnlock} from "react-icons/bs"

const SingleNumber = ({number, clickHandler, locked}) => {
  const {value} = {...number}
  return (
    <div className={`single-number`} onClick={() => clickHandler(value)}>
      <span>{value === "lock" && locked ? <BsLock /> : value === "lock" && !locked ? <BsUnlock /> : value === "remove" ? <IoIosArrowBack /> : value}</span>
    </div>
  )
}

export default React.memo(SingleNumber)