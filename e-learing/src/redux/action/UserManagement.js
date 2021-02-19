import axios from "axios"
import { ACCESS_TOKEN, DOMAIN, USER_LOGIN } from "../../util/setting"
import { GET_TYPE_USERS, GET_USERS_LIST } from "../constants/UserManagementConst"


// lấy danh sách loại người dùng
export const getTypeOfUsersApi = () => {
    return async (dispatch) => {
        try {
            const res = await axios({
                method: 'GET',
                url: `${DOMAIN}/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung`
            })

            dispatch({
                type: GET_TYPE_USERS,
                data: res.data
            })
        } catch (err) {
            console.log(err.response?.data);

            console.log("lỗi", err);
        }
    }
}

// lấy danh sách người dùng
export const getUsersListApi = () => {
    return async (dispatch) => {
        try {
            const res = await axios({
                method: 'GET',
                url: `${DOMAIN}/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01`
            })

            dispatch({
                type: GET_USERS_LIST,
                data: res.data
            })

        } catch (err) {
            console.log(err.response?.data);

            console.log("lỗi", err);
        }
    }
}


// tìm kiếm người dùng
export const findUserApi = (tuKhoa) => {
    return async (dispatch) => {
        try {
            const res = await axios({
                method: 'GET',
                url: `${DOMAIN}/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01&tuKhoa=${tuKhoa}`
            })
        } catch (err) {
            console.log(err.response?.data);

            console.log("lỗi", err);
        }
    }
}


// Đăng nhập
export const DangNhapApi = (User) => {
    return async (dispatch) => {
        try {
            const res = await axios({
                method: 'POST',
                url: `${DOMAIN}/QuanLyNguoiDung/DangNhap`
            })

            localStorage.setItem(ACCESS_TOKEN, res.data.ACCESS_TOKEN)
            localStorage.setItem(USER_LOGIN, JSON.stringify(res.data))


            console.log(res.data);
        } catch (err) {
            console.log(err.response?.data);

            console.log("lỗi", err); g
        }
    }
}