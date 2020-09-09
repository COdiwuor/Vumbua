<template>
  <div class="wrapper">
    <div class="section bg-color"></div>
    <div class=" cont">
      <div>
        <div class="row text-center justify-center buttons">
          <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 pa-10">
            <div class="dont-show">
              <md-button
                href="/create-idea"
                class=" md-round mr-4"
                style="background-color: #0d47a1 !important;padding: .3rem 3rem !important;"
                >new idea</md-button
              >
              <v-card class="mx-auto mt-7" shaped>
                <v-list dense>
                  <v-list-item-group color="primary">
                    <v-list-item v-for="(item, i) in items" :key="i">
                      <v-list-item-content>
                        <v-list-item-title
                          v-text="item.title"
                        ></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-card>
            </div>
            <div class="show-now row">
              <div class="col">
                <v-menu offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <md-button
                      class=" md-round mr-4"
                      style="background-color: #0d47a1 !important;padding: .3rem 3rem !important;"
                      v-bind="attrs"
                      v-on="on"
                      >filters</md-button
                    >
                  </template>
                  <v-list dense>
                    <v-list-item-group color="primary">
                      <v-list-item v-for="(item, i) in items" :key="i">
                        <v-list-item-content>
                          <v-list-item-title
                            v-text="item.title"
                          ></v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list-item-group>
                  </v-list>
                </v-menu>
              </div>
              <div class="col">
                <md-button
                  href="/create-idea"
                  class=" md-round mr-4"
                  style="background-color: #0d47a1 !important;padding: .3rem 3rem !important;"
                  >new idea</md-button
                >
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9">
            <ideas-card-component
              style="text-align: -webkit-center; justify-content: center"
            />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
import IdeasCardComponent from "./IdeasCardComponent";
export default {
  name: "Ideas",
  components: { IdeasCardComponent },
  data() {
    return {
      items: [
        { title: "All Ideas" },
        { title: "Own Ideas" },
        { title: "Popular ideas this week" },
        { title: "Popular idea all time" }
      ]
    };
  }
};
</script>

<style scoped>
.cont {
  padding: 15px;
}
.idea-card:hover {
  background-color: rgba(250, 235, 215, 0.53);
}
.show-now {
  display: none;
}
@media screen and (max-width: 800px) {
  .show-now {
    display: block;
  }
  .dont-show {
    display: none;
  }
}
</style>
