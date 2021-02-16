import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getCoursesPopularAction } from '../../redux/action/CoursesPopularAction';
import CourseCard from './CourseCard';


export default function CoursesPopular(props) {


    let arrCoursesPopular = useSelector(state => state.CoursesPopularReducer.arrCoursesPopular)


    console.log("arrCoursesPopular", arrCoursesPopular.items);
    const dispatch = useDispatch()
    const loadCoursesPopular = async () => {
        dispatch(getCoursesPopularAction());
    }

    useEffect(() => {
        dispatch(getCoursesPopularAction())
    }, [])

    const renderPopularCourses = () => {
        return arrCoursesPopular.items?.map((course, index) => {
            return <div className='col-3' key={index}>
                <div className="card">
                    <img className="card-img-top" src={course.hinhAnh} alt />
                    <div className="card-body">
                        <h4 className="card-title">{course.tenKhoaHoc}</h4>
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
        })
    }

    return (
        <>
            <div className='row'>
                {renderPopularCourses()}
            </div>
        </>
    )
}
