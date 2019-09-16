# Corelibcomponent

- npm run ng -- g lib core-lib-component

## Usodepackagrparaladistribución
Este es el momento de empaquetar nuestra librería y para ello vamos a instalar la siguientedependencia:
1 $> npm install --save-dev ng-packagr

## scrip modificado
<pre>
"scripts": {
        "ng": "ng",
        "start": "ng serve",
        "build": "ng build",
        "test": "ng test",
        "lint": "ng lint",
        "e2e": "ng e2e",
        "packagr": "ng-packagr -p ng-package.json"
    },
<pre>

## ejecutar libreria
npm run packagr
