<template>
  <div style="padding-top: 16px;">
    <!-- <h2>简单用法</h2> -->
    <p>
      <strong>预览</strong>
    </p>
    <g-slides :selected.sync="selected">
      <g-slides-item name="1">
        <div class="box">1</div>
      </g-slides-item>
      <g-slides-item name="2">
        <div class="box">2</div>
      </g-slides-item>
      <g-slides-item name="3">
        <div class="box">3</div>
      </g-slides-item>
      <g-slides-item name="4">
        <div class="box">4</div>
      </g-slides-item>
    </g-slides>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import Slides from '../../../src/components/slides/slides'
  import SlidesItem from '../../../src/components/slides/slides-item'

  export default {
    components: {
      'g-slides': Slides, 
      'g-slides-item': SlidesItem
    },
    data () {
      return {
        selected: "1",
        content: `
          <g-slides :selected.sync="selected">
            <g-slides-item name="1">
              <div class="box">1</div>
            </g-slides-item>
            <g-slides-item name="2">
              <div class="box">2</div>
            </g-slides-item>
            <g-slides-item name="3">
              <div class="box">3</div>
            </g-slides-item>
            <g-slides-item name="4">
              <div class="box">4</div>
            </g-slides-item>
          </g-slides>

          data: {
            selected: '1'
          }

          <style lang="scss" scoped>
            .box{
              height: 300px;
              background: #aaa;
              color: white;
              font-size: 30px;
              display: flex;
              justify-content: center;
              align-items: center;
            } 
          </style>

      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>
<style lang="scss" scoped>
  .box{
    height: 300px;
    background: #aaa;
    color: white;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  } 
</style>
