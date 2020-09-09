<template>
  <div class="wrapper">
    <div class="section bg-color">
      <div class="text-h4 text-white text-center mt-15">Make Offer</div>
    </div>
    <div class="cont ">
      <div class="md-layout">
        <div
          class="md-layout-item md-size-40 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto"
        >
          <md-card class="pa-3">
            <md-card-area class="pa-5">
              <div class="mt-4">
                <label>Offer</label>
                <v-text-field
                  v-model="offer"
                  dense
                  :error-messages="offerErrors"
                  @input="$v.offer.$touch()"
                  @blur="$v.offer.$touch()"
                ></v-text-field>
                <label>Body</label>
                <v-textarea
                  v-model="body"
                  dense
                  :error-messages="bodyErrors"
                  @input="$v.body.$touch()"
                  @blur="$v.body.$touch()"
                >
                </v-textarea>
              </div>
              <div class="row text-center justify-center pb-2">
                <md-button class="md-primary mr-4" @click="submit"
                  >make offer</md-button
                >
              </div>
            </md-card-area>
          </md-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";

export default {
  bodyClass: "login-page",
  name: "Offer",
  data() {
    return {
      offer: null,
      body: null
    };
  },
  validations: {
    offer: { required },
    body: { required }
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/homepage.jpg")
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    },
    offerErrors() {
      const errors = [];
      if (!this.$v.offer.$dirty) return errors;
      !this.$v.offer.required && errors.push("offer is required.");
      return errors;
    },
    bodyErrors() {
      const errors = [];
      if (!this.$v.body.$dirty) return errors;
      !this.$v.body.required && errors.push("body is required.");
      return errors;
    }
  },
  methods: {
    submit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        let data = {
          offer: this.offer,
          body: this.body
        };
      }
    }
  }
};
</script>

<style lang="css">
.cont {
  padding: 15px;
}
</style>
