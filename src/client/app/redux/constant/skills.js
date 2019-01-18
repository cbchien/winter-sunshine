export const SKILL_LENGTH_OPTIONS = [
    { value: '0to1', label: '<1 year' },
    { value: '1to3', label: '1 - 3 years' },
    { value: '3to5', label: '3 - 5 years' },
    { value: '5to7', label: '5 - 7 years' },
    { value: '7up', label: '7+ years' },
]

export const FETCH_SKILLS_START = 'FETCH_SKILLS_START';
export const FETCH_SKILLS_SUCCESS = 'FETCH_SKILLS_SUCCESS';
export const FETCH_SKILLS_FAILURE = 'FETCH_SKILLS_FAILURE';

export const ADD_SKILL_START = 'ADD_SKILL_START';
export const ADD_SKILL_SUCCESS = 'ADD_SKILL_SUCCESS';
export const ADD_SKILL_FAILURE = 'ADD_SKILL_FAILURE';

export const DELETE_SKILL_START = 'DELETE_SKILL_START';
export const DELETE_SKILL_SUCCESS = 'DELETE_SKILL_SUCCESS';
export const DELETE_SKILL_FAILURE = 'DELETE_SKILL_FAILURE';

export function fetchSkillsStart() {
    return {
        type: FETCH_SKILLS_START,
    };
}

export function fetchSkillsSuccess(skills) {
    return {
        type: FETCH_SKILLS_SUCCESS,
        payload: { skills },
    };
}

export function fetchSkillsFailure(err) {
    return {
        type: FETCH_SKILLS_FAILURE,
        payload: { err },
    };
}

export function addSkillStart() {
    return {
        type: ADD_SKILL_START,
    };
}

export function addSkillSuccess(skill) {
    return {
        type: ADD_SKILL_SUCCESS,
        payload: { skill },
    };
}

export function addSkillFailure(err) {
    return {
        type: ADD_SKILL_FAILURE,
        payload: { err },
    };
}
  
export function deleteSkillStart() {
    return {
        type: DELETE_SKILL_START,
    };
}

export function deleteSkillSuccess(skill) {
    return {
        type: DELETE_SKILL_SUCCESS,
        payload: { skill },
    };
}

export function deleteSkillFailure(err) {
    return {
        type: DELETE_SKILL_FAILURE,
        payload: { err },
    };
}