<template>
  <div>
    <div class="row">
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <md-card class="md-card-plain">
          <div class="md-layout-item md-size-50 mx-auto">
            <v-avatar size="200" tile>
              <v-img
                style="border-radius: 50%"
                src="@/assets/img/studio-3.jpg"
              ></v-img>
            </v-avatar>
          </div>
          <h4 class="card-title">
            Problem Statement
          </h4>
          <md-card-content>
            <p class="card-description">
              I will be the leader of a company that ends up being worth
              billions of dollars, because I got the answers. I understand
              culture. I am the nucleus. I think that’s a responsibility that I
              have, to push possibilities, to show people, this is the level
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
              culture. I am the nucleus. I think that’s a responsibility that I
              have, to push possibilities, to show people, this is the level
              that things could be at.
            </p>
          </md-card-content>
        </md-card>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <md-card class="md-card-plain">
          <h4 class="card-title">
            Objectives
          </h4>
          <md-card-content>
            <p class="card-description">
              I will be the leader of a company that ends up being worth
              billions of dollars, because I got the answers. I understand
              culture. I am the nucleus. I think that’s a responsibility that I
              have, to push possibilities, to show people, this is the level
              that things could be at.
            </p>
          </md-card-content>
          <h4 class="card-title">
            Limitations
          </h4>
          <md-card-content>
            <p class="card-description">
              I will be the leader of a company that ends up being worth
              billions of dollars, because I got the answers. I understand
              culture. I am the nucleus. I think that’s a responsibility that I
              have, to push possibilities, to show people, this is the level
              that things could be at.
            </p>
          </md-card-content>
          <md-card-content>
            <h5 class="title">Do you like what you read ?</h5>
            <v-btn text x-large color="light-blue">
              <v-icon left>mdi-thumb-up</v-icon> 0
            </v-btn>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  bodyClass: "landing-page",
  name: "IdeaComponent",
  props: {
    teamImg1: {
      type: String,
      default: require("@/assets/img/bg3.jpg")
    }
  }
};
</script>

<style scoped></style>
