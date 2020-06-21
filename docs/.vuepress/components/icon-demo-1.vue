<template>
  <div style="padding-top: 16px;">
    <!-- <h2>简单用法</h2> -->
    <p>
      <strong>预览</strong>
    </p>
      <g-icon :name="'left'"></g-icon>
      <g-icon :name="'settings'"></g-icon>
      <g-icon :name="'loading'"></g-icon>
      <g-icon :name="'right'"></g-icon>
      <g-icon :name="'error'"></g-icon>
      <g-icon :name="'upload'"></g-icon>
      <g-icon :name="'ellipsis'"></g-icon>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import Icon from '../../../src/components/icon'

  export default {
    components: {
      'g-icon': Icon
    },
    data () {
      return {
        content: `
          <g-icon :name="'left'"></g-icon>
          <g-icon :name="'settings'"></g-icon>
          <g-icon :name="'loading'"></g-icon>
          <g-icon :name="'right'"></g-icon>
          <g-icon :name="'error'"></g-icon>
          <g-icon :name="'upload'"></g-icon>
          <g-icon :name="'ellipsis'"></g-icon>
          
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>