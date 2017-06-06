<template>
  <div>
    <Table border stripe :columns="columns" :data="users"></Table>
  </div>
</template>

<script>
  import UserService from 'services/user'
  export default {
    name: 'user-search',
    data () {
      return {
        columns: [
          {
            title: '姓名',
            key: 'name',
            width: 120
          },
          {
            title: '账号',
            key: 'account',
            width: 180
          },
          {
            title: '出生日期',
            key: 'birthDate',
            width: 140,
            render: (h, params) => {
              return h('span', params.row.birthDate.split('T')[0])
            }
          },
          {
            title: '性别',
            key: 'gender',
            width: 80,
            render: (h, params) => {
              return h('span', params.row.gender ? '女' : '男')
            }
          },
          {
            title: '邮箱',
            key: 'email',
            width: 180
          },
          {
            title: '电话',
            key: 'phone',
            width: 120
          },
          {
            title: '操作',
            key: 'action',
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.show(params.row)
                    }
                  }
                }, '查看'),
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.delete(params.row)
                    }
                  }
                }, '删除'),
                h('Button', {
                  props: {
                    type: 'warning',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.edit(params.row)
                    }
                  }
                }, '修改')
              ])
            }
          }
        ],
        users: []
      }
    },
    created () {
      this.initUsers()
    },
    methods: {
      initUsers () {
        UserService.getUsers().then((response) => {
          this.users = response.data
        })
      },
      show (row) {
        let gender = row.gender ? '女' : '男'
        let birthDate = row.birthDate.split('T')[0]
        this.$Modal.info({
          title: '用户信息',
          content: `姓名: ${row.name}<br/>账号: ${row.name}<br/>出生日期: ${birthDate}<br/>性别: ${gender}<br/>邮箱: ${row.email}<br/>电话: ${row.phone}`
        })
      },
      delete (row) {
        this.$Modal.confirm({
          title: '',
          content: `确认删除${row.name}?`,
          onOk: () => {
            this.$Message.success('删除成功')
          }
        })
      }
    }
  }

</script>
