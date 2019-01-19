import {fetchSkillsRequest, addSkillRequest, deleteSkillRequest} from './skillsRequest'
import dotenv from 'dotenv';

dotenv.config()

const url = process.env.API_SKILLS_URL || 'http://localhost:3000/skills'

test(`fetchSkillsRequest:: fetch all skills in db`, () => {
    return fetchSkillsRequest(url).then((res) => {
        expect(res.type).toBe('FETCH_SKILLS_SUCCESS')
        expect(res).toHaveProperty('payload.skills')
    })
})

test(`addSkillRequest:: creating 'dummy1' skill`, () => {
    return addSkillRequest(url, {
        id: 999999,
        name: "dummy1",
        experience: "1to3"
    }).then(res => {
        // console.log(res)
        expect(res.type).toBe('ADD_SKILL_SUCCESS')
        expect(res.payload.skill.id).toBe(999999)
    })
})

test(`addSkillRequest:: must pass in url to function`, () => {
    let res = addSkillRequest('', {
        id: 99999,
        name: "dummy1",
        experience: "1to3"
    })
    expect(res.type).toBe('ADD_SKILL_FAILURE')
    expect(res.payload.err).toEqual(expect.stringContaining('No url'))
})

test(`addSkillRequest:: skill must include skill name`, () => {
    let res = addSkillRequest(url, {
        experience: "1to3"
    })
    expect(res.type).toBe('ADD_SKILL_FAILURE')
    expect(res.payload.err).toEqual(expect.stringContaining('No skill name'))
})

test(`addSkillRequest:: skill must include experience`, () => {
    let res = addSkillRequest(url, {
        name: "dummy1"
    })
    expect(res.type).toBe('ADD_SKILL_FAILURE')
    expect(res.payload.err).toEqual(expect.stringContaining('No experience'))
})

test(`deleteSkillRequest:: missing id`, () => {
    return deleteSkillRequest(url, 12356789).then(res => {
        expect(res.type).toBe('DELETE_SKILL_FAILURE')
    })
})

test(`deleteSkillRequest:: delete 'dummy1'`, () => {
    return deleteSkillRequest(url, 999999).then(res => {
        expect(res.type).toBe('DELETE_SKILL_SUCCESS')
    })
})

test(`deleteSkillRequest:: no url passed in function`, () => {
    let res = deleteSkillRequest('', 123456789)
    expect(res.type).toBe('DELETE_SKILL_FAILURE')
    expect(res.payload.err).toEqual(expect.stringContaining('Error'))
})

test(`deleteSkillRequest:: missing id`, () => {
    let res = deleteSkillRequest(url, null)
    expect(res.type).toBe('DELETE_SKILL_FAILURE')
    expect(res.payload.err).toEqual(expect.stringContaining('No skill id'))
})