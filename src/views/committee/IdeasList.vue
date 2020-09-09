<template>
  <div class="wrapper">
    <div class="section bg-color"></div>
    <div class="cont">
      <div class="md-layout">
        <div
          class="md-layout-item md-size-100 md-small-size-100 md-xsmall-size-100 md-medium-size-100 mx-auto"
        >
          <v-data-table
            :headers="headers"
            :items="ideas"
            sort-by="calories"
            class="elevation-1"
          >
            <template v-slot:top>
              <md-toolbar style="background-color: #0d47a1 !important;">
                <div class="md-toolbar-row">
                  <div class="md-toolbar-section-start">
                    <h3 class="md-title">Ideas List</h3>
                  </div>
                </div>
              </md-toolbar>
            </template>
            <template v-slot:item.status="{ item }">
              <v-chip
                class="indigo text-white"
                small
                :ripple="false"
                v-if="item.status === 'accepted'"
                >{{ item.status }}</v-chip
              >
              <v-chip
                class="text-white"
                small
                :ripple="false"
                v-if="item.status === 'declined'"
                >{{ item.status }}</v-chip
              >
              <v-chip
                class="light-blue text-white"
                small
                :ripple="false"
                v-if="item.status === 'pending'"
                >{{ item.status }}</v-chip
              >
            </template>
            <template v-slot:item.title="{ item }">
              <v-btn
                text
                small
                color="black"
                to="/single-idea"
                class=" text-capitalize"
                >{{ item.title }}</v-btn
              >
            </template>
            <template v-slot:item.action="{}">
              <v-btn x-small color="primary">Decline</v-btn>
            </template>
          </v-data-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IdeaList",
  props: {
    header: {
      type: String,
      default: require("@/assets/home.png")
    }
  },
  data() {
    return {
      headers: [
        { text: "Idea", value: "title" },
        { text: "Creator", value: "user" },
        { text: "Submission Date", value: "date_posted" },
        { text: "Current Status", value: "status" },
        { text: "Action", value: "action" },
        { text: "Total Votes", value: "votes" }
      ],
      ideas: [
        {
          user: "John Doe",
          title: "This is how we do things",
          date_posted: "22/12/2019",
          status: "pending",
          votes: 7
        },
        {
          user: "John Doe",
          title: "This is how we do things",
          date_posted: "22/12/2019",
          status: "declined",
          votes: 0
        },
        {
          user: "John Doe",
          title: "This is how we do things",
          date_posted: "22/12/2019",
          status: "pending",
          votes: 1
        },
        {
          user: "John Doe",
          title: "This is how we do things",
          date_posted: "22/12/2019",
          status: "accepted",
          votes: 23
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
.cont {
  padding: 15px;
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
}
</style>
