import { createStore } from "vuex"
import list from "./list.js"
import user from "./user.js"

const store = createStore({
    modules: {
        list,
        user
    }
})

export default store