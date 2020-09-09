<template>
  <div class="wrapper">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div class="md-layout-item text-center">
            <h1 class="idea-bank">
              New Single Idea
            </h1>
          </div>
        </div>
      </div>
    </div>
    <div class="cont">
      <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
          <div>
            <md-card class="md-card-plain">
              <h4 class="card-title">
                Problem Statement
              </h4>
              <md-card-content>
                <p class="card-description">
                  I will be the leader of a company that ends up being worth
                  billions of dollars, because I got the answers. I understand
                  culture. I am the nucleus. I think that’s a responsibility
                  that I have, to push possibilities, to show people, this is
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
                  culture. I am the nucleus. I think that’s a responsibility
                  that I have, to push possibilities, to show people, this is
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
                  culture. I am the nucleus. I think that’s a responsibility
                  that I have, to push possibilities, to show people, this is
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
                  culture. I am the nucleus. I think that’s a responsibility
                  that I have, to push possibilities, to show people, this is
                  the level that things could be at.
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
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
          <div>
            <div class="ma-5">
              <v-card>
                <md-toolbar style="background-color: #0d47a1 !important;">
                  <div class="md-toolbar-row">
                    <div class="md-toolbar-section-start">
                      <h3 class="md-title">About Author</h3>
                    </div>
                  </div>
                </md-toolbar>
                <v-list-item three-line>
                  <v-list-item-avatar size="80">
                    <v-img
                      style="border-radius: 50%"
                      src="@/assets/img/bg7.jpg"
                    ></v-img>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title class="headline mb-1"
                      >John Doe</v-list-item-title
                    >
                    <v-list-item-subtitle
                      >Greyhound divisely hello coldly
                      fonwderfully</v-list-item-subtitle
                    >
                  </v-list-item-content>
                </v-list-item>

                <v-card-actions>
                  <p class="text-center ma-2">Share this idea on</p>
                  <div class="row justify-center">
                    <md-button
                      href="javascript:void(0)"
                      class="md-just-icon md-simple md-dribbble"
                      ><i class="fab fa-instagram"></i
                    ></md-button>
                    <md-button
                      href="javascript:void(0)"
                      class="md-just-icon md-simple md-twitter"
                      ><i class="fab fa-twitter"></i
                    ></md-button>
                    <md-button
                      href="javascript:void(0)"
                      class="md-just-icon md-simple md-pinterest"
                      ><i class="fab fa-facebook-f"></i
                    ></md-button>
                  </div>
                  <v-btn
                    to="/forums"
                    rounded
                    outlined
                    small
                    style="color: #0d47a1 !important;"
                    >discussion forum</v-btn
                  >
                </v-card-actions>
              </v-card>
            </div>
            <div class="ma-5">
              <v-card>
                <md-toolbar style="background-color: #0d47a1 !important;">
                  <div class="md-toolbar-row">
                    <div class="md-toolbar-section-start">
                      <h3 class="md-title">Leave a Reply</h3>
                    </div>
                  </div>
                </md-toolbar>
                <v-list-item three-line>
                  <div class="row">
                    <div class="col">
                      <label>Comment *</label>
                      <v-text-field
                        dense
                        v-model="comment"
                        :error-messages="commentErrors"
                        @input="$v.comment.$touch()"
                        @blur="$v.comment.$touch()"
                      ></v-text-field>
                      <v-btn
                        rounded
                        class="justify-center"
                        outlined
                        small
                        style="color: #0d47a1 !important;"
                        @click="submit"
                        >comment</v-btn
                      >
                    </div>
                  </div>
                </v-list-item>
              </v-card>
            </div>
            <div class="ma-5">
              <v-card>
                <md-toolbar style="background-color: #0d47a1 !important;">
                  <div class="md-toolbar-row">
                    <div class="md-toolbar-section-start">
                      <h3 class="md-title">Comments</h3>
                    </div>
                  </div>
                </md-toolbar>
                <v-list-item three-line>
                  <v-list-item-content>
                    <v-list-item-subtitle
                      >Be the first to leave a comment</v-list-item-subtitle
                    >
                  </v-list-item-content>
                </v-list-item>
              </v-card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
export default {
  name: "SingleIdea",
  bodyClass: "profile-page",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/bg3.jpg")
    }
  },
  data() {
    return {
      comment: null
    };
  },
  validations: {
    comment: { required }
  },
  computed: {
    commentErrors() {
      const errors = [];
      if (!this.$v.comment.$dirty) return errors;
      !this.$v.comment.required && errors.push("comment is required.");
      return errors;
    },
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  },
  methods: {
    submit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        let data = {
          comment: this.comment
        };
      }
    }
  }
};
</script>

<style scoped>
.cont {
  padding: 15px;
}
</style>
