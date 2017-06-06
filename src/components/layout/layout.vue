<template>
  <div class="layout" :class="{'layout-hide-text': spanLeft < 4}">
    <div class="layout-ceiling">
      <div class="layout-ceiling-main">
        <profile></profile>|
        <logout></logout>
      </div>
    </div>
    <Row type="flex">
      <i-col :span="spanLeft" class="layout-menu-left">
        <Menu active-name="1" theme="dark" width="auto" @on-select="select">
          <div class="layout-logo-left">
            <img class="logo" src="/static/johnwei.png"></img>
          </div>
          <Menu-item name="home">
            <Icon type="ios-home" :size="iconSize"></Icon>
            <span class="layout-text">首页</span>
          </Menu-item>
          <Menu-item name="user-search">
            <Icon type="ios-person" :size="iconSize"></Icon>
            <span class="layout-text">用户管理</span>
          </Menu-item>
        </Menu>
      </i-col>
      <i-col :span="spanRight">
        <div class="layout-header">
          <i-button type="text" @click="toggleClick">
            <Icon type="navicon" size="32"></Icon>
          </i-button>
        </div>
        <div class="layout-breadcrumb">
          <Breadcrumb>
            <Breadcrumb-item>{{breadcrumb}}</Breadcrumb-item>
          </Breadcrumb>
        </div>
        <div class="layout-content">
          <div class="layout-content-main">
            <router-view></router-view>
          </div>
        </div>
        <div class="layout-copy">
          <slot name="footer">2011-2016 &copy; TalkingData</slot>
        </div>
      </i-col>
    </Row>
  </div>
</template>
<script>
  import Logout from 'components/logout'
  import Profile from 'components/profile'
  import {mapState} from 'vuex'
  export default {
    name: 'gb-layout',
    components: {
      Logout,
      Profile
    },
    data () {
      return {
        spanLeft: 4,
        spanRight: 20,
        breadcrumb: ''
      }
    },
    computed: {
      ...mapState('Auth', ['userInfo']),
      iconSize () {
        return this.spanLeft === 4 ? 18 : 24
      }
    },
    methods: {
      select (name) {
        this.$router.push({name: name})
        this.breadcrumb = name
      },
      toggleClick () {
        if (this.spanLeft === 4) {
          this.spanLeft = 2
          this.spanRight = 22
        } else {
          this.spanLeft = 4
          this.spanRight = 20
        }
      }
    }
  }

</script>

<style scoped>
  .logo {
    width: 100%;
    height: 45px;
  }
  .layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }

  .layout-breadcrumb {
    padding: 10px 15px 0;
  }

  .layout-content {
    min-height: 400px;
    margin: 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
  }

  .layout-content-main {
    padding: 10px;
  }

  .layout-copy {
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
  }

  .layout-menu-left {
    background: #464c5b;
  }

  .layout-header {
    height: 60px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
  }

  .layout-logo-left {
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
  }

  .layout-ceiling-main a {
    color: #9ba7b5;
  }

  .layout-hide-text .layout-text {
    display: none;
  }

  .ivu-col {
    transition: width .2s ease-in-out;
  }
  .layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }

  .layout-logo {
    width: 0px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }

  .layout-header {
    height: 60px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
  }

  .layout-copy {
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
  }

  .layout-ceiling {
    background: #464c5b;
    padding: 10px 0;
    overflow: hidden;
  }

  .layout-ceiling-main {
    float: right;
    margin-right: 15px;
  }

  .layout-ceiling-main a {
    color: #9ba7b5;
  }
</style>
