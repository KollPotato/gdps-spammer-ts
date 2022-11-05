import { faker } from "@faker-js/faker";
import { Account } from "./account.js";

export class Randomizer {
    static randomString(length: number): string {
        let result = "";
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    static randomUsername(): string {
        return this.randomString(8).toLowerCase()
    }

    static randomAccount(): Account {
        const username = this.randomUsername()
        const email = `${username.toLowerCase()}@gmail.com`
        const password = faker.internet.password(8, false, /[a-zA-Z0-9]/)

        return {
            username: username,
            email: email,
            password: password
        }
    }
}