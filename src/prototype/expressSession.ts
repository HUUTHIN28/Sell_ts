import { loginCreate } from "../interfaces/user";

declare module "express-session" {
  interface SessionData {
    account: loginCreate;
  }
}
