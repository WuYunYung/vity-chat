<template>
  <div class="w-full h-full flex">
    <nav class="w-96 border-r-2 h-full overflow-hidden flex flex-col">
      <div class="flex w-full p-6 gap-4 border-b-2">
        <input
          type="text"
          class="flex-1 bg-gray-200 rounded-full px-4 py-2"
          placeholder="搜索"
        />
        <button class="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full">
          新建
        </button>
      </div>
      <ul class="flex-1 overflow-y-auto w-full">
        <li
          v-for="item in 10"
          :key="item"
          class="
            border-b-2
            p-6
            flex
            items-center
            justify-between
            gap-4
            cursor-pointer
          "
        >
          <div>
            <i class="inline-block w-12 h-12 rounded-full bg-gray-200"></i>
          </div>
          <div class="flex-1 overflow-hidden">
            <h1 class="text-lg font-bold text-gray-800">Somebody</h1>
            <p
              class="
                whitespace-nowrap
                overflow-ellipsis overflow-hidden
                text-gray-500
              "
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
              explicabo atque quod laborum repellendus corrupti, sapiente iure
              at sint eos adipisci excepturi alias, nesciunt illum amet cum
              iusto unde? Recusandae?
            </p>
          </div>
          <span class="text-gray-400">{{
            new Date().toLocaleTimeString()
          }}</span>
        </li>
      </ul>
    </nav>
    <main class="flex-1 flex flex-col overflow-hidden">
      <div class="py-4 px-6 border-b-2 bg-gray-100 font-bold text-xl">
        To: Somebody
      </div>
      <div class="flex-1">内容</div>
      <div class="py-4 px-6 border-t-2 flex gap-4">
        <input
          type="text"
          class="flex-1 bg-gray-200 rounded-full px-4 py-2"
          placeholder="说点什么……"
        />
        <button class="bg-blue-500 text-white px-4 py-2 rounded-full">
          发送
        </button>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
});
</script>