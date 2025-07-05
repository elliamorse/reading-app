<template>
  <UCard>
    <div class="flex justify-between items-center">
      <div>
        <h3 class="font-semibold">{{ book.title }}</h3>
        <p class="text-sm text-gray-600">by {{ book.author }}</p>
        <p class="text-xs">Status: {{ book.is_read ? '✔️ Read' : '📖 Unread' }}</p>
      </div>
      <div class="flex items-center gap-2">
        <UToggle v-model="localStatus" @change="toggleStatus" />
        <UButton color="red" @click="removeBook">Delete</UButton>
      </div>
    </div>
  </UCard>
</template>

<script setup>

import { ref } from 'vue'
const props = defineProps(['book'])
const emit = defineEmits(['refresh'])
const localStatus = ref(!!props.book.is_read)

const toggleStatus = async () => {
  await $fetch(`/api/books/${props.book.id}`, {
    method: 'PUT',
    body: { is_read: localStatus.value ? 1 : 0 }
  })
  emit('refresh')
}

const removeBook = async () => {
  await $fetch(`/api/books/${props.book.id}`, { method: 'DELETE' })
  emit('refresh')
}

</script>