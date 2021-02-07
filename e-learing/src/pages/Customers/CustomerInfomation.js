import React from 'react'
import CustomerInfoDetail from '../../components/Customers/CustomerInfoDetail'
import CoursesJoined from './CoursesJoined'

export default function CustomerInfomation() {
    return (
        <div>
            <div>
                <ul className="nav nav-tabs border-bottom-0" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Thông tin cá nhân</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Khóa học của tôi</a>
                    </li>

                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <CustomerInfoDetail />
                    </div>
                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <CoursesJoined />
                    </div>

                </div>
            </div>

        </div>
    )
}
