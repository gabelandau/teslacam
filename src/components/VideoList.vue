<template>
  <div>
    <div class="columns">
      <div class="column">
        <nav class="panel video-list">
          <p class="panel-heading">Events</p>
          <p class="panel-tabs">
            <a class="is-active">All</a>
            <a>Sentry Cam</a>
            <a>Dash Cam</a>
          </p>
          <div class="panel-content">
            <a class="panel-block is-active" v-for="event in events" :key="event.name" @click="selectEvent(event)">{{event.name}}</a>
          </div>
        </nav>
      </div>
      <div class="column">
        <nav class="panel video-list">
          <p class="panel-heading">Timestamps</p>
          <div class="panel-content">
            <span v-if="timestamps">
              <a class="panel-block is-active" v-for="timestamp in timestamps" :key="timestamp.name">{{timestamp.name}}</a>
            </span>
            <span class="panel-block is-active" v-else>Choose an event...</span>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoList',
  props: ['events'],
  data () {
    return {
      timestamps: null
    }
  },
  methods: {
    selectEvent (event) {
      this.timestamps = event.timestamps
      console.log(event.timestamps)
    }
  }
}
</script>

<style lang="scss" scoped>
.columns {
  margin-top: 20px;
}

.panel-content {
  max-height: 300px;
  overflow: scroll;
}
</style>
