import axios from 'axios'
import router from '../router/index'
import { ElMessage } from 'element-plus'


// 导入mock
import './mock'

const $axios = axios.create({
	baseUrl: 'http://localhost:8080', 
	timeout: 2000                   
})

$axios.interceptors.request.use(
	config => {
		let token = window.localStorage.getItem("token")
		if (token?.length) {
			config.headers.token = window.atob(token)
		}
		console.log(`token = ${config.headers.token}`)
		return config
	},
	error => Promise.reject(error)
)

$axios.interceptors.response.use(
	response => {
		if (response.data.status === 401 || response.data.status === 203) {
			ElMessage({
				type: 'error',
				showClose: false,
				message: 'The token is expired',
				onClose: () => {
					router.push('login')
				}
			})
		}
		return response
	},
	error => Promise.reject(error)
)

export default $axios
