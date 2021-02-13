import React from 'react'

export default function ConfirmCourses() {
    return (
        <div className='container'>
            <p>Xác nhận khóa học</p>
            <div className='d-flex'>
                <input />
                <button>Ghi Danh</button>
            </div>
            <h3>Khóa học chờ xác thực</h3>
            <table className='table'>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên khóa học</th>
                        <th>Chờ xác nhận</th>
                    </tr>
                </thead>
            </table>

            <h3>Khóa học đã ghi danh</h3>
            <table className='table'>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên khóa học</th>
                        <th>Chờ xác nhận</th>
                    </tr>
                </thead>
            </table>
        </div>
    )
}
