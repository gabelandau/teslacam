<template>
  <div class="file is-boxed">
    <label class="file-label">
      <input class="file-input" type="file" ref="uploaded_folder" @change="folderUploaded" webkitdirectory directory multiple>
      <span class="file-cta">
        <span class="file-icon">
          <i class="fas fa-upload"></i>
        </span>
        <span class="file-label">
          Choose a folder...
        </span>
      </span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'FileBrowser',
  methods: {
    folderUploaded: function () {
      console.log(this.$refs.uploaded_folder.files)
    }
  }
}
</script>
