import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCommentsStore = defineStore('comments', () => {
  const comments = ref([])

  function addComment(comment) {
    comments.value.push(comment)
  }

  return { comments, addComment }
})
