import userRoutes from "./user.routes.js";
import notificationRoutes from "./notification.routes.js";
import caseRoutes from "./case.routes.js";

const routers = (app) => {
  app.use("/api/users", userRoutes);
  app.use("/api/case", caseRoutes);
  app.use("/api/notification", notificationRoutes);
};

export default routers;
