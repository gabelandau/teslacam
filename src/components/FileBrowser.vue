<template>
  <div>
    <p>To get started, upload the TeslaCam folder from your computer. All of the video files will be loaded for viewing. However, nothing is uploaded to a server, the files never leave your computer.</p>
    <div class="file is-boxed is-centered is-fullwidth">
      <label class="file-label">
        <input class="file-input" type="file" ref="uploaded_folder" @change="folderUploaded" webkitdirectory directory multiple>
        <span class="file-cta">
          <span class="file-icon">
            <i class="fas fa-upload"></i>
          </span>
          <span class="file-label">Choose a folder...</span>
        </span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FileBrowser',
  methods: {
    folderUploaded: function () {
      this.$store.commit('setEvents', this.$refs.uploaded_folder.files)
    }
  }
}
</script>

<style lang="scss" scoped>
.file-label {
  text-align: center;
}

p {
  margin-top: 30px;
  margin-bottom: 15px;
}
</style>
