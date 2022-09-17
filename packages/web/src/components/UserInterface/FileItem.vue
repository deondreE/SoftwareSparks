<template>
  <div id="fileItem">
    <button type="button">
      <img className="fileIcon" alt="Vue logo" />
      <span className="fileName">{{ fileName }}</span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FileItem',
  props: {
    fileName: {
      type: String,
      required: true,
      default: 'FileName.js',
    },
  },
  onMounted() {
    window.addEventListener('keypress', this.onKeyPress);
  },
  setup() {
    const onKeyPress = (e: any) => {
      const cmd: string = String.fromCharCode(e.keyCode).toLowerCase();
      return cmd;
    };

    return {
      onKeyPress,
    };
  },
});
</script>

<style lang="scss">
.fileName {
  font-size: 1.5em;
  font-weight: bold;
  color: #000;
  margin-left: 1em;
}

.fileIcon {
  width: 2em;
  height: 2em;
}

.fileItem {
  display: flex;
  align-items: center;
  margin: 1em 0;
}
</style>
