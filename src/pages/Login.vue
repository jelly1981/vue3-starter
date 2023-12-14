<style scoped>

</style>

<template>
   <el-form
      label-width="100px"
      style="width: 400px"
      :rules="rules"
      :model="formData"
      ref="formRef"
   >
      <el-form-item 
         label="UserName"
         prop="username"
      >
         <el-input 
            type="text"
            v-model="formData.username"
         />
      </el-form-item>
      <el-form-item 
         label="Password"
         prop="password"
      >
         <el-input 
            type="password"
            v-model="formData.password"
            autocomplete="off"
         />
      </el-form-item>
      <el-form-item>
         <el-button :disabled="!formData.username.length && !formData.password.length" type="primary" @click="submitForm(formRef)">
            Login
         </el-button>
         <el-button @click="resetForm(formRef)">
            Reset
         </el-button>
      </el-form-item>
   </el-form>
</template>

<script setup>
   import { reactive, ref, getCurrentInstance } from 'vue'

   import { useStore } from "vuex"

   import { ElMessage } from 'element-plus'

   const { proxy } = getCurrentInstance()

   const formRef = ref()
   
   const store = useStore()

   const formData = reactive({
      username: '',
      password: ''
   })

   const rules = {
      username: [
         { required: true, message: 'username is required', trigger: 'blur' },
      ],
      password: [
         { required: true, message: 'password is required', trigger: 'blur' }
      ]
   }
   async function submitForm(formRef) {
      const successful = await store.dispatch("user/login", JSON.parse(JSON.stringify(formData)));
      if (successful) {
         proxy.$router.replace("home")
      } else {
         ElMessage({
				type: 'error',
				showClose: false,
				message: 'May your username or password was Your username or password was wrong. Please try to login again later.'
			})
      }
   }

   function resetForm(formRef, a) {
      formRef.resetFields()
   }

</script>


