<template>
  <div class="wrapper">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-40 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto"
          >
            <md-card class="md-card-login pa-3">
              <h3 class="form-title">Forgot Password</h3>
              <md-card-area class="pa-3">
                <div class="mt-4">
                  <v-text-field
                    v-model="email"
                    label="Email"
                    dense
                    :error-messages="nameErrors"
                    @input="$v.email.$touch()"
                    @blur="$v.email.$touch()"
                  ></v-text-field>
                </div>
                <div class="row text-center justify-center pb-2">
                  <md-button class="md-primary" @click="submit"
                    >send reset link</md-button
                  >
                </div>
              </md-card-area>

              <md-card-actions md-alignment="left">
                <div>
                  Already have an Account
                  <a class="text-primary" href="/login">login Now</a>
                </div>
              </md-card-actions>
            </md-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";

export default {
  name: "forgotPassword",
  data() {
    return {
      username: null
    };
  },
  validations: {
    username: { required }
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/login.jpg")
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    },
    nameErrors() {
      const errors = [];
      if (!this.$v.username.$dirty) return errors;
      !this.$v.username.required && errors.push("email is required.");
      return errors;
    }
  },
  methods: {
    submit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        let data = {
          username: this.username
        };
      }
    }
  }
};
</script>

<style lang="css"></style>
