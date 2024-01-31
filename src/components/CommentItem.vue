<template>
  <p>
    <b>{{ username }}:</b> {{ content }}
  </p>
</template>

<script>
export default {
  props: {
    username: String,
    content: String
  }
}
</script>
