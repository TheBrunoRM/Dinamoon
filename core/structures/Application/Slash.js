import discord from 'discord.js';

export class SlashApplicationBuilder {

    constructor (content) {

        this.type = content.type = 'slash';
        
        this.name        = content.name        ?? 'undefined';
        this.description = content.description ?? 'Undefined';

        this.description = content.priority ?? 0;

        this.defaultPermission = content.defaultPermission ?? true;

        this.options = content.options ?? [];
        this.intents = content.intents ?? [];

        this.nameLocalizations        = content.nameLocalizations        ?? {};
        this.descriptionLocalizations = content.descriptionLocalizations ?? {};
        this.events                   = content.events                   ?? {};

        // Esquema
        this.schema = {};

        this.schema.name                     = this.name;
        this.schema.description              = this.description;
        this.schema.nameLocalizations        = this.nameLocalizations;
        this.schema.descriptionLocalizations = this.descriptionLocalizations;
        this.schema.options                  = this.options;
        this.schema.defaultPermission        = this.defaultPermission;
        this.schema.type                     = discord.ApplicationCommandType.ChatInput;

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
                
            this.intents = this.intents.filter((val, ind, arr) => arr.indexOf(val) === ind);
        };
    };

    setIntents (intents) {

        this.intents = intents;
    };

    setPriority (priority) {

        this.priority = priority;
    };
};