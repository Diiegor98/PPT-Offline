import { homePage } from "./pages/home";
import { instructionsPage } from "./pages/instructions";
import { gamePage } from "./pages/game";
import { confrontationPage } from "./pages/confrontation";
import { scorePage } from "./pages/score";

const routes = [
  {
    path: /\/home/,
    component: homePage,
  },
  {
    path: /\/instructions/,
    component: instructionsPage,
  },
  {
    path: /\/game/,
    component: gamePage,
  },
  {
    path: /\/confrontation/,
    component: confrontationPage,
  },
  {
    path: /\/score/,
    component: scorePage,
  },
];

const BASE_PATH = "/PPT-Offline";

//Esta funcion devuelve true o false dependiendo si estamos en gh-pages
function isGitHubPages() {
  return location.host.includes("github.io");
}

export function initRouter(container) {
  function goTo(path) {
    const completePath = isGitHubPages() ? BASE_PATH + path : path;
    history.pushState({}, "", completePath);
    handleRoute(completePath);
  }
  function handleRoute(route) {
    console.log(" el handleRoute recibio una ruta", route);
    const newRoute = isGitHubPages() ? route.replace(BASE_PATH, "") : route;
    container.innerHTML = "";

    let routeFound = false;

    for (const r of routes) {
      if (r.path.test(newRoute)) {
        r.component({ goTo: goTo });
        routeFound = true;
        break;
      }
    }
    if (!routeFound) {
      console.log("Ruta no encontrada:", newRoute);
    }
  }
  if (location.pathname == "/") {
    goTo("/home");
  } else {
    handleRoute(location.pathname);
  }
  window.onpopstate = function () {
    handleRoute(location.pathname);
  };
}
