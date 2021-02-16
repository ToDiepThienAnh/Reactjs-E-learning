import React, { useEffect } from 'react'

export default function Menu() {





    return (
        <div>
            <div style={{ width: "100%", height: "5px", backgroundColor: "#d4b03c" }}></div>
            <div className='d-flex'>
                <div className='d-flex'>
                    <img src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png" />
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Danh mục khóa học
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">

                            <a class="dropdown-item" href="#">Tư Duy</a>
                            <a class="dropdown-item" href="#">Front End</a>
                            <a class="dropdown-item" href="#">Back End</a>
                            <a class="dropdown-item" href="#">FullStack</a>
                            <a class="dropdown-item" href="#">Design</a>
                            <a class="dropdown-item" href="#">Di Động</a>
                        </div>
                    </div>

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
