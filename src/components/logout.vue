<template>
  <a @click="logout">注销</a>
</template>

<script>
  import UserService from 'services/user'
  import {mapState} from 'vuex'
  export default {
    name: 'logout',
    computed: {
      ...mapState('Auth', ['token'])
    },
    methods: {
      logout () {
        UserService.logout(this.token).then(response => {
          this.$store.dispatch('Auth/logout')
          this.$Message.success(response.data)
        })
      }
    }
  }

</script>
