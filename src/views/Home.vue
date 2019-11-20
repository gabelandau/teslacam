<template>
  <div class="home">
    <h1 class="title is-1">TeslaCam Viewer</h1>
    <FileBrowser v-if="!events" />
    <VideoList v-if="events" v-bind:events="events" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import FileBrowser from '@/components/FileBrowser'
import VideoList from '@/components/VideoList'

export default {
  name: 'home',
  components: { FileBrowser, VideoList },
  computed: {
    ...mapGetters(['events'])
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 80%;
  max-width: 1000px;
  margin: 0 auto;
}

h1 {
  margin-top: 15px;
  margin-bottom: 0 !important;
}
</style>
