import React from 'react'

export default function ConfirmCustomers() {
    return (
        <div className='container'>
            <p>Xác nhận Người dùng</p>
            <div className='d-flex'>
                <input />
                <button>Ghi Danh</button>
            </div>
            <h3>Học viên chờ xác thực</h3>
            <table className='table'>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tài khoản</th>
                        <th>Họ tên</th>
                        <th>Chờ xác thực</th>
                    </tr>
                </thead>
            </table>

            <h3>Học viên đã ghi danh</h3>
            <table className='table'>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tài khoản</th>
                        <th>Họ tên</th>
                        <th>Chờ xác thực</th>
                    </tr>
                </thead>
            </table>
        </div>
    )
}
