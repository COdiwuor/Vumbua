<template>
  <div class="wrapper">
    <div class="section bg-color">
      <div class="text-h4 text-white text-center mt-15">Ideas in Business</div>
    </div>
    <div class="cont">
      <div>
        <div class="row text-center justify-center buttons">
          <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4"></div>
          <!-- <div class="col-xs-12 col-sm-8 col-md-8 col-lg-8">
            <v-text-field
              outlined
              dense
              label="Idea Title/ Problem Statement"
              append-icon="search"
              style="border-radius: 30px;width: 70%"
            ></v-text-field>
          </div> -->
        </div>
      </div>
      <div>
        <ideas-card-component style="text-align: -webkit-center;" />
      </div>
    </div>
  </div>
</template>

<script>
import IdeasCardComponent from "./IdeasCardComponent";
export default {
  name: "SingleCategory",
  components: { IdeasCardComponent },
  data() {
    return {};
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
.idea-card:hover {
  background-color: rgba(250, 235, 215, 0.53);
}
</style>
