
import Axios from 'axios'
import { GET_POPULAR_COURSES } from '../constants/CoursesPopularConst'


export const getCoursesPopularAction = () => {
    return async (dispatch) => {
        const res = await Axios({
            url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=3&pageSize=8&MaNhom=GP01`,
            method: 'GET'
        })

        dispatch({
            type: GET_POPULAR_COURSES,
            data: res.data
        })
    }
}