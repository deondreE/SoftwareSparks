<template>
  <div className="sidebar">
    <div classname="sidebar-inside">
      <h1>File Structure</h1>
      <!-- File Item -->
      <file-item-vue />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FileItemVue from './FileItem.vue';

export default defineComponent({
  name: 'SideBar',
  components: {
    FileItemVue,
  },
});
</script>

<style lang="scss">
.sidebar {
  background-color: #2c3e50;
  color: #fff;
  height: 36vh;
  width: auto;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  padding: 2em;
}

.sidebar-inside {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
}
</style>
