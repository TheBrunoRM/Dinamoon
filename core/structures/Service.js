export class ServiceBuilder {

    constructor (content) {

        this.name = content.name ?? 'undefined';
    
        this.priority = content.priority ?? 0;
        
        this.intents = content.intents ?? [];

        this.events = content.events ?? {};

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