# Ejercicio 0.5
Diagrama de la secuencia en la aplicación de una sola página [spa](https://studies.cs.helsinki.fi/exampleapp/spa) cuando entra el usuario
por primera vez

```mermaid
  sequenceDiagram
    participant navegador
    participant servidor

    navegador->>servidor: Petición GET HTTP https://studies.cs.helsinki.fi/exampleapp/spa
    activate servidor
    servidor-->>navegador: Archivo HTML spa
    deactivate servidor

    navegador->>servidor: Petición de HTML GET HTTP https://studies.cs.helsinki.fi/exampleapp/spa/main.css
    activate servidor
    servidor-->>navegador: Archivo CSS main.css
    deactivate servidor

    navegador->>servidor: Petición de HTML GET HTTP https://studies.cs.helsinki.fi/exampleapp/spa/spa.js
    activate servidor
    servidor-->>navegador: Archivo Js spa.js
    deactivate servidor

    navegador->>servidor: Petición de HTML GET HTTP https://studies.cs.helsinki.fi/exampleapp/spa/data.json
    activate servidor
    servidor-->>navegador: Archivo Json data.json
    deactivate servidor

```
