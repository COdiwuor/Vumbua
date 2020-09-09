<template>
  <div class="wrapper">
    <parallax
      class="section page-header header-filter"
      :style="headerStyle"
    ></parallax>
    <div class="main main-raised mb-5">
      <div class="section profile-content">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-50 mx-auto">
              <div class="profile">
                <div class="avatar">
                  <img
                    :src="img"
                    alt="Circle Image"
                    class="img-raised rounded-circle img-fluid"
                  />
                </div>
                <div class="name">
                  <h3 class="title">{{ username }}</h3>
                  <h6 class="text-lowercase text-primary">{{ email }}</h6>
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
              </div>
            </div>
          </div>
          <div class="description text-center">
            <v-form>
              <div class="row">
                <div class="col">
                  <label>Profile Picture *</label>
                  <v-file-input
                    label="Choose an Image"
                    dense
                    small-chips
                    show-size
                    prepend-icon="mdi-camera"
                  ></v-file-input>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <label>User Name</label>
                  <v-text-field
                    value="James"
                    v-model="username"
                    @change="changeName"
                  ></v-text-field>
                </div>
                <div class="col">
                  <label>Email </label>
                  <v-text-field
                    type="email"
                    v-model="email"
                    @change="changeEmail"
                  ></v-text-field>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <label>Bio </label>
                  <v-textarea v-model="bio" @change="changeBio"></v-textarea>
                </div>
              </div>
            </v-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  bodyClass: "profile-page",
  name: "Profile",
  data() {
    return {
      username: "John Doe",
      email: "john@gmail.com",
      bio: "I love coming up with new ideas"
    };
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/city-profile.jpg")
    },
    img: {
      type: String,
      default: require("@/assets/img/faces/christian.jpg")
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  },
  methods: {
    changeBio(data) {
      alert(data);
    },
    changeEmail(data) {
      alert(data);
    },
    changeName(data) {
      alert(data);
    }
  }
};
</script>

<style lang="scss" scoped>
.section {
  padding: 0;
}

.profile-tabs::v-deep {
  .md-card-tabs .md-list {
    justify-content: center;
  }

  [class*="tab-pane-"] {
    margin-top: 3.213rem;
    padding-bottom: 50px;

    img {
      margin-bottom: 2.142rem;
    }
  }
}
</style>
