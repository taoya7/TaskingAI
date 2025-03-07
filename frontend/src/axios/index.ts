import { request } from '../utils/index'
const auth_base_url = 'api/v1'

const verifyToken = async () => {
    return await request.post(`${auth_base_url}/admins/verify_token`)

}
const fetchLogin = async (data:object) => {

    return await request.post(`${auth_base_url}/admins/login`, data)
}
export { verifyToken , fetchLogin }
