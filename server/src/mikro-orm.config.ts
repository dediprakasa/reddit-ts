import { Post } from "./entities/Post";
import { ___prod___ } from "./constans";
import { MikroORM } from "@mikro-orm/core";
import path from "path";
import { User } from "./entities/User";

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [Post, User],
  dbName: "reddit",
  type: "postgresql",
  user: "postgres",
  debug: !___prod___,
} as Parameters<typeof MikroORM.init>[0];
