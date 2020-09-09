<template>
  <v-row dense>
    <v-text-field
      outlined
      dense
      label="Search for an Idea"
      append-icon="search"
      style="border-radius: 30px;max-width: 600px; padding-right:50px;"
    ></v-text-field>
    <v-col v-for="(item, i) in ideas" :key="i" cols="12">
      <v-card flat style="max-width: 700px;" class="idea-card pa-2">
        <div class="d-flex  flex-grow-1 justify-space-around align-center">
          <v-avatar size="70" tile>
            <v-img
              style="border-radius: 50%"
              src="@/assets/img/studio-3.jpg"
            ></v-img>
          </v-avatar>
          <div>
            <v-card-title class="subtitle-1" v-text="item.title"></v-card-title>

            <v-card-subtitle>
              <span class="text-primary subtitle-2" v-text="item.user"></span>
              on
              <span v-text="item.date_posted"></span>
            </v-card-subtitle>
          </div>
          <div>
            <v-btn text small color="grey">
              <v-icon left>comment</v-icon> {{ item.comments }}
            </v-btn>
            <v-btn text small color="grey">
              <v-icon left>visibility</v-icon> {{ item.views }}
            </v-btn>
            <v-btn text small color="grey">
              <v-icon left>mdi-thumb-up</v-icon> {{ item.likes }}
            </v-btn>
            <v-btn
              :to="LinkTo"
              rounded
              outlined
              small
              style="color: #FBC02D !important;"
              >read more</v-btn
            >
          </div>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "IdeasCardComponent",
  props: {
    LinkTo: {
      type: String,
      default: "/single-idea"
    }
  },
  data() {
    return {
      ideas: [
        {
          user: "John Doe",
          title: "This is how we do things",
          image: "homepage.jpg",
          likes: "7",
          date_posted: "22/12/2019",
          problem_statement:
            "Solving world problems is too big for one person it requires all of us to work together",
          comments: "1",
          views: "17"
        },
        {
          user: "John Doe",
          title: "This is how we do things",
          image: "homepage.jpg",
          likes: "7",
          date_posted: "22/12/2019",
          problem_statement:
            "Solving world problems is too big for one person it requires all of us to work together",
          comments: "1",
          views: "17"
        },
        {
          user: "John Doe",
          title: "This is how we do things",
          image: "homepage.jpg",
          likes: "7",
          date_posted: "22/12/2019",
          problem_statement:
            "Solving world problems is too big for one person it requires all of us to work together",
          comments: "1",
          views: "17"
        },
        {
          user: "John Doe",
          title: "This is how we do things",
          image: "homepage.jpg",
          likes: "7",
          date_posted: "22/12/2019",
          problem_statement:
            "Solving world problems is too big for one person it requires all of us to work together",
          comments: "1",
          views: "17"
        },
        {
          user: "John Doe",
          title: "This is how we do things",
          image: "homepage.jpg",
          likes: "7",
          date_posted: "22/12/2019",
          problem_statement:
            "Solving world problems is too big for one person it requires all of us to work together",
          comments: "1",
          views: "17"
        }
      ]
    };
  }
};
</script>

<style scoped>
.idea-card:hover {
  background-color: rgba(250, 235, 215, 0.53);
}
</style>
