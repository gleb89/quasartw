<template>
  <div class="q-pa-md">
    <div class="q-gutter-md row">

      <q-select
        standout
        rounded
        v-model="model"
        use-input
        input-debounce="0"
        label="Найти акаунт"
        :options="options"
        @filter="filterFn"
        style="width: 250px"
        behavior="dialog"
      >
        <template v-slot:no-option>
          <q-item>
            <q-item-section class="text-grey">
              Ничего не найдено
            </q-item-section>
          </q-item>
        </template>
      </q-select>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

const stringOptions = [
  'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
]

export default {
  watch: {
    model(value) {
      this.$router.push({ path: '/login' })
    },
  },
  setup () {
    const options = ref(stringOptions)

    return {
      model: ref(null),
      stringOptions,
      options,
        OnOpen(){
          console.log(123);

        },
      filterFn (val, update) {
        if (val === '') {
          update(() => {
            options.value = stringOptions
          })
          return
        }

        update(() => {
          const needle = val.toLowerCase()
          options.value = stringOptions.filter(v => v.toLowerCase().indexOf(needle) > -1)
        })
      }
    }
  }
}
</script>
