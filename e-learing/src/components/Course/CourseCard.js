import React from 'react'

export default function CourseCard() {
    return (
        <div>
            <div className="card">
                <img className="card-img-top" src="https://picsum.photos/200" alt />
                <div className="card-body">
                    <h4 className="card-title">Tên khóa học</h4>
                    <div className='d-flex'>
                        <div className='d-flex'>
                            <div>
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                            </div>

                        </div>
                        <p>4.5</p>
                        <span>(1.596)</span>
                    </div>
                </div>
                <div className='text-right'>
                    <button>Đăng kí</button>
                </div>
            </div>
        </div>

    )
}
