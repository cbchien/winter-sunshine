import fetch from 'isomorphic-fetch';

import { 
    fetchSkillsStart, fetchSkillsSuccess, fetchSkillsFailure,
    addSkillStart, addSkillSuccess, addSkillFailure, 
    deleteSkillStart, deleteSkillSuccess, deleteSkillFailure,
} from './../../redux/constant/skills';

export const fetchSkillsRequest = (url) => {
    if (!url) { return fetchSkillsFailure('Error. No url provided.')}

    fetchSkillsStart()

    return fetch(url)
        .then((res) => {
            if (res.status == 404) {
                return fetchSkillsFailure('Error in API request')
            }
            return res.json()
        })
        .then((skills) => fetchSkillsSuccess(skills))
        .catch((err) => fetchSkillsFailure(err));
}

export const addSkillRequest = (url, skill) => {
    if (!url) { return addSkillFailure('Error. No url provided.')}
    if (!skill.name) {return addSkillFailure('Error. No skill name provided.')}
    if (!skill.experience) {return addSkillFailure('Error. No experience provided.')}
    
    addSkillStart()

    return fetch(url, {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(skill),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        // .then((res) => {
        //     if (res.status == 404) {
        //         // no customized message yet from json-server
        //         return addSkillFailure('Error in API request')
        //     } else {
        //         return addSkillSuccess(res.json())
        //     }
        // })
        .then((res) => res.json())
        .then((skill) => {
            if (skill.id) {
                return addSkillSuccess(skill)
            } else {
                return addSkillFailure('Error in API request')
            }
        })
        .catch((err) => addSkillFailure(err));
}

export const deleteSkillRequest = (url, id) => {
    if (!url) { return deleteSkillFailure('Error. No url provided.')}
    if (!id) {return deleteSkillFailure('Error. No skill id provided.')}
    
    let concatUrl = url[url.length - 1] == '/' ? `${url}${id}` : `${url}/${id}`
    deleteSkillStart()

    return fetch(concatUrl, {
            method: 'DELETE',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((res) => {
            if (res.status == 404) {
                // no customized message yet from json-server
                return deleteSkillFailure('Error in API request')
            } else {
                return deleteSkillSuccess(res.json())
            }
        })
        .catch((err) => deleteSkillFailure(err));
}