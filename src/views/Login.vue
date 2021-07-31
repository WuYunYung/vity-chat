<template>
  <div class="flex flex-col items-center p-8 gap-8">
    <input type="text" placeholder="账号" class="px-8 py-4 bg-gray-200 w-96" />
    <input
      type="password"
      placeholder="密码"
      class="px-8 py-4 bg-gray-200 w-96"
    />
    <label
      class="
        self-start
        px-4
        py-2
        flex
        items-center
        gap-2
        select-none
        hover:bg-gray-100
      "
    >
      <input type="checkbox" class="w-6 h-6" />保持登录
    </label>
    <button class="bg-blue-500 active:bg-blue-600 text-white px-8 py-4 w-96 active:bg-blue-600">
      登录
    </button>
    <p class="text-gray-400 text-md">
      还未注册账号？
      <span
        class="
          text-blue-500
          cursor-pointer
          inline-block
          px-4
          py-2
          hover:bg-gray-100
          select-none
        "
        @click="change"
        >立即注册</span
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