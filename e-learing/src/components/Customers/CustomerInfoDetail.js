import React from 'react'

export default function CustomerInfoDetail() {
    return (
        <div>
            <div className='row'>
                <div className='col-6'>
                    <div className='form-group'>
                        <label>Email</label>
                        <input className='form-control' type='text' />
                    </div>
                </div>
                <div className='col-6'>
                    <div className='form-group'>
                        <label>Tài khoản</label>
                        <input className='form-control' type='text' />
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-6'>
                    <div className='form-group'>
                        <label>Họ tên</label>
                        <input className='form-control' type='text' />
                    </div>
                </div>
                <div className='col-6'>
                    <div className='form-group'>
                        <label>Mật khẩu</label>
                        <input className='form-control' type='text' />
                    </div>
                </div>
            </div>
            <div className='row'>

                <div className='col-6'>
                    <div className='form-group'>
                        <label>Số điện thoại</label>
                        <input className='form-control' type='text' />
                    </div>
                </div>
                <div className='col-6'>
                    <div className='form-group'>
                        <button>Cập nhật</button>

                    </div>
                </div>
            </div>
        </div>
    )
}
