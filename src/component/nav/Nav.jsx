import React from 'react'
import './nav.css'
import {TbHome} from 'react-icons/tb'
import {BsJournalBookmark,BsListCheck} from 'react-icons/bs'
import {BiMessageAltDetail} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'
import { useState } from 'react'

const Nav = () => {
  const [activeNav,setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={()=>setActiveNav('#')} className={activeNav=== '#'?'active' : ''}><TbHome/></a>
      <a href="#About" onClick={()=>setActiveNav('#About')} className={activeNav=== '#About'?'active' : ''}><AiOutlineUser/></a>
      <a href="#Skills"  onClick={()=>setActiveNav('#Skills')} className={activeNav=== '#Skills'?'active' : ''}><BsListCheck/></a>
      <a href="#Experience"  onClick={()=>setActiveNav('#Experience')} className={activeNav=== '#Experience'?'active' : ''}><BsJournalBookmark/></a>
      <a href="#Contact"  onClick={()=>setActiveNav('#Contact')} className={activeNav=== '#Contact'?'active' : ''}><BiMessageAltDetail/></a>
      
    </nav>
  )
}

export default Nav