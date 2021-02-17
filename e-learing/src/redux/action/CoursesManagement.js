
import Axios from 'axios'
import { DOMAIN } from '../../util/setting'
import { GET_CATEGORIES_COURSES, GET_POPULAR_COURSES, GET_ALL_COURSES, GET_COURSE_DETAIL } from '../constants/CoursesManagementConst'


// lấy danh sách khóa học gần đây
export const getCoursesPopularAction = () => {
    return async (dispatch) => {
        try {
            const res = await Axios({
                url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=3&pageSize=8&MaNhom=GP01`,
                method: 'GET'
            })

            dispatch({
                type: GET_POPULAR_COURSES,
                data: res.data
            })

        } catch (err) {
            console.log(err.response?.data);

            console.log("Lỗi trong hàm try", err);
        }
    }

}


// lấy danh sách khóa học dựa theo Danh mục
export const getCategoriesCoursesApi = (maDanhMuc) => {
    return async (dispatch) => {
        try {
            const res = await Axios({
                url: `${DOMAIN}/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${maDanhMuc}&MaNhom=GP01`,
                method: 'GET'
            })

            dispatch({
                type: GET_CATEGORIES_COURSES,
                data: res.data
            })
        } catch (err) {
            console.log(err.response?.data);

            console.log("Lỗi trong hàm try", err);
        }
    }
}


// lấy danh mục khóa học
export const getCategoriesApi = () => {
    return async (dispatch) => {
        try {
            const res = await Axios({
                url: `${DOMAIN}/QuanLyKhoaHoc/LayDanhMucKhoaHoc`,
                method: 'GET'
            })

            dispatch({
                type: GET_CATEGORIES_COURSES,
                data: res.data
            })
        } catch (err) {
            console.log(err.response?.data);

            console.log("Lỗi trong hàm try", err);


        }
    }
}

// lấy danh sách khóa học
export const getAllCoursesApi = () => {
    return async (dispatch) => {

        try {
            const res = await Axios({
                url: `${DOMAIN}/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01`,
                method: 'GET'
            })

            dispatch({
                type: GET_ALL_COURSES,
                data: res.data
            })
        } catch (err) {
            console.log(err.response?.data);

            console.log("Lỗi trong hàm try", err);
        }
    }
}


//lấy thông tin khóa học
export const getCoursesDetailApi = (maKhoaHoc) => {
    return async (dispatch) => {
        try {
            const res = await Axios({
                method: 'GET',
                url: `${DOMAIN}/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`
            })

            dispatch({
                type: GET_COURSE_DETAIL,
                data: res.data
            })
        } catch (err) {
            console.log(err.response?.data);

            console.log("Lỗi trong hàm try", err);
        }
    }
}

// lấy thông tin học viên khóa học

