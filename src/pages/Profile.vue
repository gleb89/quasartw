<template>
  <div>
    <h3>Olá {{ getMe.email }}</h3>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
...mapGetters('auth', ['getMe']),

  },
}
</script>
