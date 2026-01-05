import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import fs from "fs";

const typeDefs = fs.readFileSync("./src/schema.graphql", "utf8");

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query: {
      ping: (): string => "pong"
    }
  }
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 }
});

console.log(`🚀 Server ready at ${url}`);