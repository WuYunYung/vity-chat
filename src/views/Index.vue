<template>
  <div class="h-full w-full flex justify-center bg-gray-200">
    <div>
      <h1 class="text-center p-8 text-5xl text-gray-400 mt-48">摸鱼坊</h1>
      <div
        class="
          max-w-md
          bg-white
          flex flex-col
          items-center
          text-xl
          transition-all
          shadow-lg
        "
      >
        <nav class="h-16 bg-gray-300 w-full">
          <ul class="flex h-full">
            <li
              class="flex-1 flex justify-center items-center"
              :class="{
                'bg-white': active,
              }"
              @click="onNavClick(true)"
            >
              登录
            </li>
            <li
              class="flex-1 flex justify-center items-center"
              :class="{
                'bg-white': !active,
              }"
              @click="onNavClick(false)"
            >
              注册
            </li>
          </ul>
        </nav>
        <keep-alive>
          <component
            :is="module"
            @change-status="onNavClick(!active)"
          ></component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { shallowRef, defineComponent } from "vue";
import login from "./Login.vue";
import signin from "./Signin.vue";

const sr_login = shallowRef(login);
const sr_signin = shallowRef(signin);

export default defineComponent({
  name: "Home",
  data: () => ({
    active: true,
    module: sr_login,
  }),
  methods: {
    onNavClick(bool: boolean) {
      this.active = bool;
      this.module = bool ? sr_login : sr_signin;
    },
  },
});
</script>