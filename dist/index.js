import inquirer from "inquirer";
import { GDPSSpammer } from "./spammer.js";
const { database } = await inquirer.prompt({ name: "database", type: "input" });
const { amount } = await inquirer.prompt({ name: "amount", type: "input" });
const spammer = new GDPSSpammer(database, amount, "Wmfv3899gc9");
await spammer.start();
