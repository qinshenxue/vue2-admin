<template>
  <PageWrapper showFilter>
    <template #filter-left>
      <a-space :size="12">
        <a-select :default-value="0" style="width: 180px">
          <a-select-option :value="0"> 状态0 </a-select-option>
          <a-select-option :value="1"> 状态1 </a-select-option>
          <a-select-option :value="2"> 状态2 </a-select-option>
          <a-select-option :value="3"> 状态3 </a-select-option>
        </a-select>
        <a-date-picker />
      </a-space>
    </template>

    <template #filter-right>
      <a-dropdown>
        <div>下拉筛选 <a-icon type="down" /></div>
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

    <template #header-right>
      <a-space :size="10">
        <a-input-search placeholder="请输入搜索关键字" />
        <a-divider style="font-size: 24px" type="vertical" />
        <a-button type="primary">导出</a-button>
      </a-space>
    </template>

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
export default class ListWithFilter extends Vue {
  columns = [
    {
      title: '链接',
      dataIndex: 'name',
      scopedSlots: { customRender: 'name' }
    },
    {
      title: '日期',
      width: 120,
      dataIndex: 'date'
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
