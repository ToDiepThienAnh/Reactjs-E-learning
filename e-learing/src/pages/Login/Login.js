import React from 'react'

export default function Login() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-6'>
                    <img className="card-img-top" src="https://picsum.photos/200" alt />
                </div>
                <div className='col-6'>
                    <form>
                        <h1>Đăng ký</h1>
                        <div className="form-group">
                            <label>Tài khoản</label>
                            <input type="text" name id className="form-control" placeholder />
                        </div>
                        <div className="form-group">
                            <label>Mật Khẩu</label>
                            <input type="text" name id className="form-control" placeholder />
                        </div>
                        <div className="form-group">
                            <label>Nhập lại mật khẩu</label>
                            <input type="text" name id className="form-control" placeholder />
                        </div>
                        <div className="form-group">
                            <label>Họ tên</label>
                            <input type="text" name id className="form-control" placeholder />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" name id className="form-control" placeholder />
                        </div>
                        <div className="form-group">
                            <label>Số điện thoại</label>
                            <input type="text" name id className="form-control" placeholder />
                        </div>
                        <div>
                            <button>Đăng kí</button>
                            <button>Đăng Nhập</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
