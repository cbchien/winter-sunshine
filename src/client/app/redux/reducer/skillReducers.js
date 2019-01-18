import {
    FETCH_SKILLS_START,
    FETCH_SKILLS_SUCCESS,
    ADD_SKILL_START,
    ADD_SKILL_SUCCESS,
    DELETE_SKILL_START,
    DELETE_SKILL_SUCCESS
} from './../constant/skills'

const skills = (
    state = {
        isFetching: false,
        isAdding: false,
        isDeleting: false,
        items: []
    },
    action
) => {
    switch (action.type) {
        case FETCH_SKILLS_START:
            return Object.assign({}, state, {
                isFetching: true,
            })
        case FETCH_SKILLS_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.payload.skills,
            })
        case ADD_SKILL_START:
            return Object.assign({}, state, {
                isAdding: true,
            })
        case ADD_SKILL_SUCCESS:
            return Object.assign({}, state, {
                isAdding: false,
            })
        case DELETE_SKILL_START:
            return Object.assign({}, state, {
                isDeleting: true,
            })
        case DELETE_SKILL_SUCCESS:
            return Object.assign({}, state, {
                isDeleting: false,
            })
        default:
            return state
    }
}

export default skills