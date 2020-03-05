<template>
  <div id="app">
    <image-uploader
      :preview="true"
      :className="['fileinput', { 'fileinput--loaded': hasImage }]"
      :capture="false"
      :debug="1"
      doNotResize="gif"
      :autoRotate="true"
      :hint="hasImage ? 'Replace' : 'Upload'"
      :label="hasImage ? 'Replace' : 'Upload'"
      outputFormat="string"
      @input="setImage"
    >
    </image-uploader>
  </div>
</template>

<script>
import ImageUploader from './components/ImageUploader.vue'

export default {
  name: 'app',
  components: {
    ImageUploader,
  },
  data() {
    return {
      hasImage: false,
      image: null,
      isLoading: false,
    }
  },
  methods: {
    setImage: function(output) {
      this.isLoading = true
      this.hasImage = true
      this.image = output
      this.isLoading = false
    },
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#fileInput {
  display: none;
}
</style>
