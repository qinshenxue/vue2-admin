<template>
  <div class="login">
    <div class="qrcode-wrap">
      <div class="qrcode-content">
        <img src="@/assets/images/login/qrcode.jpg" />
        <div class="qrcode-mask"></div>
      </div>
      <div class="tooltip">
        <span>扫一扫更了解我们！</span>
      </div>
    </div>
    <div class="login-left">
      <div class="login-bg"></div>
    </div>
    <div class="login-right">
      <div class="login-main">
        <div class="login-logo">
          <img src="@/assets/images/login/tianji-logo.png" alt="" />
          明源云·天际
        </div>
        <div class="slogan">欢迎进入XX开放平台</div>

        <div class="login-form">
          <a-alert
            class="login-error"
            v-if="errMsg"
            :message="errMsg"
            type="error"
            show-icon
          />
          <a-form class="login-form" @submit="handleSubmit">
            <a-form-item>
              <a-input
                v-model="form.username"
                size="large"
                placeholder="用户名"
              >
                <a-icon slot="prefix" type="user" class="input-icon" />
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-input
                v-model="form.passowrd"
                size="large"
                type="password"
                placeholder="密码"
              >
                <a-icon slot="prefix" type="lock" class="input-icon" />
              </a-input>
            </a-form-item>

            <a-form-item>
              <a-button
                type="primary"
                html-type="submit"
                class="login-form-button"
                size="large"
              >
                登录
              </a-button>
            </a-form-item>
            <a-form-item>
              <div class="form-row">
                <a-checkbox> 记住用户名 </a-checkbox>
                <a class="login-form-forgot" href="javascript:;"> 忘记密码 </a>
              </div>
            </a-form-item>
          </a-form>
        </div>
      </div>
      <div class="login-footer">
        Copyright © 2021 明源云 版权所有 粤ICP备88888888号
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
@Component
export default class Login extends Vue {
  form = {
    username: '',
    passowrd: ''
  }

  errMsg = ''

  //   @Watch('form', { deep: true })
  //   onFormChange() {
  //     this.errMsg = ''
  //   }

  handleSubmit(e: Event) {
    e.preventDefault()
    this.errMsg = ''
    if (!this.form.username || !this.form.passowrd) {
      this.errMsg = '请输入用户名和密码'
    }
  }
}
</script>
<style lang="less" scoped>
@import './login.less';
</style>
