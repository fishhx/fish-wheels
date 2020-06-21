<template>
  <div style="padding-top: 16px;">
    <!-- <h2>简单用法</h2> -->
    <p>
      <strong>预览</strong>
    </p>
    <g-input value="Value"></g-input>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
    <br />

    <h2>特殊状态</h2>
    <p>
      <strong>预览</strong>
    </p>
    <g-input value="Disabled" disabled></g-input>
    <g-input value="Readonly" readonly></g-input>
    <g-input value="Error" error="errorInfo"></g-input>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content1}}</code></pre>
    <br>

    <h2>双向数据绑定</h2>
     <p>
      <strong>预览</strong>
    </p>
    <g-input v-model="value"></g-input>
    <p>value: {{value}}</p>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content2}}</code></pre>
    
  </div>
</template>
<script>
import Input from "../../../src/components/input"
export default {
  components: {
    "g-input": Input
  },
  data() {
    return {
      value: 'Bi-direction',
      content: `
        <g-input value="Value""></g-input>
      `
        .replace(/^ {8}/gm, "")
        .trim(),
      content1: `
        <g-input value="Disabled" disabled></g-input>
        <g-input value="Readonly" readonly></g-input>
        <g-input value="Error" error="errorInfo"></g-input>
    `
        .replace(/^ {8}/gm, "")
        .trim(),
      content2: `
        <g-input v-model="value"></g-input>
        <p>Value: {{value}}</p>
    `
        .replace(/^ {8}/gm, "")
        .trim()
    }
  }
};
</script>
