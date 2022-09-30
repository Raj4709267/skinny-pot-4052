import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CareerTips from '../Page/CareerTips'
import HomePage from '../Page/HomePage'
import JobSearch from '../Page/JobSearch'
import PremiumServices from '../Page/PremiumServices'
import WorkFromHomes from '../Page/WorkFromHomes'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path="/job-search" element={<JobSearch />}/>
        <Route path='/work-from-home-jobs' element={<WorkFromHomes />}/>
        <Route path='/career-advice' element={<CareerTips />}/>
        <Route path='/career-services' element={<PremiumServices />}/>
    </Routes>
  )
}

export default MainRoutes