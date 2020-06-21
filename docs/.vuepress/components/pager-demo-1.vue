<template>
  <div style="padding-top: 16px;">
    <!-- <h2>简单用法</h2> -->
    <p>
      <strong>预览</strong>
    </p>
    <g-pager :total-page="20" :current-page.sync="currentPage"></g-pager>


    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import Pager from '../../../src/components/pager'

  export default {
    components: {
      'g-pager': Pager
    },
    data () {
      return {
        currentPage: 5,
        content: `
          currentPage: 5,
          <g-pager :total-page="20" :current-page.sync="currentPage"></g-pager>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>