import "./utils/config";
import "./utils/db";
import "./utils/env";

import { BotClient } from "./structures/client";
const client = new BotClient();

client.connect();
client.register();
