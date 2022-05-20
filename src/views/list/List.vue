<template>
  <PageWrapper>
    <template v-slot:default="{ height }">
      <a-table
        :scroll="{ y: height - 40 }"
        :columns="columns"
        rowKey="id"
        :data-source="data"
        :loading="loading"
        :pagination="false"
      >
        <template v-slot:name="text">
          <a-avatar :style="{ backgroundColor: '#507afe' }" shape="square">{{
            text.slice(0, 1)
          }}</a-avatar
          >&nbsp;
          <a target="_blank" href="https://open.mingyuanyun.com">{{ text }}</a>
        </template>
        <template v-slot:status="text">
          <a-tag :color="['green', 'orange', 'blue', 'red'][text]">
            状态{{ text }}
          </a-tag>
        </template>
        <template v-slot:action="record">
          <a href="javascript:;" @click="handleEdit(record)">编辑</a>
          <a-divider type="vertical" />
          <a href="javascript:;" @click="handleDel(record)">删除</a>
          <a-divider type="vertical" />
          <a-dropdown>
            <a href="javascript:;">更多 <a-icon type="down" /> </a>
            <a-menu slot="overlay">
              <a-menu-item>
                <a href="javascript:;">复制</a>
              </a-menu-item>
              <a-menu-item>
                <a href="javascript:;">详情</a>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </template>
      </a-table>
    </template>
    <template #footer-left> 共{{ total }}条 </template>
    <template #footer-right>
      <a-pagination
        :total="total"
        v-model="pageIndex"
        :page-size="pageSize"
        :default-current="1"
        @change="handlePageChange"
        show-size-changer
        @showSizeChange="handlePageSizeChange"
      />
    </template>
  </PageWrapper>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import PageWrapper from '@/layouts/PageWrapper.vue'
import { Obj } from '@/types/common.d'

@Component({
  components: { PageWrapper }
})
export default class List extends Vue {
  columns = [
    {
      title: '链接',
      width: 200,
      dataIndex: 'name',
      scopedSlots: { customRender: 'name' }
    },
    {
      title: '日期',
      width: 120,
      dataIndex: 'date',
      sorter: (a: Obj, b: Obj) => (new Date(a.date) > new Date(b.date) ? 1 : -1)
    },
    {
      title: '时间',
      dataIndex: 'datetime'
    },
    {
      title: '文本',
      dataIndex: 'text'
    },
    {
      title: '长文本',
      ellipsis: true,
      dataIndex: 'long_text'
    },
    {
      title: '状态',
      dataIndex: 'status',
      width: 100,
      scopedSlots: { customRender: 'status' }
    },
    {
      title: '操作',
      scopedSlots: { customRender: 'action' }
    }
  ]

  created() {
    this.getList()
  }

  pageIndex = 1
  pageSize = 20
  total = 0
  data = []
  loading = false
  async getList() {
    this.loading = true
    const res = await this.$http.post('/list/page', {
      page: this.pageIndex,
      page_size: this.pageSize
    })
    this.loading = false
    this.data = res.data.data.records
    this.total = res.data.data.total
  }

  handlePageChange() {
    this.getList()
  }

  handlePageSizeChange() {
    this.getList()
  }

  handleEdit(row: Obj) {
    console.log(row)
  }

  handleDel(row: Obj) {
    console.log(row)
  }
}
</script>
