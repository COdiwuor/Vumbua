<template>
  <div class="wrapper">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div class="md-layout-item text-center">
            <h1 class="idea-bank">
              Incubator Idea
            </h1>
          </div>
        </div>
      </div>
    </div>
    <div class="cont">
      <div class="row justify-center">
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
          <md-card class="md-card-plain">
            <h4 class="card-title">
              Problem Statement
            </h4>
            <md-card-content>
              <p class="card-description">
                I will be the leader of a company that ends up being worth
                billions of dollars, because I got the answers. I understand
                culture. I am the nucleus. I think that’s a responsibility that
                that I have, to push possibilities, to show people, this is the
                the level that things could be at.
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
                the level that things could be at.
              </p>
            </md-card-content>
          </md-card>
          <md-card class="md-card-plain">
            <h4 class="card-title">
              Objectives
            </h4>
            <md-card-content>
              <p class="card-description">
                I will be the leader of a company that ends up being worth
                billions of dollars, because I got the answers. I understand
                culture. I am the nucleus. I think that’s a responsibility that
                that I have, to push possibilities, to show people, this is the
                the level that things could be at.
              </p>
            </md-card-content>
            <h4 class="card-title">
              Limitations
            </h4>
            <md-card-content>
              <p class="card-description">
                I will be the leader of a company that ends up being worth
                billions of dollars, because I got the answers. I understand
                culture. I am the nucleus. I think that’s a responsibility that
                that I have, to push possibilities, to show people, this is the
                is the level that things could be at.
              </p>
            </md-card-content>
            <md-card-content>
              <h5 class="title">Do you like what you read ?</h5>
              <v-btn text x-large color="light-blue">
                <v-icon left>mdi-thumb-up</v-icon> 0
              </v-btn>
            </md-card-content>
          </md-card>
          <md-button class="indigo md-lg" @click="expressInterest = true"
            ><md-icon>library_books</md-icon> Express Interest
          </md-button>
          <modal v-if="expressInterest" @close="classicModalHide">
            <template slot="header">
              <h4 class="modal-title">Message of Interest</h4>
              <div class=""></div>
              <md-button
                class="md-simple md-just-icon md-round modal-default-button"
                @click="classicModalHide"
              >
                <md-icon>clear</md-icon>
              </md-button>
            </template>

            <template slot="body">
              <p>
                Are you sure you want to show interest in the funding the idea
                "The One" ?
              </p>
            </template>
            <template slot="footer">
              <md-button class="mr-3 md-success" href="/offer">Yes</md-button>
              <md-button class="md-danger" @click="classicModalHide"
                >No</md-button
              >
            </template>
          </modal>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IdeaComponent from "../ideas/IdeaComponent";
import { Modal } from "@/components";
export default {
  name: "IncubatorIdea",
  bodyClass: "profile-page",
  components: { Modal },
  data() {
    return {
      expressInterest: false
    };
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/bg3.jpg")
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  },

  methods: {
    classicModalHide() {
      this.expressInterest = false;
    }
  }
};
</script>

<style scoped>
.cont {
  padding: 15px;
}
</style>
