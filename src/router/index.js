import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            redirect: "/home"
        },
        {
            path: "/home",
            name: "home",
            component: () => import("@/pages/Home.vue"),
        },
        {
            path: "/login",
            name: "login",
            component: () => import("@/pages/Login.vue"),
        },
        {
            path: "/:pathMatch(.*)", 
            redirect: "/404", 
            name: "notMatch", 
            hidden: true 
        },
        {
            path: "/404",
            name: "404",
		    hidden: true,
            component: () => import("@/pages/404.vue"),
		    meta: { 
                title: "404" 
            },
        },
	
    ]
})

router.beforeEach((to, from) => {
    let token = window.localStorage.getItem("token")
    if (to.name !== "login" && to.name !== "404" && !token?.length) {
        return { 
            name: 'login' 
        }
    }
    return true
})

export default router
