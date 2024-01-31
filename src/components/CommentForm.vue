<script setup>
import { useCommentsStore } from '@/stores/comments'
import { ref } from 'vue'

const { addComment } = useCommentsStore()
const username = ref('')
const content = ref('')

function handleSubmit() {
  addComment({
    username: username.value,
    content: content.value
  })
}
</script>

<template>
  <div id="comment-form">
    <input v-model.trim="username" placeholder="Usuário" />
    <textarea v-model.trim="content" cols="30" rows="10" placeholder="Comentário"></textarea>
    <button @click="handleSubmit">Postar</button>
  </div>
</template>

<style scoped>
#comment-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
