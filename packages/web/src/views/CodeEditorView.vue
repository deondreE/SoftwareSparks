<template>
  <div class="editor">
    <side-bar-vue />
    <codemirror
      v-model="code"
      placeholder="Code goes here..."
      :style="{ height: '400px' }"
      :indent-with-tab="true"
      :tab-size="2"
      :extensions="extensions"
      @ready="handleReady"
      @change="log('change', $event)"
      @focus="log('focus', $event)"
      @blur="log('blur', $event)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, shallowRef } from 'vue';
import { Codemirror } from 'vue-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark';
import SideBarVue from '@/components/UserInterface/SideBar.vue';

export default defineComponent({
  // set theme code

  components: {
    Codemirror,
    SideBarVue,
  },
  setup() {
    const code = ref('console.log(\'Hello, world!\')');
    const extensions = [javascript(), oneDark];

    // Codemirror EditorView instance ref
    const view = shallowRef();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleReady = (payload: any) => {
      view.value = payload.view;
    };

    const setTheme = (theme: string) => {
      console.log(theme);
    };

    return {
      setTheme,
      code,
      extensions,
      handleReady,
      log: console.log,
    };
  },
});
</script>

<style>
.editor {
  text-align: left !important;
}
</style>
