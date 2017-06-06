<template>
  <a @click="open">
    {{userInfo.name}}
    <Modal v-model="show" width="300">
      <p slot="header" style="text-align: center;">个人简介</p>
      <div>
        <Row>
          <Col span="8" style="text-align:right">姓名：</Col>
          <Col span="16">{{userInfo.name}}</Col>
        </Row>
        <Row>
          <Col span="8" style="text-align:right">性别：</Col>
          <Col span="16">{{userInfo.gender? '女' : '男'}}</Col>
        </Row>
        <Row>
          <Col span="8" style="text-align:right">邮箱：</Col>
          <Col span="16">{{userInfo.email}}</Col>
        </Row>
        <Row>
          <Col span="8" style="text-align:right">电话：</Col>
          <Col span="16">{{userInfo.phone}}</Col>
        </Row>
      </div>
      <div slot="footer" style="text-align: center;">
        <Button type="info" @click="close">关闭</Button>
      </div>
    </Modal>
  </a>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'profile',
    data () {
      return {
        show: false
      }
    },
    computed: {
      ...mapState('Auth', ['userInfo'])
    },
    methods: {
      open () {
        this.show = true
      },
      close () {
        this.show = false
      }
    }
  }

</script>
