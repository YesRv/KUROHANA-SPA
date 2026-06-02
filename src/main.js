import { landingView } from "./views/landingView.js";
import { landingController } from "./controllers/landingController.js";

import { loginView } from "./views/loginView.js";
import { loginController } from "./controllers/loginController.js";

import { homeView } from "./views/homeView.js";
import { initHome } from "./controllers/homeController.js";

import routerMiddleware from "./middlewares/router.js";

const appContainer = document.getElementById("app");
const loginRoot = document.getElementById("login-root");

// Si no hay hash, forzar landing
if (!window.location.hash) {
  window.location.hash = "#landing";
}

const router = {
  home: {
    view: homeView,
    controller: async () => {
      await initHome(
        localStorage.getItem("username") || "User",
        localStorage.getItem("role") || "user",
        appContainer,
      );
    },
  },

  login: {
    view: loginView,
    controller: async () => {
      await loginController(appContainer, loginRoot);
    },
  },

  landing: {
    view: landingView,
    controller: async () => {
      await landingController();
    },
  },
};

function handleRoute() {
  routerMiddleware(router, appContainer, loginRoot);
}

document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("hashchange", handleRoute);
  handleRoute();
});