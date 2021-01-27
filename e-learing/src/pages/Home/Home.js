import React from 'react'
import Course from '../../components/Course/Course'
import CourseCard from '../../components/Course/CourseCard'
import Menu from '../../components/Header/Menu'
import Login from '../Login/Login'

export default function Home() {
    return (
        <div>
            {/* <Menu />
            <div className='col-3'>
                <CourseCard />
            </div>
            <div>
                <Course />

            </div> */}
            <Login />
        </div>
    )
}
