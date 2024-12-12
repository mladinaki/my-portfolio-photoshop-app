import * as request from '../lib/reguest'

const baseUrl = 'http://localhost:3030/jsonstore/users';

export const getAll = async () => {
    const response = await request.get(`${baseUrl}`)
    const data = Object.values(response)
    return data
}

export const getOne = async (projectId) => {
    const response = await request.get(`${baseUrl}/${projectId}`)
    return response
} 