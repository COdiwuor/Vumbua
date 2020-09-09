import Vue from "vue";
import Router from "vue-router";
import Login from "./views/Login.vue";
import SignUp from "./views/SignUp.vue";
import Profile from "./views/Profile.vue";
import Home from "./views/Home.vue";
import CommitteeHome from "./views/committee/Home";
import MainNavbar from "./layout/MainNavbar.vue";
import MainFooter from "./layout/MainFooter.vue";
import ForgotPassword from "./views/ForgotPassword";
import Ideas from "./views/ideas/Ideas";
import CreateIdea from "./views/ideas/CreateIdea";
import IdeasList from "./views/committee/IdeasList";
import Forums from "./views/committee/Forums";
import IncubatorHome from "./views/incubator/IncubatorHome";
import IncubatorIdea from "./views/incubator/IncubatorIdea";
import Offer from "./views/incubator/Offer";
import SingleIdea from "./views/ideas/SingleIdea";
import IdeaCategories from "./views/ideas/IdeaCategories";
import SingleCategory from "./views/ideas/SingleCategory";
import Test from "./views/Test";
import SingleForum from "./views/committee/SingleForum";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "index",
      components: { default: Home, header: MainNavbar, footer: MainFooter }
    },
    {
      path: "/login",
      name: "login",
      components: { default: Login, header: MainNavbar }
    },
    {
      path: "/forgot-password",
      name: "forgot-password",
      components: { default: ForgotPassword, header: MainNavbar }
    },
    {
      path: "/signup",
      name: "signup",
      components: { default: SignUp, header: MainNavbar }
    },
    {
      path: "/profile",
      name: "profile",
      components: { default: Profile, header: MainNavbar, footer: MainFooter }
    },
    {
      path: "/home",
      name: "home",
      components: { default: Home, header: MainNavbar, footer: MainFooter }
    },
    {
      path: "/ideas",
      name: "ideas",
      components: { default: Ideas, header: MainNavbar, footer: MainFooter }
    },
    {
      path: "/create-idea",
      name: "create-idea",
      components: {
        default: CreateIdea,
        header: MainNavbar,
        footer: MainFooter
      }
    },
    {
      path: "/committee-home",
      name: "committee-home",
      components: {
        default: CommitteeHome,
        header: MainNavbar,
        footer: MainFooter
      }
    },
    {
      path: "/ideas-list",
      name: "ideas-list",
      components: {
        default: IdeasList,
        header: MainNavbar,
        footer: MainFooter
      }
    },
    {
      path: "/forums",
      name: "forums",
      components: {
        default: Forums,
        header: MainNavbar,
        footer: MainFooter
      }
    },
    {
      path: "/single-forum",
      name: "single-forum",
      components: {
        default: SingleForum,
        header: MainNavbar,
        footer: MainFooter
      }
    },
    {
      path: "/incubator-home",
      name: "incubator-home",
      components: {
        default: IncubatorHome,
        header: MainNavbar,
        footer: MainFooter
      }
    },
    {
      path: "/incubator-idea",
      name: "incubator-idea",
      components: {
        default: IncubatorIdea,
        header: MainNavbar,
        footer: MainFooter
      }
    },
    {
      path: "/offer",
      name: "offer",
      components: {
        default: Offer,
        header: MainNavbar,
        footer: MainFooter
      }
    },
    {
      path: "/single-idea",
      name: "single-idea",
      components: {
        default: SingleIdea,
        header: MainNavbar,
        footer: MainFooter
      }
    },
    {
      path: "/idea-categories",
      name: "idea-categories",
      components: {
        default: IdeaCategories,
        header: MainNavbar,
        footer: MainFooter
      }
    },
    {
      path: "/single-category",
      name: "single-category",
      components: {
        default: SingleCategory,
        header: MainNavbar,
        footer: MainFooter
      }
    },
    {
      path: "/test",
      name: "test",
      components: {
        default: Test,
        header: MainNavbar,
        footer: MainFooter
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
