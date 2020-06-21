<template>
  <div style="padding-top: 16px;">
    <!-- <h2>简单用法</h2> -->
    <p>
      <strong>预览</strong>
    </p>
    <g-button icon="left">Left</g-button>
    <g-button icon="settings">Setting</g-button>
    <g-button :loading="loading" @click="loading = !loading">Loading</g-button>
    <g-button disabled>Disabled</g-button>
    <g-button>More</g-button>
    <g-button icon="right" icon-position="right">Right</g-button>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
    <br />

    <h2>按钮组</h2>
    <p>
      <strong>预览</strong>
    </p>
    <g-button-group>
      <g-button icon="left">Left</g-button>
      <g-button>Button-group</g-button>
      <g-button icon="right">Right</g-button>
    </g-button-group>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content1}}</code></pre>
  </div>
</template>
<script>
import Button from "../../../src/components/button/button"
import ButtonGroup from "../../../src/components/button/button-group"

export default {
  components: {
    "g-button": Button,
    "g-button-group": ButtonGroup
  },
  data() {
    return {
      loading: true,
      content: `
        <g-button icon="left">Left</g-button>
        <g-button icon="settings">Setting</g-button>
        <g-button :loading="loading" @click="loading = !loading">Loading</g-button>
        <g-button disabled>Disabled</g-button>
        <g-button>More</g-button>
        <g-button icon="right" icon-position="right">Right</g-button>
      `
        .replace(/^ {8}/gm, "")
        .trim(),
      content1: `
        <g-button-group>
          <g-button icon="left">Left</g-button>
          <g-button>Button-group</g-button>
          <g-button icon="right">Right</g-button>
        </g-button-group>
        `
        .replace(/^ {8}/gm, "")
        .trim()
    }
  }
}
</script>