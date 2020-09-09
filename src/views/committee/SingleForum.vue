<template>
  <div class="wrapper">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div class="md-layout-item text-center">
            <h1 class="idea-bank">
              Forum Discussion 1
            </h1>
          </div>
        </div>
      </div>
    </div>
    <div class="container ma-10">
      <div class="row">
        <div class="col-12">
          <md-card class="md-card-plain">
            <h4 class="card-title">
              Problem Statement
            </h4>
            <md-card-content>
              <p class="card-description">
                I will be the leader of a company that ends up being worth
                billions of dollars, because I got the answers. I understand
                culture. I am the nucleus. I think that’s a responsibility that
                I have, to push possibilities, to show people, this is the level
                that things could be at.
              </p>
            </md-card-content>
            <h4 class="card-title">
              Executive Summary
            </h4>
            <md-card-content>
              <p class="card-description">
                I will be the leader of a company that ends up being worth
                billions of dollars, because I got the answers. I understand
                culture. I am the nucleus. I think that’s a responsibility that
                I have, to push possibilities, to show people, this is the level
                that things could be at.
              </p>
            </md-card-content>
          </md-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleForum",
  bodyClass: "profile-page",
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/nature.jpg")
    }
  }
};
</script>

<style scoped>
.cont {
  padding: 15px;
}
</style>
