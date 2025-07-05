<template>
  <UContainer>
    <UCard>
        <h2 class="text-lg font-bold">Reading List</h2>
        <form @submit.prevent="addBook">
        
        <UInput v-model="title" placeholder="Book Title" required />
        <UInput v-model="author" placeholder="Author" required />
        <UButton type="submit" style="margin-top: 12px;">Add</UButton>
        </form>
        <div>
        <div v-for="book in books" :key="book.id">
            <span>{{ book.title }} by {{ book.author }}</span>
            <input type="checkbox" :checked="book.is_read" @change="toggleRead(book)" />
            <UButton @click="removeBook(book.id)" color="red">Delete</UButton>
        </div>
    </div>
    </UCard>
  </UContainer>
</template>

<script setup>
const title = ref('')
const author = ref('')
const books = ref([])

async function fetchBooks() {
    books.value = await $fetch('/api/books')
}

async function addBook() {
    await $fetch('/api/books', {
        method: 'POST',
        body: { title: title.value, author: author.value }
    })
    title.value = ''
    author.value = ''
    fetchBooks()
}

async function toggleRead(book) {
    const newStatus = book.is_read ? 0 : 1
    await $fetch(`/api/books/${book.id}`, {
        method: 'PUT',
        body: { is_read: newStatus }
  })
  fetchBooks()
}


async function removeBook(id) {
    console.log("Deleting book with id:", id)
  
    await $fetch(`/api/books/${id}`, {
    method: 'DELETE'
  })
  fetchBooks()
}

onMounted(fetchBooks)
</script>