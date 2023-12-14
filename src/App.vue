<template>
	<router-view></router-view>
</template>


<script setup>
	import { onMounted, getCurrentInstance } from 'vue'
	import { useStore } from "vuex"


	const { proxy } = getCurrentInstance()
	const store = useStore()
	onMounted(() => {
		let token = window.localStorage.getItem("token")
		token?.length && store.commit("user/updateToken", token)
	})
</script>