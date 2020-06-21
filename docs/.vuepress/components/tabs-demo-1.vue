<template>
  <div style="padding-top: 16px;">
    <!-- <h2>简单用法</h2> -->
    <p>
      <strong>预览</strong>
    </p>
    <g-tabs :selected="selected">
        <g-tabs-head>
          <g-tabs-item name="1">Tab1</g-tabs-item>
          <g-tabs-item name="2">Tab2</g-tabs-item>
          <g-tabs-item name="3">Tab3</g-tabs-item>
        </g-tabs-head>
        <g-tabs-body>
          <g-tabs-pane name="1">Content 1</g-tabs-pane>
          <g-tabs-pane name="2">Content 2</g-tabs-pane>
          <g-tabs-pane name="3">Content 3</g-tabs-pane>
        </g-tabs-body>
      </g-tabs>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import Tabs from '../../../src/components/tabs/tabs'
  import TabsBody from '../../../src/components/tabs/tabs-body'
  import TabsHead from '../../../src/components/tabs/tabs-head'
  import TabsItem from '../../../src/components/tabs/tabs-item'
  import TabsPane from '../../../src/components/tabs/tabs-pane'

  export default {
    components: {
      'g-tabs':Tabs, 
      'g-tabs-body':TabsBody, 
      'g-tabs-head':TabsHead, 
      'g-tabs-item':TabsItem, 
      'g-tabs-pane':TabsPane},
    data () {
      return {
        selected: '1',
        content: `
          data:{
            selected: '1'
          },
          <g-tabs :selected="selected">
            <g-tabs-head>
              <g-tabs-item name="1">tab1</g-tabs-item>
              <g-tabs-item name="2">tab2</g-tabs-item>
              <g-tabs-item name="3">tab3</g-tabs-item>
            </g-tabs-head>
            <g-tabs-body>
              <g-tabs-pane name="1">content 1</g-tabs-pane>
              <g-tabs-pane name="2">content 2</g-tabs-pane>
              <g-tabs-pane name="3">content 3</g-tabs-pane>
            </g-tabs-body>
          </g-tabs>

      `
      .replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>