import userRoutes from "./user.routes.js";
import notificationRoutes from "./notification.routes.js";

const routers = (app) => {
  app.use("/api/users", userRoutes);
  app.use("/api/notification", notificationRoutes);
};

export default routers;
