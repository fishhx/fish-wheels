<template>
  <div class="g-pager">
    <span class="pager-item direction" @click="turnLast">
      <g-icon :name="'left'"></g-icon>
    </span>
    <template v-for="page in pages">
      <template v-if="page===currentPage">
        <span class="pager-item" :class="{selected:page===currentPage}" :data-page="page">{{page}}</span>
      </template>
      <template v-else-if="page==='...'">
        <span class="pager-item" :class="{separator:page==='...'}">
          <g-icon :name="'ellipsis'"></g-icon>
        </span>
      </template>
      <template v-else>
        <span class="pager-item" @click="onClickPage(page)" :data-page="page">{{page}}</span>
      </template>
    </template>
    <span class="pager-item direction" @click="turnNext">
      <g-icon :name="'right'"></g-icon>
    </span>
  </div>
</template>

<script>
import GIcon from "./icon";

export default {
  name: "GuluPager",
  components: { GIcon },
  props: {
    totalPage: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    }
  },
  computed: {
    pages() {
      let pages = [1, this.totalPage, this.currentPage];
      if (this.currentPage > 1) pages.push(this.currentPage - 1);
      if (this.currentPage > 2) pages.push(this.currentPage - 1);
      if (this.currentPage < this.totalPage) pages.push(this.currentPage + 1);
      if (this.currentPage < this.totalPage - 1)
        pages.push(this.currentPage + 2);

      let u = unique(pages.sort((a, b) => a - b));
      let u2 = u.reduce((pre, current, index) => {
        pre.push(current);
        if (u[index + 1] && u[index + 1] - u[index] > 1) {
          pre.push("...");
        }
        return pre;
      }, []);
      return u2;
    }
  },
  methods: {
    onClickPage(page) {
      this.updateCurrentPage(page);
    },
    turnNext() {
      if (this.currentPage < this.totalPage) {
        this.updateCurrentPage(this.currentPage + 1);
      }
    },
    turnLast() {
      if (this.currentPage > 1) {
        this.updateCurrentPage(this.currentPage - 1);
      }
    },
    updateCurrentPage(currentPage) {
      this.$emit("update:currentPage", currentPage);
    }
  }
};

// 去重
function unique(array) {
  const object = {};
  array.map(number => {
    object[number] = true;
  });
  return Object.keys(object).map(s => parseInt(s, 10));
}
</script>

<style scoped lang="scss">
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
$red: #f1453d;
$grey: #eee;
$blue: #4a90e2;
.box-shadow {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
}

.g-pager {
  display: flex;
  flex-direction: row;
  margin: 0 auto;

  > .pager-item {
    border: 1px solid $grey;
    border-radius: $border-radius;
    min-width: 24px;
    text-align: center;
    margin: 5px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    user-select: none;

    &.selected,
    &:hover {
      border-color: #aaa;
    }

    &.selected,
    .separator {
      cursor: default;
    }

    &.direction {
      margin-left: 0px;
      margin-right: 0px;
      border: none;

      > svg {
        width: 20px;
        height: 20px;
      }
    }
  }
}
</style>