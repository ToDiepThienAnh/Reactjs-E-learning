import { GET_CATEGORIES_COURSES } from "../constants/CoursesManagementConst"

const stateDefault = {
    arrCategoriesCourses: []
}

export const CategoriesReducer = (state = stateDefault, action) => {
    switch (action.type) {

        case GET_CATEGORIES_COURSES: {
            state.arrCategoriesCourses = action.data

            return { ...state }
        }

    }


    return { ...state }
}