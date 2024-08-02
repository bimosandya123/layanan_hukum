<template>
  <div class="blogPost">
    <quillEditor 
        v-model="content"
        ref="myQuillEditor"
        :options="editorOption"
    />
  </div>
</template>

<script>
import 'quill/dist/quill.snow.css'
import { quillEditor } from "vue-quill-editor"
// import { Buttin, input, Select } from "iview"
export default {
  components: {
    // button,
    // Input,
    // Select,
    quillEditor,
  },
  data : () =>({
    content: '',
    editorOption:{
        debug:'info',
        readOnly: false,
        theme: 'snow'
    }
  })
};
</script>

<style scoped>
</style>