import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { AppLayout } from "../components/layout/AppLayout";
import { HomePage } from "../features/home/HomePage";
import { MuiPage } from "../features/mui/MuiPage";
import { ChakraPage } from "../features/chakra/ChakraPage";
import { DaisyPage } from "../features/daisy/DaisyPage";
import { QueryPage } from "../features/query/QueryPage";

const rootRoute = createRootRoute({
  component: AppLayout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const muiRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/mui",
  component: MuiPage,
});

const chakraRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/chakra",
  component: ChakraPage,
});

const daisyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/daisy",
  component: DaisyPage,
});

const queryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/query",
  component: QueryPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  muiRoute,
  chakraRoute,
  daisyRoute,
  queryRoute,
]);

export const router = createRouter({ routeTree });
