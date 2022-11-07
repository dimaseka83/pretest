<script lang="ts">
    import navigation from '../../components/navigation.vue'
    import mixins from '../../mixins/mix'
    import {
      defineComponent
    } from 'vue'

    export default defineComponent({
      components: {
        navigation
      },
      methods: {
        getLastMessage(message: Array < any > ) {
        return message[message.length - 1].text
      },
      getLastMessageTime(message: Array < any > ) {
        return this.timeHuman(message[message.length - 1].time)
      },
      getIsNewMessageTrue(message: Array < any > ) {
        let count = 0
        message.forEach((item: any) => {
          if (item.isNew) {
            count++
          }
        })
        return count
      },
      detailChat(id: number) {
        this.$router.push({
          name: 'ChatDetail',
          params: {
            id
          }
        })
      }
      },
      mixins: [mixins],
      computed: {
        searchChat() {
        if(this.store.search !== ''){
          if(this.chats.find((chat: any) => chat.name.toLowerCase().includes(this.store.search.toLowerCase()))){
            return this.chats.filter((chat: any) => chat.name.toLowerCase().includes(this.store.search.toLowerCase()))
          }else{
            return []
          }
        }
        return this.chats
      }
      }
    })

</script>

<script lang="ts" setup>
import { useStore } from '../../store'
  const store = useStore()
</script>
<template>
  <div class="h-screen dark:bg-gray-600">
    <navigation></navigation>
      <div class="p-4 bg-white border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div v-if="searchChat.length > 0">
          <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700" v-for="(chat, key) in searchChat" :key="key">
            <li class="py-3 sm:py-4" @click="detailChat(chat.id)">
              <div class="flex items-center space-x-4">
                <div class="flex-shrink-0">
                  <img class="w-8 h-8 rounded-full" :src="chat.image"
                    alt="Neil image">
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {{ chat.name }}
                  </p>
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    {{ getLastMessage(chat.message) }}
                  </p>
                </div>
                <div class="flex-2 items-center text-base font-semibold text-gray-900 dark:text-white">
                  <span class="bg-blue-100 w-5 h-5 mb-1 text-blue-800 text-sm font-semibold inline-flex items-center p-1.5 rounded-full dark:bg-blue-200 dark:text-blue-800">
                    {{ getIsNewMessageTrue(chat.message) }}
                    <span class="sr-only">Icon description</span>
                  </span>
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">{{ getLastMessageTime(chat.message) }}</p>
                </div>
              </div>
            </li>
          </ul>
          </div>
          <p v-else class="text-sm text-center font-medium text-gray-900 truncate dark:text-white">No results found</p>
      </div>
    </div>
</template>