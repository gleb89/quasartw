<template>
  <q-layout view="lHr LpR lFr">

    <q-header    elevated class="bg-white   text-black" height-hint="98">
      <q-toolbar >

        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" class="q-mx-md lt-md" />

        <q-toolbar-title>
          <q-avatar>
            <img src="~assets/quasar-logo-vertical.svg">
          </q-avatar>
          Статус

        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" class="q-mx-md lt-md" />
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <q-item-section class="q-py-md">
        <a href="/">
          <img src="~assets/quasar-logo-vertical.svg" alt="twitter_icon" width="40" class="q-ml-lg" />
        </a>
      </q-item-section>
      <!-- <img src="/icons/twitter.svg" alt="twitter_icon" /> -->

      <q-list  class="nav-left">
        <q-item to="/" clickable v-ripple exact>
          <q-item-section avatar>
            <q-icon name="home" size="sm"/>
          </q-item-section>
          <q-item-section class="text-h6 text-weight-bold">Главная</q-item-section>
        </q-item>
                <q-item to="/profile" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="person" size="sm"/>
          </q-item-section>
          <q-item-section class="text-h6 text-weight-bold">Профиль</q-item-section>
        </q-item>

        <!-- <q-item to="/explore" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="tag" size="sm"/>
          </q-item-section>
          <q-item-section class="text-h6 text-weight-bold">Explore</q-item-section>
        </q-item> -->

        <q-item to="/notifications" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="notifications_none" size="sm"/>
          </q-item-section>
          <q-item-section class="text-h6 text-weight-bold">Уведомления</q-item-section>
        </q-item>

        <q-item to="/messages" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="mail_outline" size="sm"/>
          </q-item-section>
          <q-item-section class="text-h6 text-weight-bold">Сообщения</q-item-section>
        </q-item>

        <q-item to="/bookmarks" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="bookmark_border" size="sm"/>
          </q-item-section>
          <q-item-section class="text-h6 text-weight-bold">Избранное</q-item-section>
        </q-item>

        <q-item to="/lists" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="list_alt" size="sm"/>
          </q-item-section>
          <q-item-section class="text-h6 text-weight-bold">Рекомендации</q-item-section>
        </q-item>




    </q-list>

    </q-drawer>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <SearchAccount />
    </q-drawer>

    <q-page-container>
       <q-btn icon="keyboard_backspace" round class="q-mx-md lt-md q-mt-sm"  size="sm" onclick="window.history.go(-1); return false;" />
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>

import { ref, reactive } from 'vue'
import SearchAccount from "../components/SearchAccount.vue"
import { useQuasar } from 'quasar'
export default  {
    components: {
    SearchAccount
  },
  setup () {
    const q = useQuasar()
    const leftDrawerOpen = ref(false)
    const rightDrawerOpen = ref(false)

    return {
      q,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },

      rightDrawerOpen,
      toggleRightDrawer () {
        rightDrawerOpen.value = !rightDrawerOpen.value
      }
    }
  }
}
</script>
