import React from 'react'

export default function CoursesManagement() {
    return (
        <div>
            <h1>Quản lí Khóa học</h1>
            <button>Thêm khóa học</button>
            <div className='d-flex'>
                <input className='form-control w-50' type='text' />
                <button>Tìm kiếm</button>
            </div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>MaKhoaHoc</th>
                        <th>Tên Khóa học</th>
                        <th>Hình Ảnh</th>
                        <th>Lượt xem</th>
                        <th>Người tạo</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
    )
}
