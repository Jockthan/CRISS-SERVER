import userRoutes from "./user.routes.js";

const routers = (app) => {
  app.use("/api/users", userRoutes);
};

export default routers;
