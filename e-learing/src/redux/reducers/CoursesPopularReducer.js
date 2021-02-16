import { GET_POPULAR_COURSES } from "../constants/CoursesManagementConst"

const stateDefault = {
    arrCoursesPopular: []
}

export const CoursesPopularReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case GET_POPULAR_COURSES: {
            state.arrCoursesPopular = action.data
            return { ...state }
        }
    }

    return { ...state }
}