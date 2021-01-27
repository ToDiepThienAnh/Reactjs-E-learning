import React from 'react'

export default function Menu() {
    return (
        <div>
            <div style={{ width: "100%", height: "5px", backgroundColor: "#d4b03c" }}></div>
            <div className='d-flex'>
                <div className>
                    <img src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png" />
                    <button className='ml-3'>Danh mục khóa học</button>

                </div>
                <div className='py-2'>
                    <input className='form-control w-100' type="text" placeholder="tìm khóa học"></input>
                </div>
                <div className='py-2'>
                    <button>Đăng kí</button>
                    <button>Đăng nhập</button>
                </div>
            </div>
        </div>
    )
}
