<template>
  <div id="app">
    <MainMenu />
    <router-view/>
  </div>
</template>

<script>
import MainMenu from '@/components/MainMenu'

export default {
  components: { MainMenu }
}
</script>
