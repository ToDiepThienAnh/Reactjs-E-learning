import React from 'react'

export default function CustomersMangaments() {
    return (
        <div>
            <h1>Quản lí Người Dùng</h1>
            <button>Thêm người dùng</button>
            <div className='d-flex'>
                <input className='form-control w-50' type='text' />
                <button>Tìm kiếm</button>
            </div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tài khoản</th>
                        <th>Mật khẩu</th>
                        <th>Họ tên</th>
                        <th>Email</th>
                        <th>Số điện thoại</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
    )
}
