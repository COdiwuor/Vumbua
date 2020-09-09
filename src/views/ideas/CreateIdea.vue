<template>
  <div class="wrapper">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout justify-center">
          <div class="form-v10-content">
            <div class="form-detail">
              <div class="form-left">
                <h2 class="text-primary">Create An Idea</h2>
                <div class="row form-row">
                  <div class="col">
                    <label>Title *</label>
                    <v-text-field
                      dense
                      v-model="title"
                      :error-messages="titleErrors"
                      @input="$v.title.$touch()"
                      @blur="$v.title.$touch()"
                    ></v-text-field>
                  </div>
                </div>
                <div class="row form-row">
                  <div class="col">
                    <label>Image *</label>
                    <v-file-input
                      label="Choose an Image"
                      dense
                      small-chips
                      show-size
                      accept="image/png, image/jpeg, image/bmp"
                      prepend-icon="mdi-camera"
                    ></v-file-input>
                  </div>
                </div>
                <div class="row form-row">
                  <div class="col">
                    <label>Category *</label>
                    <v-select
                      :items="categories"
                      item-text="state"
                      item-value="abbr"
                      return-object
                      v-model="category"
                      :error-messages="categoryErrors"
                      @input="$v.category.$touch()"
                      @blur="$v.category.$touch()"
                    ></v-select>
                  </div>
                </div>
                <div class="row form-row">
                  <div class="col">
                    <label>Problem Statement *</label>
                    <v-textarea
                      dense
                      v-model="problem"
                      :error-messages="problemErrors"
                      @input="$v.problem.$touch()"
                      @blur="$v.problem.$touch()"
                    ></v-textarea>
                  </div>
                </div>
                <div class="row form-row">
                  <div class="col">
                    <label>Executive Summary *</label>
                    <v-textarea
                      dense
                      v-model="summary"
                      :error-messages="summaryErrors"
                      @input="$v.summary.$touch()"
                      @blur="$v.summary.$touch()"
                    ></v-textarea>
                  </div>
                </div>
                <div class="row form-row">
                  <div class="col">
                    <label>Objectives *</label>
                    <v-textarea
                      dense
                      v-model="objectives"
                      :error-messages="objectivesErrors"
                      @input="$v.objectives.$touch()"
                      @blur="$v.objectives.$touch()"
                    ></v-textarea>
                  </div>
                </div>
                <div class="row form-row">
                  <div class="col">
                    <label>Limitations *</label>
                    <v-textarea
                      dense
                      v-model="limitations"
                      :error-messages="limitationsErrors"
                      @input="$v.limitations.$touch()"
                      @blur="$v.limitations.$touch()"
                    ></v-textarea>
                  </div>
                </div>
                <div class="form-row2">
                  <md-button @click="submit" class="md-primary "
                    >create idea</md-button
                  >
                </div>
              </div>
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
  bodyClass: "login-page",
  name: "CreateIdea",
  data() {
    return {
      title: null,
      problem: null,
      summary: null,
      objectives: null,
      limitations: null,
      category: null,
      categories: [
        { state: "IT", abbr: "IT" },
        { state: "Human Resource", abbr: "HR" },
        { state: "Finance", abbr: "FE" },
        { state: "Health", abbr: "HT" },
        { state: "Business", abbr: "BS" },
        { state: "Agriculture", abbr: "AG" },
        { state: "Entertainment", abbr: "ET" }
      ]
    };
  },
  validations: {
    title: { required },
    problem: { required },
    summary: { required },
    objectives: { required },
    limitations: { required },
    category: { required }
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/idea.jpg")
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    },
    titleErrors() {
      const errors = [];
      if (!this.$v.title.$dirty) return errors;
      !this.$v.title.required && errors.push("title is required.");
      return errors;
    },
    problemErrors() {
      const errors = [];
      if (!this.$v.problem.$dirty) return errors;
      !this.$v.problem.required &&
        errors.push("problem statement is required.");
      return errors;
    },
    summaryErrors() {
      const errors = [];
      if (!this.$v.summary.$dirty) return errors;
      !this.$v.summary.required &&
        errors.push("executive summary is required.");
      return errors;
    },
    objectivesErrors() {
      const errors = [];
      if (!this.$v.objectives.$dirty) return errors;
      !this.$v.objectives.required && errors.push("objectives is required.");
      return errors;
    },
    limitationsErrors() {
      const errors = [];
      if (!this.$v.limitations.$dirty) return errors;
      !this.$v.limitations.required && errors.push("limitations is required.");
      return errors;
    },
    categoryErrors() {
      const errors = [];
      if (!this.$v.category.$dirty) return errors;
      !this.$v.category.required && errors.push("category is required.");
      return errors;
    }
  },
  methods: {
    submit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        let data = {
          title: this.title,
          problem: this.problem,
          summary: this.summary,
          objectives: this.objectives,
          limitations: this.limitations,
          category: this.category
        };
      }
    }
  }
};
</script>

<style scoped>
.form-title {
  text-transform: uppercase;
  font-size: 25px;
  text-align: center;
  margin-bottom: 8px;
}
.form-v10-content {
  background: #fff;
  width: 700px;
  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
  -o-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
  -ms-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
  -webkit-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
  position: relative;
  font-family: "Montserrat", sans-serif;
}
.form-v10-content .form-detail {
  position: relative;
  width: 100%;
  display: flex;
  display: -webkit-flex;
}
.form-v10-content .form-detail h2 {
  font-weight: 500;
  text-align: center;
  font-size: 30px;
  margin-bottom: 34px;
  padding: 33px 50px 0px 60px;
}
.form-v10-content .form-detail .form-left {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  width: 100%;
  color: #666;
}
.form-v10-content .form-detail .form-right {
  width: 100%;
  color: #666;
  margin-top: 25px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}
.form-v10-content .form-detail .form-right h2 {
  color: #fff;
}
.form-v10-content .form-detail .form-row {
  position: relative;
  padding-left: 60px;
  padding-right: 50px;
}
.form-v10-content .form-detail .form-row2 {
  position: relative;
  padding-left: 270px;
  padding-right: 50px;
}
/* Responsive */
@media screen and (max-width: 1199px) {
  .form-v10-content {
    margin: 95px 20px;
  }
}
@media screen and (max-width: 767px) {
  .form-v10-content .form-detail {
    flex-direction: column;
    -o-flex-direction: column;
    -ms-flex-direction: column;
    -moz-flex-direction: column;
    -webkit-flex-direction: column;
  }
  .form-v10-content .form-detail .form-right {
    border-top-right-radius: 0px;
    border-bottom-left-radius: 10px;
  }
  .form-v10-content .form-detail .form-left {
    padding-bottom: 50px;
  }
}
@media screen and (max-width: 575px) {
  .form-v10-content .form-detail .form-row {
    width: auto;
    padding: 0 30px;
  }
  .form-v10-content .form-detail h2 {
    padding: 33px 30px 0px 30px;
  }
}
</style>
