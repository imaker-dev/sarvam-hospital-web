import { getDoctors } from '@/app/data/doctors'
import React from 'react'
import PageHeader from '../layouts/page-header';

const DoctorsPage = () => {
  const doctors = getDoctors();
  return (
    <>
      <PageHeader title={'Our Doctors'} highlight={'Doctors'}/>

      
    </>
  )
}

export default DoctorsPage
