<style scoped>

</style>

<template>

   <div class="common-layout">
      <el-container>
         <el-header>
            <el-button type="primary" @click="signout()">
               Sign out
            </el-button>

         </el-header>
         <el-main>
            <table>
               <thead>
                  <tr>
                     <th>UserName</th>
                     <th>Gender</th>
                     <th>Age</th>
                  </tr>
               </thead>
               <tbody>
                  <tr v-for="el in store.state.list.userList">
                     <td>
                        {{ el.userName }}
                     </td>
                     <td>
                        {{ el.gender > 1 ? "Female" : "Male" }}
                     </td>
                     <td>
                        {{ el.age }}
                     </td>
                  </tr>
               </tbody>
            </table>
         </el-main>
      </el-container>
   </div>

   
</template>


<script setup>
   import { onMounted, getCurrentInstance } from 'vue'
   import { useStore } from "vuex"
   import { ElMessage } from 'element-plus'

   const store = useStore()

   const { proxy } = getCurrentInstance()

   onMounted(() => {
      store.dispatch("list/getList")
   })

   async function signout() {
      let successful = await store.dispatch("user/signout")
      successful && ElMessage({
         type: 'success',
         showClose: false,
         message: 'Account logged out successfully',
         onClose: () => {
            proxy.$router.replace("login")
         }
      })
   }
  
</script>