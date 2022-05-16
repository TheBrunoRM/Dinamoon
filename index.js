import discord from 'discord.js';
import dotenv  from 'dotenv';

import intentsGroup  from './core/groupers/intents.js';
import eventsManager from './core/managers/events.js';

// Configura las variables de entorno
dotenv.config();

// Crea el cliente
const client = new discord.Client({

    intents: intentsGroup,

    allowedMentions: { parse: [], repliedUser: false }
});

// Ejecuta los eventos
await eventsManager(client);

// Conecta el cliente
client.login(process.env.TOKEN)
      .then(() => console.log('Conexion establecida'));