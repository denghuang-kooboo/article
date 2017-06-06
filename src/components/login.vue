<template>
  <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
    <Form-item prop="userName">
      <Input type="text" v-model="formInline.userName" placeholder="Username">
      <Icon type="ios-person-outline" slot="prepend"></Icon>
      </Input>
    </Form-item>
    <br/>
    <Form-item prop="password">
      <Input type="password" v-model="formInline.password" placeholder="Password">
      <Icon type="ios-locked-outline" slot="prepend"></Icon>
      </Input>
    </Form-item>
    <br/>
    <Form-item>
      <Button type="primary" @click="handleSubmit('formInline')">登录</Button>
    </Form-item>
    <Form-item>
      <a href="/register">注册新账号</a>
    </Form-item>
  </Form>
</template>
<script>
  import {mapGetters, mapActions} from 'vuex'
  export default {
    name: 'login',
    data () {
      return {
        formInline: {
          userName: '',
          password: ''
        },
        ruleInline: {
          userName: [
            { required: true, message: '请填写用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请填写密码', trigger: 'blur' },
            { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
          ]
        }
      }
    },
    computed: {
      ...mapGetters('Auth', ['isLogin'])
    },
    methods: {
      ...mapActions('Auth', ['login']),
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.login({userName: this.formInline.userName, password: this.formInline.password})
          } else {
            this.$Message.error('表单验证失败!')
          }
        })
      }
    },
    watch: {
      isLogin (val) {
        if (val) {
          this.$router.push({name: 'home'})
        }
      }
    }
  }

</script>

<style @scoped>
  form {
    text-align: center;
    margin-top: 60px !important;
  }
</style>
