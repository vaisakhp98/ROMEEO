import AdminNav from '../components/adminNav'
import AdminTopTiles from '../components/adminTopTiles'
import { useState,useEffect } from 'react'
import axios from 'axios'

export default function adminIndex() {


  return (
    <div className='adminIndex'>
      <AdminNav/>
      <AdminTopTiles/>
    </div>
  )
}
