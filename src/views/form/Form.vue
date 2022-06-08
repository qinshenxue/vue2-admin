<template>
  <PageWrapper class="form">
    <a-form-model
      ref="ruleForm"
      :rules="rules"
      labelAlign="left"
      :model="form"
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
    >
      <h3>基本信息</h3>
      <a-row :gutter="24">
        <a-col :span="12">
          <a-form-model-item label="输入框" prop="input">
            <a-input v-model="form.input" />
          </a-form-model-item>
        </a-col>
        <a-col :span="12">
          <a-form-model-item label="下拉选项" prop="select">
            <a-select v-model="form.select" placeholder="please select">
              <a-select-option value="A"> A </a-select-option>
              <a-select-option value="B"> B </a-select-option>
              <a-select-option :value="1"> 1 </a-select-option>
            </a-select>
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row :gutter="24">
        <a-col :span="12">
          <a-form-model-item label="下拉多选">
            <a-select
              v-model="form.selectm"
              mode="multiple"
              placeholder="please select"
            >
              <a-select-option value="A"> A </a-select-option>
              <a-select-option value="B"> B </a-select-option>
              <a-select-option :value="1"> 1 </a-select-option>
            </a-select>
          </a-form-model-item>
        </a-col>
        <a-col :span="12">
          <a-form-model-item label="多个输入框">
            <a-row :gutter="12">
              <a-col :span="12">
                <a-select
                  v-model="form.select1"
                  placeholder="please select"
                >
                  <a-select-option value="A"> A </a-select-option>
                  <a-select-option value="B"> B </a-select-option>
                  <a-select-option :value="1"> 1 </a-select-option>
                </a-select></a-col
              >
              <a-col :span="12">
                <a-input v-model="form.input1" />
              </a-col>
            </a-row>
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row :gutter="24">
        <a-col :span="12">
          <a-form-model-item label="日期选择">
            <a-date-picker v-model="form.date" valueFormat="YYYY-MM-DD" />
          </a-form-model-item>
        </a-col>
        <a-col :span="12">
          <a-form-model-item label="时间选择">
            <a-time-picker
              v-model="form.time"
              valueFormat="HH:mm:ss"
            ></a-time-picker>
          </a-form-model-item>
        </a-col>
      </a-row>
      <h3>更多信息</h3>
      <a-row :gutter="24">
        <a-col :span="12">
          <a-form-model-item label="单选">
            <a-radio-group
              v-model="form.radio"
              name="radioGroup"
              :default-value="1"
            >
              <a-radio :value="1"> A </a-radio>
              <a-radio :value="2"> B </a-radio>
              <a-radio :value="3"> C </a-radio>
              <a-radio :value="4"> D </a-radio>
            </a-radio-group>
          </a-form-model-item>
        </a-col>
        <a-col :span="12">
          <a-form-model-item label="复选">
            <a-checkbox-group v-model="form.checkbox">
              <a-checkbox value="A"> A </a-checkbox>
              <a-checkbox value="B"> B </a-checkbox>
              <a-checkbox value="C"> C </a-checkbox>
              <a-checkbox value="D"> D </a-checkbox>
              <a-checkbox value="E"> E </a-checkbox>
            </a-checkbox-group>
          </a-form-model-item>
        </a-col>
      </a-row>
      <a-row :gutter="24">
        <a-col :span="12">
          <a-form-model-item label="多行文本">
            <a-textarea
              v-model="form.textarea"
              placeholder="textarea with clear icon"
              allow-clear
            />
          </a-form-model-item>
        </a-col>
        <a-col :span="12"></a-col>
      </a-row>
    </a-form-model>
    {{ form }}
  </PageWrapper>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import PageWrapper from '@/layouts/PageWrapper.vue'

@Component({
  components: { PageWrapper }
})
export default class Form extends Vue {
  labelCol = { span: 6 }
  wrapperCol = { span: 18 }

  rules = {
    input: [
      {
        required: true,
        message: 'Please input',
        trigger: 'blur'
      },
      { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
    ],
    select: [
      {
        required: true,
        message: 'Please select',
        trigger: 'change'
      }
    ]
  }

  form = {}
}
</script>
<style lang="less" scoped>
.form {
  /deep/ .page-body {
    padding: 20px;
    .ant-time-picker,
    .ant-calendar-picker {
      width: 100%;
    }
  }

  h3 {
    margin: 20px 0;
    font-size: 16px;
  }
}
</style>
