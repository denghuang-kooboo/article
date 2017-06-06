<template>
  <div id="app">
    <!--<logout></logout>-->
    <router-view></router-view>
  </div>
</template>

<script>
  import Logout from '@/components/logout'
  import {mapGetters} from 'vuex'
  export default {
    name: 'app',
    beforeCreate () {
      let token = sessionStorage.getItem('token') || ''
      let userInfo = JSON.parse(sessionStorage.getItem('userInfo')) || {}
      this.$store.dispatch('Auth/setToken', {token: token})
      this.$store.dispatch('Auth/setUserInfo', userInfo)
    },
    created () {
      if (!this.$route.matched.some(res => res.meta.requireAuth)) {
        return
      }
      if (!this.isLogin) {
        this.$router.push({name: 'login'})
      }
    },
    computed: {
      ...mapGetters('Auth', ['isLogin'])
    },
    components: {
      Logout
    },
    watch: {
      isLogin (val) {
        if (!val) {
          this.$router.push({name: 'login'})
        }
      }
    }
  }

</script>
