<template>
  <Row type="flex">
    <i-col span="9">
    </i-col>
    <i-col span="6">
      <Form ref="formInline" :model="formInline" :rules="ruleInline">
        <Form-item prop="account">
          <Input type="text" v-model="formInline.account" placeholder="Account">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </Form-item>
        <Form-item prop="name">
          <Input type="text" v-model="formInline.name" placeholder="Name">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </Form-item>
        <Form-item prop="password">
          <Input type="password" v-model="formInline.password" placeholder="Password">
          <Icon type="ios-locked-outline" slot="prepend"></Icon>
          </Input>
        </Form-item>
        <Form-item prop="gender">
          <Radio-group v-model="formInline.gender">
            <Radio label="0">
              <Icon type="male"></Icon>
              <span>男</span>
            </Radio>
            <Radio label="1">
              <Icon type="female"></Icon>
              <span>女</span>
            </Radio>
          </Radio-group>
        </Form-item>
        <Form-item prop="phone">
          <Input type="text" v-model="formInline.phone" placeholder="Phone">
          <Icon type="iphone" slot="prepend"></Icon>
          </Input>
        </Form-item>
        <Form-item prop="email">
          <Input type="text" v-model="formInline.email" placeholder="Email">
          <Icon type="email" slot="prepend"></Icon>
          </Input>
        </Form-item>
        <Form-item prop="birthDate">
          <Date-picker type="date" v-model="formInline.birthDate" placeholder="选择出生日期"></Date-picker>
        </Form-item>
        <Form-item>
          <Button type="primary" @click="handleSubmit('formInline')">注册</Button>
          <a href="/login" style="margin-left: 20px;">返回登陆页面</a>
        </Form-item>
      </Form>
    </i-col>
    <i-col span="9">
    </i-col>
  </row>
</template>

<script>
  import userServices from 'services/user'
  import Router from '@/router'
  export default {
    name: 'register',
    data () {
      return {
        formInline: {
          account: '',
          name: '',
          password: '',
          gender: '0',
          phone: '',
          email: '',
          birthDate: ''
        },
        ruleInline: {
          account: [
            { required: true, message: '请填写用户名', trigger: 'blur' }
          ],
          name: [
            { required: true, message: '请填姓名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请填写密码', trigger: 'blur' },
            { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
          ],
          gender: [
            { required: true, message: '请选择性别' }
          ],
          phone: [
            { required: true, min: 7, max: 11, message: '请输入有效手机号', trigger: 'blur' }
          ],
          email: [
            { type: 'email', message: '请填写邮箱', required: true, trigger: 'blur' }
          ],
          birthDate: [
            { type: 'date', required: true, message: '请选择出生日期', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            userServices.register(this.formInline).then((response) => {
              Router.push({ name: 'login' })
              this.$Message.success('注册成功!')
            }, () => {
              this.$Message.error('注册失败!')
            })
          } else {
            this.$Message.error('表单验证失败!')
          }
        })
      }
    }
  }

</script>
