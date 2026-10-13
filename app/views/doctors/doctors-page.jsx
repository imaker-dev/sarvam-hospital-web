import { getDoctors } from '@/app/data/doctors'
import React from 'react'
import PageHeader from '../layouts/page-header';
import PageWrapper from '../layouts/page-wrapper';
import DoctorCard from './components/doctor-card';

const DoctorsPage = () => {
  const doctors = getDoctors();
  return (
    <>
      <PageHeader title={'Our Doctors'} highlight={'Doctors'}/>

      <PageWrapper>
        <ul className="pt-8 flex flex-wrap justify-center gap-x-8 gap-y-20">
        {doctors.map((doctor) => (
          <li
            key={doctor.id}
            className="flex w-full sm:w-[calc(50%-1rem)] lg:w-[420px] xl:w-[460px]"
          >
            <DoctorCard doctor={doctor} />
          </li>
        ))}
      </ul>
      </PageWrapper>
    </>
  )
}

export default DoctorsPage
