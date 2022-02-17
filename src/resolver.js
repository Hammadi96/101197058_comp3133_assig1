import { listing } from "./models/listing";
import { test } from "./models/test";
import { user } from "./models/user";

export const resolvers = {
    Query: {
        helloWorld: () => 'hello world',
        tests: () => test.find(),
        listings: () => listing.find(),
        users: () => user.find(),
    },
    Mutation: {
        createtest: async (_, { name }) => {
            const data = new test({ name });
            await data.save();
            return data;
        },
        createlisting: async (_, {
            listing_id,
            listing_title,
            description,
            street,
            city,
            postal_code,
            price,
            email,
            username
        }) => {
            const data = new listing({
                listing_id,
                listing_title,
                description,
                street,
                city,
                postal_code,
                price,
                email,
                username
            });
            await data.save();
            return data;
        },
        createuser: async (_, {
            username,
            firstname,
            lastname,
            password,
            email,
            type
        }) => {
            const data = new user({
                username,
                firstname,
                lastname,
                password,
                email,
                type
            });
            await data.save();
            return data;
        }
    }
}