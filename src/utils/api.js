
import $axios from "./http"

const $api = {
	getUserList: () => {
        return $axios({
            url: '/getUserList',
            method: 'get'
        })
    },
    login: () => {
        return $axios({
            url: '/login',
            method: 'post'
        })
    },
    signout: () => {
        return $axios({
            url: '/signout',
            method: 'post'
        })
    }
}

export default $api