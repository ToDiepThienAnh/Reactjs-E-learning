import React from 'react'

export default function Footer() {
    return (
        <div className='bg-dark text-white mt-4 container-fluid'>
            <div className='row'>
                <div className='col-4'>
                    <h5>NHẬN TIN SỰ KIỆN & KHUYẾN MÃI</h5>
                    <p>CyberSoft sẽ gởi các khóa học trực tuyến & các chương trình CyberLive hoàn toàn MIỄN PHÍ và các chương trình KHUYẾN MÃI hấp dẫn đến các bạn.</p>
                    <div className='d-flex'>
                        <input className='form-control w-50' />
                        <button>Đăng kí</button>
                    </div>
                </div>
                <div className='col-4'>
                    <h5>ĐĂNG KÍ TƯ VẤN</h5>
                    <input className='form-control w-50' />
                    <input className='form-control w-50' />
                    <input className='form-control w-50' />
                    <button>Đăng kí tư vấn</button>
                </div>
                <div className='col-4'>
                    <a href='https://www.facebook.com/lophocviet/'>

                    </a>
                </div>
            </div>
            <div className='row'>
                <div className='col-4'>
                    <p>Trụ sở: 112 Cao Thắng, Quận 3 – HCM</p>
                    <p>Cơ sở 2: 376 Võ Văn Tần – Quận 3</p>
                    <p>Cơ sở 3: 459 Sư Vạn Hạnh – Quận 10</p>
                    <p>Cơ sở 4: 82 Ung Văn Khiêm – Bình Thạnh</p>
                    <p>Cơ sở 5: 110 Đường số 10 nội bộ khu CityLand Phan Văn Trị – Gò Vấp</p>
                    <p>Cơ sở 6: 56 Lê Cảnh Tuân – Tân Phú</p>
                    <p>Hotline:  096.105.1014 – 077.886.1911</p>
                </div>
                <div className='col-4'>
                    <div>
                        <a href='https://cybersoft.edu.vn/lap-trinh-front-end-chuyen-nghiep/'>Lập trình Front End</a>
                        <a href='https://cybersoft.edu.vn/lap-trinh-back-end-java-web-chuyen-nghiep/'>Lập trình Back End Java</a>
                        <a href='https://cybersoft.edu.vn/chuyen-gia-fullstack-javascript/'>Lập trình Front End NodeJS</a>
                        <a href='https://cybersoft.edu.vn/chuyen-gia-lap-trinh-di-dong-react-native/'>Lập trình di động React Native</a>
                        <a href='https://toidicodedao.com/'>Tôi đi code dạo</a>
                        <a href='https://myclass.vn/'>Học lập trình trực tuyến</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
