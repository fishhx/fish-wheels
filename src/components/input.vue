<template>
  <div class="wrapper" :class="{error}">
    <input
      :value="value"
      type="text"
      :disabled="disabled"
      :readonly="readonly"
      @change="$emit('change', $event.target.value)"
      @input="$emit('input', $event.target.value)"
      @focus="$emit('focus', $event.target.value)"
      @blur="$emit('blur', $event.target.value)"
    />
    <template v-if="error">
      <icon name="error" class="icon-error"></icon>
      <span class="errorMessage">{{error}}</span>
    </template>
  </div>
</template>
<script>
import Icon from "./icon";

export default {
  components: { Icon },
  name: "GuluInput",
  props: {
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String
    }
  }
};
</script>
<style lang="scss" scoped>
$border-color-hover: #666;
$border-color: #999;
$border-color-light: lighten($border-color, 30%);
$border-radius: 4px;
$box-shadow-color: rgba(0, 0, 0, 0.5);
$button-active-bg: #eee;
$button-bg: white;
$button-height: 32px;
$color: #333;
$light-color: #666;
$font-size: 14px;
$small-font-size: 12px;
$input-height: 32px;
$red: #F1453D;
$grey: #eee;
$blue: #4a90e2;
.box-shadow {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

@mixin spin {
    animation: spin 2s infinite linear;
}
.wrapper {
  font-size: $font-size;
  display: inline-flex;
  align-items: center;
  > :not(:last-child) {
    margin-right: 0.5em;
  }
  > input {
    margin: 5px;
    height: 32px;
    border: 1px solid $border-color;
    border-radius: 4px;
    padding: 0 8px;
    font-size: inherit;
    &:hover {
      border-color: $border-color-hover;
    }
    &:focus {
      box-shadow: inset 0 1px 3px $box-shadow-color;
      outline: none;
    }
    &[disabled],
    &[readonly] {
      border-color: #bbb;
      color: #bbb;
      cursor: not-allowed;
    }
  }
  &.error {
    > input {
      border-color: $red;
    }
  }
  .icon-error {
    fill: $red;
  }
  .errorMessage {
    color: $red;
  }
}
</style>