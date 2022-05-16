import discord from 'discord.js';

export class UserApplicationBuilder {

    constructor (content) {

        this.type = content.type = 'user';
        
        this.name = content.name ?? 'undefined';

        this.description = content.priority ?? 0;

        this.defaultPermission = content.defaultPermission ?? true;

        this.intents = content.intents ?? [];

        this.nameLocalizations = content.nameLocalizations        ?? {};
        this.events            = content.events                   ?? {};

        // Esquema
        this.schema = {};

        this.schema.type = 2;

        this.schema.name              = this.name;
        this.schema.nameLocalizations = this.nameLocalizations;
        this.schema.defaultPermission = this.defaultPermission;
        this.schema.type              = discord.ApplicationCommandType.ChatInput;

        // Respuestas
        this.replys = {};

        this.replys.automatic = content.replys?.automatic ?? true;
        this.replys.priority  = content.replys?.private   ?? false;

        this.replys.ignore = content.replys?.ignore ?? [];

        // Nucleo
        this.core = {};

        this.core.dupliedIntents = content.core?.dupliedIntents ?? false;
        this.core.useREST        = content.core?.useREST        ?? false;
        
        // Elimina los "intents" duplicados
        if (!this.core.dupliedIntents) {
                
            this.core.intents = this.core.intents.filter((val, ind, arr) => arr.indexOf(val) === ind);
        };
    };

    setIntents (intents) {

        this.intents = intents;
    };

    setPriority (priority) {

        this.priority = priority;
    };
};