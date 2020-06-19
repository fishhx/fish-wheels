<template>
  <div class="content">
    <div class="button">
      <h1>Button</h1>
      <g-button icon="left">Left</g-button>
      <g-button icon="settings">Setting</g-button>
      <g-button :loading="loading" @click="loading = !loading">Loading</g-button>
      <g-button disabled>Disabled</g-button>
      <g-button>More</g-button>
      <g-button icon="right" icon-position="right">Right</g-button>
    </div>
    <h3>ButtonGroup</h3>
    <g-button-group>
      <g-button icon="left">Left</g-button>
      <g-button>Button-group</g-button>
      <g-button icon="right">Right</g-button>
    </g-button-group>

    <div class="icon">
      <h1>Icon</h1>
      <g-icon :name="'left'"></g-icon>
      <g-icon :name="'settings'"></g-icon>
      <g-icon :name="'loading'"></g-icon>
      <g-icon :name="'right'"></g-icon>
      <g-icon :name="'error'"></g-icon>
      <g-icon :name="'info'"></g-icon>
    </div>
    <div class="input">
      <h1>Input</h1>
      <!-- <g-input></g-input> -->
      <g-input value="Value" @change="inputChange"></g-input>
      <g-input value="Disabled" disabled></g-input>
      <g-input value="Readonly" readonly></g-input>
      <br />
      <g-input value="Error" error="Cannot be less than 2 words"></g-input>
      <h3>Bi-directional data binding</h3>
      <g-input v-model="value"></g-input>
      <p>Value: {{value}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      value: "Bi-direction"
    };
  },
  methods: {
    inputChange(e) {
      console.log(e);
    }
  }
};
</script>
<style lang="scss" scoped>
.button {
  // margin-bottom: 100px;
  .g-button {
    margin: 0 3px;
  }
}
.g-icon {
  margin: 0 3px;
}
.g-input {
}
</style>