<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div class="md-layout-item text-center">
            <h1 class="idea-bank">Forum Section</h1>
            <h2 class="idea-def">
              Welcome to the Forum Section where we have discussions about the
              different ideas that people have.
            </h2>
            <md-button
              class="md-white md-round"
              style="color: #0d47a1 !important;"
              >start forum</md-button
            >
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised mb-5">
      <div class="section profile-content">
        <div class="container">
          <v-row dense>
            <v-col
              v-for="(item, i) in forums"
              :key="i"
              cols="12"
              style="text-align: -webkit-center;"
            >
              <v-card
                flat
                style="max-width: 500px;"
                class="idea-card pa-2"
                href="/single-forum"
              >
                <div
                  class="d-flex  flex-grow-1 justify-space-around align-center"
                >
                  <div>
                    <v-card-title
                      class="subtitle-1 text-gray"
                      v-text="item.title"
                    ></v-card-title>

                    <v-card-subtitle>
                      <span
                        class="text-primary subtitle-2"
                        v-text="item.user"
                      ></span>
                      on
                      <span v-text="item.date_posted"></span>
                    </v-card-subtitle>
                  </div>
                  <div>
                    <v-btn text small color="grey">
                      <v-icon left>comment</v-icon> {{ item.comments }}
                    </v-btn>
                  </div>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  bodyClass: "profile-page",
  name: "Forums",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/bg7.jpg")
    }
  },
  data() {
    return {
      forums: [
        {
          user: "John Doe",
          title: "This is how we do things",
          date_posted: "22/12/2019",
          comments: "1"
        },
        {
          user: "John Doe",
          title: "This is how we do things",
          date_posted: "22/12/2019",
          comments: "1"
        }
      ]
    };
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  }
};
</script>

<style scoped>
.idea-card:hover {
  background-color: rgba(250, 235, 215, 0.53);
  cursor: pointer;
}
</style>
