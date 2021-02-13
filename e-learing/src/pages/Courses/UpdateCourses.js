import React from 'react'

export default function UpdateCourses() {
    return (
        <div>
            <h1>Cập nhật Khóa học</h1>
            <form>
                <div className='row'>
                    <div className='col-6'>
                        <label>Mã khóa học</label>
                        <input type='text' className='form-control' />
                    </div>
                    <div className='col-6'>
                        <label>Đánh giá</label>
                        <input type='text' className='form-control' />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-6'>
                        <label>Tên khóa học</label>
                        <input type='text' className='form-control' />
                    </div>
                    <div className='col-6'>
                        <label>Lượt xem</label>
                        <input type='text' className='form-control' />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-6'>
                        <label>Danh mục khóa học</label>
                        <input type='text' className='form-control' />
                    </div>
                    <div className='col-6'>
                        <label>Người tạo</label>
                        <input type='text' className='form-control' />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-6'>
                        <label>Ngày tạo</label>
                        <input type='text' className='form-control' />
                    </div>
                    <div className='col-6'>
                        <label>Hình Ảnh</label>
                        <input type='text' className='form-control' />
                    </div>
                </div>
                <div>
                    <div className="card">
                        <img className="card-img-top" style={{ width: '100px' }} src='https://picsum.photos/100' alt />
                        <div className="card-body">
                            <h4 className="card-title">Title</h4>
                            <p className="card-text">Text</p>
                        </div>
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
