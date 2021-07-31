<template>
  <div class="flex flex-col items-center p-8 gap-8">
    <input type="text" placeholder="账号" class="px-8 py-4 bg-gray-200 w-96" />
    <input
      type="password"
      placeholder="请输入密码"
      class="px-8 py-4 bg-gray-200 w-96"
    />
    <input
      type="password"
      placeholder="再次输入密码"
      class="px-8 py-4 bg-gray-200 w-96"
    />
    <button class="bg-blue-500 text-white px-8 py-4 w-96 active:bg-blue-600">
      注册
    </button>
    <p class="text-gray-400 text-md">
      已有账号？
      <span
        class="
          text-blue-500
          cursor-pointer
          px-4
          py-2
          hover:bg-gray-100
          select-none
        "
        @click="change"
        >登录</span
      >
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  methods: {
    change() {
      this.$emit("changeStatus");
    },
  },
});
</script>