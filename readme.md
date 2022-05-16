<div align="center">
    <img src="https://i.ibb.co/dKp7FfR/logo.png" width="512" />
</div>

Un proyecto para empezar a desarrollar Bots con la libreria ``discord.js``

## Objetivo del proyecto

Este proyecto se creo para hacer Bots de manera rapida teniendo en cuenta las funcionalidades y facilidad de modificacion que ofrece este proyecto

## Dependencias del proyecto

| Dependencias | Version                       |
|--------------|-------------------------------|
| discord.js   | 14.0.0-dev.1652573522-7ce641d |
| dotenv       | 16.0.0                        |

> _Se recomienda utilizar la version ``18.1.0`` de ``Node``_

## Gestion de directorios

```
applications\
|
|__ slash\
|   |
|   |__ example\
|       |
|       |__ main.js
|
|__ messages\
|   |
|   |__ example\
|       |
|       |__ main.js
|
|__ users\
    |
    |__ example\
        |
        |__ main.js


services\
|
|__ example\
    |
    |__ main.js


events\
|
|__ example\
    |
    |__ main.js
```

## Crear un evento

```js
import { EventBuilder } from '../../core/structures/Event.js';

export default new EventBuilder({

    // El nombre a utilizar (Automatico).
    // name: 'example',

    // La prioridad del evento para cargarlo antes que al resto (Mientras mayor sea el numero mas alta es).
    priority: 0,

    core: {

        // Si mantener los "intents" duplicados.
        dupliedIntents: false,

        // Si mantener los "partials" duplicados.
        dupliedPartials: false
    },

    // Los "intents" necesarios.
    intents: [],

    // Los "partials" necesarios.
    partials: [],

    // El evento que se va a ejecutar.
    execute: ({ client, loaders, groupers, managers, tools }) => {

        // ...
    }
});
```

## Crear un servicio

```js
import { ServiceBuilder } from '../../core/structures/Service.js';

export default new ServiceBuilder({

    // El nombre a utilizar (Automatico).
    // name: 'example',

    // La prioridad del servicio para cargarlo antes que al resto (Mientras mayor sea el numero mas alta es).
    priority: 0,

    core: {

        // Si mantener los "intents" duplicados.
        dupliedIntents: false,

        // Si mantener los "partials" duplicados.
        dupliedPartials: false
    },

    // Los "intents" necesarios.
    intents: [],

    // Los "partials" necesarios.
    partials: [],

    // Los eventos necesarios.
    events: {}
});
```

## Crear una aplicacion de barra lateral

```js
module.exports = {

    // El nombre por defecto de la aplicacion (Automatico).
    // name: 'example',

    // El nombre de la aplicacion segun el idioma.
    nameLocalizations: {

        // 'es-ES': 'ejemplo',
        // 'en-US': 'example',
        // ...
    },

    // La descripcion por defecto de la aplicacion.
    description: 'Example command',

    // La descripcion de la aplicacion segun el idioma.
    descriptionLocalizations: {

        // 'es-ES': 'Comando de ejemplo',
        // 'en-US': 'Example command',
        // ...
    },

    // El tipo de la aplicacion (Automatico).
    // type: 'message',

    // La prioridad del aplicacion para cargarlo antes que al resto (Mientras mayor sea el numero mas alta es).
    priority: 0,

    // Si la aplicacion tiene permiso por defecto.
    defaultPermission: true,

    replys: {

        // Si se tiene que responder una interaccion automaticamente.
        automatic: true,

        // Si la respuesta automatica se tiene que responder como efimera.
        private: false,

        // Los canales a ignorar si empiezan una interaccion.
        ignore: []
    },

    core: {

        // Si mantener los "intents" duplicados.
        dupliedIntents: false,

        // Si mantener los "partials" duplicados.
        dupliedPartials: false
    },

    // Los eventos a utilizar.
    events: {},

    // Los "intents" necesarios.
    intents: [],

    // Los "partials" necesarios.
    partials: [],

    // El esquema de la aplicacion (Automatico).
    // schema: {
    // 
    //  name: 'example',
    //  description: 'Example command',
    //  type: 1,
    //  defaultPermission: true,
    //  nameLocalizations: {},
    //  descriptionLocalizations: {}
    // }
};
```

## Crear una aplicacion de menu contextual para mensajes

```js
module.exports = {

    // El nombre por defecto de la aplicacion (Automatico).
    // name: 'example',

    // El nombre de la aplicacion segun el idioma.
    nameLocalizations: {

        // 'es-ES': 'ejemplo',
        // 'en-US': 'example',
        // ...
    },

    // El tipo de la aplicacion (Automatico).
    // type: 'message',

    // La prioridad del aplicacion para cargarlo antes que al resto (Mientras mayor sea el numero mas alta es).
    priority: 0,

    // Si la aplicacion tiene permiso por defecto.
    defaultPermission: true,

    replys: {

        // Si se tiene que responder una interaccion automaticamente.
        automatic: true,

        // Si la respuesta automatica se tiene que responder como efimera.
        private: false,

        // Los canales a ignorar si empiezan una interaccion.
        ignore: []
    },

    core: {

        // Si mantener los "intents" duplicados.
        dupliedIntents: false,

        // Si mantener los "partials" duplicados.
        dupliedPartials: false
    },

    // Los eventos a utilizar.
    events: {},

    // Los "intents" necesarios.
    intents: [],

    // Los "partials" necesarios.
    partials: [],

    // El esquema de la aplicacion (Automatico).
    // schema: {
    // 
    //  name: 'example',
    //  type: 2,
    //  defaultPermission: true,
    //  nameLocalizations: {}
    // }
};
```

## Crear una aplicacion de menu contextual para usuarios

```js
module.exports = {

    // El nombre por defecto de la aplicacion (Automatico).
    // name: 'example',

    // El nombre de la aplicacion segun el idioma.
    nameLocalizations: {

        // 'es-ES': 'ejemplo',
        // 'en-US': 'example',
        // ...
    },

    // El tipo de la aplicacion (Automatico).
    // type: 'user',

    // La prioridad del aplicacion para cargarlo antes que al resto (Mientras mayor sea el numero mas alta es).
    priority: 0,

    // Si la aplicacion tiene permiso por defecto.
    defaultPermission: true,

    replys: {

        // Si se tiene que responder una interaccion automaticamente.
        automatic: true,

        // Si la respuesta automatica se tiene que responder como efimera.
        private: false,

        // Los canales a ignorar si empiezan una interaccion.
        ignore: []
    },

    core: {

        // Si mantener los "intents" duplicados.
        dupliedIntents: false,

        // Si mantener los "partials" duplicados.
        dupliedPartials: false
    },

    // Los eventos a utilizar.
    events: {},

    // Los "intents" necesarios.
    intents: [],

    // Los "partials" necesarios.
    partials: [],

    // El esquema de la aplicacion (Automatico).
    // schema: {
    // 
    //  name: 'example',
    //  type: 3,
    //  defaultPermission: true,
    //  nameLocalizations: {}
    // }
};
```

## Servicios prefabricados 

### Indexer

Crea y actualiza las ``Aplicaciones`` creadas, editadas y eliminadas 

## Eventos prefabricados

### Application

Este evento ejecuta las ``Aplicaciones`` cuando se crea una interaccion

### Ready

Este evento ejecuta las ``Aplicaciones`` y ``Servicios`` al momento de establecerse la conexion

### Boot

Este evento ejecuta las ``Aplicaciones`` y ``Servicios`` al momento de inicializar el proyecto