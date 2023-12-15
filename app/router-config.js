import { AccountController } from "./controllers/AccountController.js";
import { InspireController } from "./controllers/InspireController.js";
import { LocationController } from "./controllers/LocationController.js";
import { AuthGuard } from "./services/AuthService.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    middleware:[AuthGuard],
    controllers: [InspireController, AccountController, LocationController],
    view:'app/views/View.html'
  },
])




