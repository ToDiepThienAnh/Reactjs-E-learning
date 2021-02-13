import React from 'react'
import Course from '../../components/Course/Course'
import CourseCard from '../../components/Course/CourseCard'
import Footer from '../../components/Footer/Footer'
import Menu from '../../components/Header/Menu'
import AdminTemplates from '../../HOC/AdminTemplates'
import ConfirmCustomers from '../Courses/ConfirmCustomers'
import CoursesManagement from '../Courses/CoursesManagement'
import UpdateCourses from '../Courses/UpdateCourses'
import ConfirmCourses from '../Customers/ConfirmCourses'
import CustomerInfomation from '../Customers/CustomerInfomation'
import CustomersMangaments from '../Customers/CustomersMangaments'
import UpdateCustomers from '../Customers/UpdateCustomers'
import Login from '../Login/Login'
import Register from '../Register/Register'

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
            {/* <Login /> */}
            {/* <Register /> */}
            {/* <CustomerInfomation /> */}
            {/* <Footer /> */}
            {/* <AdminTemplates /> */}
            <CustomersMangaments />
            {/* <UpdateCustomers /> */}
            {/* <CoursesManagement /> */}
            {/* <UpdateCourses /> */}
            {/* <ConfirmCourses /> */}
            {/* <ConfirmCustomers /> */}
        </div>
    )
}
