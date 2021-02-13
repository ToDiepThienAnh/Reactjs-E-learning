import React from 'react'

export default function UpdateCustomers() {
    return (
        <div>
            <h1>Cập nhật người dùng</h1>
            <form>
                <div className='row'>
                    <div className='col-6'>
                        <label>Tài khoản</label>
                        <input type='text' className='form-control' />
                    </div>
                    <div className='col-6'>
                        <label>Email</label>
                        <input type='text' className='form-control' />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-6'>
                        <label>Mật khẩu</label>
                        <input type='text' className='form-control' />
                    </div>
                    <div className='col-6'>
                        <label>Số điện thoại</label>
                        <input type='text' className='form-control' />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-6'>
                        <label>Họ tên</label>
                        <input type='text' className='form-control' />
                    </div>
                    <div className='col-6'>
                        <label>Loại người dùng</label>
                        <input type='text' className='form-control' />
                    </div>
                </div>
                <div>
                    <button>Lưu</button>
                    <button>Trở lại</button>
                </div>
            </form>
        </div>
    )
}
