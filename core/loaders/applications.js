import fs   from 'node:fs';
import path from 'node:path';

import { 
    
    slashApplicationsPath,
    userApplicationsPath,
    messageApplicationsPath
} from '../managers/directory.js';

import { SlashApplicationBuilder   } from '../structures/Application/Slash.js';
import { UserApplicationBuilder    } from '../structures/Application/User.js';
import { MessageApplicationBuilder } from '../structures/Application/Message.js';

let loadedApplications = [];

const slashApplicationsFolders = fs.readdirSync(slashApplicationsPath)
                                   .filter((val) => !val.startsWith('.'));

const userApplicationsFolders = fs.readdirSync(userApplicationsPath)
                                  .filter((val) => !val.startsWith('.'));

const messageApplicationsFolders = fs.readdirSync(messageApplicationsPath)
                                     .filter((val) => !val.startsWith('.'));

for (const _folder of slashApplicationsFolders) {

    // Genera la ruta exacta del archivo
    const filePath = path.join(slashApplicationsPath, _folder, 'main.js');

    // Importa el contenido del archivo
    let fileContent = await import(`file://${filePath}`);

    // Construye la aplicacion
    fileContent = new SlashApplicationBuilder({
        
        ...fileContent.default,
    
        name: _folder
    });

    loadedApplications.push(fileContent);
};

for (const _folder of userApplicationsFolders) {

    // Genera la ruta exacta del archivo
    const filePath = path.join(userApplicationsPath, _folder, 'main.js');

    // Importa el contenido del archivo
    let fileContent = await import(`file://${filePath}`);

    // Construye la aplicacion
    fileContent = new UserApplicationBuilder({
        
        ...fileContent.default,
    
        name: _folder
    });

    loadedApplications.push(fileContent);
};

for (const _folder of messageApplicationsFolders) {

    // Genera la ruta exacta del archivo
    const filePath = path.join(messageApplicationsPath, _folder, 'main.js');

    // Importa el contenido del archivo
    let fileContent = await import(`file://${filePath}`);

    // Construye la aplicacion
    fileContent = new MessageApplicationBuilder({
        
        ...fileContent.default,
    
        name: _folder
    });

    loadedApplications.push(fileContent);
};

// Organiza los archivos importados por su prioridad
loadedApplications = loadedApplications.sort((a, b) => b.priority - a.priority);

export default loadedApplications;