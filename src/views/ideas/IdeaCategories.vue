<template>
  <div class="wrapper">
    <div class="section" style="background-color: #023f92">
      <div class="text-h4 text-white text-center mt-15">Idea Categories</div>
    </div>
    <div class="cont">
      <div class="row">
        <div
          class="col-lg-4 col-md-4 col-sm-6 col-xs-12"
          v-for="(idea, index) in categories"
          :key="index"
        >
          <v-card class="mx-auto idea-category" max-width="400">
            <v-img
              class="white--text align-end"
              height="200px"
              src="@/assets/img/studio-3.jpg"
            >
            </v-img>
            <v-card-title>
              <router-link
                class="text-gray category-name"
                to="/single-category"
                >{{ idea.title }}</router-link
              ></v-card-title
            >
            <v-card-text class="text--primary body-1">
              <div>{{ idea.problem_statement }}</div>
            </v-card-text>
          </v-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IdeaCategories",
  data() {
    return {
      categories: [
        {
          title: "Business",
          problem_statement:
            "Solving world problems is too big for one person it requires all of us to work together"
        },
        {
          title: "Finance",
          problem_statement:
            "Solving world problems is too big for one person it requires all of us to work together"
        },
        {
          title: "Technology",
          problem_statement:
            "Solving world problems is too big for one person it requires all of us to work together"
        },
        {
          title: "Human Resource",
          problem_statement:
            "Solving world problems is too big for one person it requires all of us to work together"
        }
      ]
    };
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
.idea-category:hover {
  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
.idea-category:hover .category-name {
  /* background-color: #fbc02d !important; */
  background-color: #0c4f9bd3 !important;
  padding: 7px 15px !important;
  font-size: 15px !important;
  display: inline-block !important;
  color: #fff !important;
}
@media screen and (max-width: 768px) {
  .idea-bank {
    font-size: 3rem;
  }
  .idea-def {
    font-size: 1.6rem;
  }
}
</style>
