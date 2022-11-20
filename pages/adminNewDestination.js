import AdminNav from '../components/adminNav'
import AdminNewDestination from '../components/adminNewDestination'
import { useState,useEffect } from 'react'
import axios from 'axios'

export default function AdminIndex() {
  return (
    <div className='adminIndex'>
      <AdminNav/>
      <AdminNewDestination
      />
    </div>
  )
}
