<template>
  <div class="wrapper">
    <div class="section bg-color"></div>
    <div class="cont">
      <section id="sec">
        <ul>
          <li>
            <h3 class="text-h4">Ideas</h3>
            <p>All Submitted Ideas</p>
            <p>
              This Directs You To The Ideas List Page. Click The Button To
              Visit.
            </p>
            <md-button class="md-primary" href="/ideas-list"
              >TO IDEAS</md-button
            >
          </li>
          <li>
            <h3 class="text-h4">Forum</h3>
            <p>Ideas Discussion</p>
            <p>
              This Directs You To The Ideas Discussion Forum. Click The Button
              To Visit
            </p>
            <md-button class="md-primary" href="/forums">TO FORUM</md-button>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommitteeHome",
  props: {
    header: {
      type: String,
      default: require("@/assets/home.png")
    }
  },
  data() {
    return {
      comment: null
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
}
#sec {
  padding: 50px 0;
  background: #fff;
  text-align: center;
  word-wrap: break-word;
}
#sec ul {
  margin: 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  list-style: none;
}
#sec ul li {
  padding: 40px;
  width: 300px;
  transition: box-shadow 0.3s;
  box-shadow: 0 12px 12px 0 #d5d5d5, 0 12px 12px 0 #d5d5d5;
  margin: 20px;
}
#sec ul li:hover {
  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
#sec ul li:hover p {
  color: #555;
}
#sec ul li:hover h3 {
  color: #fbc02d;
}
#sec ul li:hover .md-primary {
  background-color: #fbc02d !important;
}
#sec ul li h3 {
  color: #0d47a1;
  font-size: 24px;
  font-weight: 100;
  transition: color 0.3s;
}
#sec ul li p {
  color: #a2a2a2;
  font-size: 16px;
  line-height: 26px;
  transition: color 0.3s;
}
</style>
