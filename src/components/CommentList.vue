<script setup>
import { useCommentsStore } from '@/stores/comments'
import CommentItem from './CommentItem.vue'

const { comments } = useCommentsStore()
</script>

<template>
  <div v-for="{ username, content } in comments" v-bind:key="username">
    <CommentItem :username="username" :content="content" />
  </div>
</template>
