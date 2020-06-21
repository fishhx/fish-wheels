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
      <g-icon :name="'upload'"></g-icon>
      <g-icon :name="'ellipsis'"></g-icon>
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
    <div class="grid">
      <h1>Grid</h1>
      <g-row class="demoRow">
        <g-col span="8">
          <div class="demoCol">8</div>
        </g-col>
        <g-col span="8">
          <div class="demoCol">8</div>
        </g-col>
        <g-col span="8">
          <div class="demoCol">8</div>
        </g-col>
      </g-row>

      <g-row class="demoRow">
        <g-col span="6">
          <div class="demoCol">6</div>
        </g-col>
        <g-col span="6">
          <div class="demoCol">6</div>
        </g-col>
        <g-col span="6">
          <div class="demoCol">6</div>
        </g-col>
        <g-col span="6">
          <div class="demoCol">6</div>
        </g-col>
      </g-row>

      <g-row class="demoRow">
        <g-col span="4">
          <div class="demoCol">4</div>
        </g-col>
        <g-col span="4">
          <div class="demoCol">4</div>
        </g-col>
        <g-col span="4">
          <div class="demoCol">4</div>
        </g-col>
        <g-col span="4">
          <div class="demoCol">4</div>
        </g-col>
        <g-col span="4">
          <div class="demoCol">4</div>
        </g-col>
        <g-col span="4">
          <div class="demoCol">4</div>
        </g-col>
      </g-row>

      <g-row class="demoRow">
        <g-col span="2">
          <div class="demoCol">2</div>
        </g-col>
        <g-col span="2">
          <div class="demoCol">2</div>
        </g-col>
        <g-col span="2">
          <div class="demoCol">2</div>
        </g-col>
        <g-col span="2">
          <div class="demoCol">2</div>
        </g-col>
        <g-col span="2">
          <div class="demoCol">2</div>
        </g-col>
        <g-col span="2">
          <div class="demoCol">2</div>
        </g-col>
        <g-col span="2">
          <div class="demoCol">2</div>
        </g-col>
        <g-col span="2">
          <div class="demoCol">2</div>
        </g-col>
        <g-col span="2">
          <div class="demoCol">2</div>
        </g-col>
        <g-col span="2">
          <div class="demoCol">2</div>
        </g-col>
        <g-col span="2">
          <div class="demoCol">2</div>
        </g-col>
        <g-col span="2">
          <div class="demoCol">2</div>
        </g-col>
      </g-row>
    </div>
    <div class="tabs">
      <h1>Tabs</h1>
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
    </div>
    <div class="pager">
      <h1>Pager</h1>
      <g-pager :total-page="20" :current-page.sync="currentPage"></g-pager>
    </div>
    <div class="slides">
      <h1>Carousel</h1>
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
      </g-slides>
    </div>
    <div class="popover">
      <h1>Popover</h1>
      <g-popover>
        <g-button>上方弹出</g-button>
        <template slot="content">弹出内容</template>
      </g-popover>
      <g-popover position="bottom">
        <g-button>下方弹出</g-button>
        <template slot="content">弹出内容</template>
      </g-popover>
      <g-popover position="left">
        <g-button>左边弹出</g-button>
        <template slot="content">弹出内容</template>
      </g-popover>
      <g-popover position="right">
        <g-button>右边弹出</g-button>
        <template slot="content">弹出内容</template>
      </g-popover>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      value: "Bi-direction",
      selected: "1",
      currentPage: 5
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
* {
  box-sizing: border-box;
}
.button {
  // margin-bottom: 100px;
  .g-button {
    margin: 0 3px;
  }
}
.g-icon {
  margin: 0 3px;
}
.grid {
  width: 50%;
  margin: 0 auto;
}
.tabs {
  width: 60%;
  margin: 0 auto;
}
.pager {
  .g-pager {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.slides {
  .box {
    margin: 0 auto;
    width: 50%;
    height: 300px;
    background: #aaa;
    // opacity: 0.7;
    color: white;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.popover {
  margin: 0 5px;
}
</style>