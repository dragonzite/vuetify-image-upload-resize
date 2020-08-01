<template>
  <div id="app">
    <v-app>
      <v-container style="min-height: 50vh;">
        <v-row align="center" justify="center">
          <v-col cols="8">
            <v-card>
              <v-card-title>vuetify-image-upload-resize Demo</v-card-title>
              <image-uploader
                :append-icon="appendIcon"
                :append-outer-icon="appendOuterIcon"
                :auto-focus="autoFocus"
                :background-color="backgroundColor"
                :chips="chips"
                :clear-icon="clearIcon"
                :clearable="clearable"
                :color="color"
                :dark="dark"
                :loading="isLoading"
                :outlined="outlined"
                :prepend-icon="prependIcon"
                :preview="true"
                :image-position="imagePosition"
                :className="['fileinput', { 'fileinput--loaded': hasImage }]"
                :capture="false"
                :debug="1"
                doNotResize="gif"
                :autoRotate="true"
                :hint="hasImage ? 'Replace' : 'Upload'"
                :label="hasImage ? 'Replace' : 'Upload'"
                outputFormat="string"
                @input="setImage"
                @onUpload="startImageResize"
                @onComplete="endImageResize"
              >
              </image-uploader>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card>
              <v-card-title>Toggle Options to see effects.</v-card-title>
              <v-switch v-model="isAppendIcon" :label="'Append Icon'" />
              <v-switch v-model="isAppendOuterIcon" :label="'Append Outer Icon'" />
              <v-switch v-model="isAutoFocus" :label="'Auto Focus'" />
              <v-select :items="items" :label="'Background Color'" style="padding: 0 3px ;" @change="setBackgroundColor($event)" />
              <v-switch v-model="isChips" :label="'Chips'" />
              <v-switch v-model="isClearIcon" :label="'Clear Icon'" :disabled="!isClearable" />
              <v-switch v-model="isClearable" :label="'Clearable'" />
              <v-switch v-model="$vuetify.theme.dark" :label="!$vuetify.theme.dark ? 'Switch to Dark Theme' : 'Switch to Light Theme'" />
              <v-switch v-model="isOutlined" :label="'Outlined'"></v-switch>
              <v-switch v-model="isPrependIcon" :label="'Prepend Icon'" />
              <v-select :items="items" :label="'Color'" style="padding: 0 3px ;" @change="setColor($event)" />
              <v-switch v-model="isImagePosition" :label="isImagePosition ? 'Switch to image on bottom' : 'Switch to image on top'" />
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
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
      backgroundColor: '',
      color: undefined,
      hasImage: false,
      image: null,
      isLoading: false,
      isAppendIcon: false,
      isAppendOuterIcon: false,
      isAutoFocus: false,
      isChips: false,
      isClearIcon: false,
      isClearable: true,
      isDark: false,
      isOutlined: false,
      isPrependIcon: false,
      isImagePosition: true,
      items: [null, 'primary', 'success', 'accent', 'orange', '#f0f00f', 'rgba(157,0,157)'],
    }
  },
  computed: {
    appendIcon() {
      if (this.isAppendIcon) {
        return 'mdi-camera'
      }
      return ''
    },
    appendOuterIcon() {
      if (this.isAppendOuterIcon) {
        return 'mdi-camera'
      }
      return ''
    },
    autoFocus() {
      if (this.isAutoFocus) {
        return true
      }
      return false
    },
    chips() {
      if (this.isChips) {
        return true
      }
      return false
    },
    clearIcon() {
      if (this.isClearIcon) {
        return 'mdi-trash-can-outline'
      }
      return '$clear'
    },
    clearable() {
      if (this.isClearable) {
        return true
      }
      return false
    },
    dark() {
      if (this.$vuetify.theme.dark) {
        return true
      }
      return false
    },
    prependIcon() {
      if (this.isPrependIcon) {
        return 'mdi-camera'
      }
      return ''
    },
    outlined() {
      if (this.isOutlined) {
        return true
      }
      return false
    },
    imagePosition() {
      if (this.isImagePosition) {
        return true
      }
      return false
    },
  },
  methods: {
    startImageResize() {
      this.isLoading = true
    },
    endImageResize() {
      this.isLoading = false
    },
    setImage: function(output) {
      this.isLoading = true
      this.hasImage = true
      this.image = output
      this.isLoading = false
    },

    setBackgroundColor(e) {
      this.backgroundColor = e
    },
    setColor(e) {
      this.color = e
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
