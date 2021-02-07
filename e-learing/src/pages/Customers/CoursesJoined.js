import React from 'react'
import Course from '../../components/Course/Course'
import CustomerCourse from '../../components/Customers/CustomerCourse'

export default function CoursesJoined() {
    return (
        <div>
            <div className='d-flex justify-content-between'>
                <h1>Các khóa học đã tham gia</h1>
                <input className='form-control w-25' type='text' />
            </div>
            <CustomerCourse />
        </div>
    )
}
