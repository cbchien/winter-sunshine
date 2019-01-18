import fetch from 'isomorphic-fetch';

import { 
    fetchSkillsStart, fetchSkillsSuccess, fetchSkillsFailure,
    addSkillStart, addSkillSuccess, addSkillFailure, 
    deleteSkillStart, deleteSkillSuccess, deleteSkillFailure,
} from './../../redux/constant/skills';

export function fetchSkillsRequest(url) {
    if (!url) { return }

    fetchSkillsStart()

    return fetch(url)
        .then((res) => res.json())
        .then((res) => {
            if (res.confirmation && res.confirmation === 'fail') {
                throw res.message;
            } else {
                return res;
            }
        })
        .then((skills) => fetchSkillsSuccess(skills))
        .catch((err) => fetchSkillsFailure(err));
}

export function addSkillRequest(url, skill) {
    if (!url) { return }

    addSkillStart()

    return fetch(url, {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(skill),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((res) => res.json())
        .then((skill) => addSkillSuccess(skill))
        .catch((err) => addSkillFailure(err));
}

export function deleteSkillRequest(url, id) {
    if (!url) { return }
    let concatUrl = url[url.length - 1] == '/' ? `${url}${id}` : `${url}/${id}`
    deleteSkillStart()

    return fetch(concatUrl, {
            method: 'DELETE',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((res) => res.json())
        .then((skill) => deleteSkillSuccess(skill))
        .catch((err) => deleteSkillFailure(err));
}