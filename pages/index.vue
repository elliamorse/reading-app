<template>
  <div class="p-6 space-y-6 max-w-2xl mx-auto">
    <h1 class="text-3xl font-bold">📚 My Reading List</h1>

    <UCard>
      <UForm @submit.prevent="addBook" class="space-y-4">
        <UInput v-model="newTitle" placeholder="Book title" required />
        <UInput v-model="newAuthor" placeholder="Author" required />
        <UButton type="submit">Add Book</UButton>
      </UForm>
    </UCard>

    <div v-if="bookList.length === 0" class="text-gray-500">No books yet. Add your first one!</div>

    <BookItem
      v-for="book in bookList"
      :key="book.id"
      :book="book"
      @refresh="fetchBooks"
    />
  </div>
</template>

<script setup>
import BookItem from '~/components/BookItem.vue'

const newTitle = ref('')
const newAuthor = ref('')
const bookList = ref([])

const fetchBooks = async () => {
  bookList.value = await $fetch('/api/books')
}

const addBook = async () => {
  await $fetch('/api/books', {
    method: 'POST',
    body: {
      title: newTitle.value,
      author: newAuthor.value
    }
  })
  newTitle.value = ''
  newAuthor.value = ''
  fetchBooks()
}

onMounted(fetchBooks)
</script>