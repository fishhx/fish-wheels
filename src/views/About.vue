<template>
  <div class="content">
    <div class="button">
      <h1>button</h1>
      <g-button icon="left">left</g-button>
      <g-button icon="settings">setting</g-button>
      <g-button :loading="loading" @click="loading = !loading">loading</g-button>
      <g-button disabled>disabled</g-button>
      <g-button>more</g-button>
      <g-button icon="right" icon-position="right">right</g-button>
      <br/>
      <br/>
      <g-button-group>
        <g-button icon="left">left</g-button>
        <g-button >button-group</g-button>
        <g-button icon="right">right</g-button>
      </g-button-group>
      <br />
    </div>
    <h1>Icon</h1>
    <g-icon :name="'left'"></g-icon>
    <g-icon :name="'settings'"></g-icon>
    <g-icon :name="'loading'"></g-icon>
    <g-icon :name="'right'"></g-icon>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true
    }
  }
};
</script>
<style lang="scss" scoped>
.button {
  .g-button {
    margin-left: 3px;
  }
}
.g-icon {
  margin: 0 3px;
}
</style>