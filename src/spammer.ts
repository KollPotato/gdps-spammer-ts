import { Account } from "./account.js";
import chalk from "chalk";
import { Randomizer } from "./randomizer.js";
import fetch from "node-fetch"
import url from "url"

export class GDPSSpammer {
    constructor(public database: string, public amount: number, public secret: string) { }

    async registerAccount({ username, email, password }: Account) {
        const url = `${this.database}/accounts/registerGJAccount.php`

        const data = {
            "userName": username,
            "email": email,
            "password": password,
            "secret": this.secret
        };

        let body: string | Array<string> = [];

        for (let property in data) {
            let key = encodeURIComponent(property);
            let value = encodeURIComponent(data[property]);
            body.push(`${key}=${value}`);
        }

        body = body.join("&");

        await fetch(url, {
            method: "post",
            body: body,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                "User-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36"
            }
        })
    }

    async start() {
        for (let i = 0; i < this.amount; i++) {
            const { username, email, password } = Randomizer.randomAccount()
            console.log(`Created user:\n    Username: ${username}\n    Email: ${email}\n    Password: ${password}`)
            await this.registerAccount({ username, email, password })
        }
    }
}