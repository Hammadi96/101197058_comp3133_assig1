import express from "express";
import mongoose from "mongoose";
import { ApolloServer } from "apollo-server-express";
import { resolvers } from "./resolver";
import { typeDefs } from "./typeDefs";


const server = async () => {
    const app = express();
    const server = new ApolloServer({
        typeDefs,
        resolvers
    })

    server.applyMiddleware({ app });

    try {

        await mongoose.connect("mongodb+srv://abubakar2000:abubakar2000@cluster0.jm8lx.mongodb.net/GraphqlDB?retryWrites=true&w=majority", { useNewUrlParser: true })
    } catch (err) {
        console.log(err)
    }


    app.get('/', (req, res) => res.send('hello world'))

    app.listen({ port: 4000 }, () => {
        console.log('connected')
    })

}

server();