import { Post } from "./entitites/Post";
import { ___prod___ } from "./constans";
import { MikroORM } from "@mikro-orm/core";
import path from "path";

console.log(">>>>", __dirname);
export default {
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [Post],
  dbName: "reddit",
  type: "postgresql",
  user: "postgres",
  password: "ubuntu",
  debug: !___prod___,
} as Parameters<typeof MikroORM.init>[0];
