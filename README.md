# angular-library-starter
[![Build Status](https://travis-ci.org/robisim74/angular-library-starter.svg?branch=master)](https://travis-ci.org/robisim74/angular-library-starter)
>Crea una biblioteca angular compatible con la compilación de AoT &amp; Árbol template como un paquete oficial.


Este iniciador le permite crear una biblioteca para **Angular** apps. 
El proyecto se basa en el oficial _Angular_ packages.



## Contents
* [1 Estructura del proyecto](#1)
* [2 Personalización](#2)
* [3 Testing](#3)
* [4 Building](#4)
* [5 Publishing](#5)
* [6 Documentation](#6)
* [7 Using the library](#7)
* [8 What it is important to know](#8)
* [9 Inlining of templates and stylesheets](#9)
* [Built with this starter](#built-with-this-starter)
* [Previous versions](#previous-versions)

## <a name="1"></a>1 Estructura del proyecto
- Library:
    - **src** carpeta para las clases
    - **public_api.ts** punto de entrada para todas las API públicas del paquete
    - **package.json** _npm_ opciones
    - **rollup.config.js** _Rollup_ configuración para construir el _umd_ bundles
    - **rollup.es.config.js** _Rollup_ configuración para construir el _es2015_ bundles
    - **tsconfig-build.json** _ngc_ opciones del compilador para _AoT compilation_
    - **build.js** proceso de construcción utilizando _ShellJS_
- Testing:
    - **tests** carpeta para pruebas unitarias y de integración
    - **karma.conf.js** _Karma_ configuración que utilizas _webpack_ para construir las pruebas
    - **spec.bundle.js** define los archivos utilizados por _webpack_
- Extra:
    - **tslint.json**  _Angular TSLint Preset_ (_TypeScript_ linter rules with _Codelyzer_)
    - **travis.yml** _Travis CI_ configuración

## <a name="2"></a>2 Personalización
1. Actualizar [Node & npm](https://docs.npmjs.com/getting-started/installing-node).

2. Renombrar `angular-library-starter` y `angularLibraryStarter` en todas partes para `my-library` y `myLibrary`.

3. Personaliza el `license-banner.txt` archivo con su licencia de biblioteca.

3. Actualizar en `package.json` file:
    - version: [Semantic Versioning](http://semver.org/)
    - descripción
    - urls
    - paquetes (opcional): asegúrese de usar una versión de _TypeScript_ compatible con _Angular Compiler_

    y ejecutar `npm install`.

4. Crea tus clases en`src` carpeta y exportar clases públicas en `my-library.ts`.

5. Puedes crear solo uno _module_ para toda la biblioteca: 
Te sugiero que crees diferente _modules_ para diferentes funciones, 
para que la aplicación host solo pueda importar los módulos que usa y optimizar su _Tree shaking_.

6. Update in `rollup.config.js` file `globals` external dependencies with those that actually you use to build the _umd_ bundle.

7. Create unit & integration tests in `tests` folder, or unit tests next to the things they test in `src` folder, always using `.spec.ts` extension.

## <a name="3"></a>3 Testing
The following command runs unit & integration tests that are in the `tests` folder (you can change the folder in `spec.bundle.js` file): 
```Shell
npm test 
```
or in watch mode:
```Shell
npm run test:watch
```
It also reports coverage using _Istanbul_.

## <a name="4"></a>4 Building
The following command:
```Shell
npm run build
```
- starts _TSLint_ with _Codelyzer_ using _Angular TSLint Preset_
- starts _AoT compilation_ using _ngc_ compiler
- creates `dist` folder with all the files of distribution, following _Angular Package Format (APF)_:
```
└── dist
    ├── bundles
    |   ├── my-library.umd.js
    |   ├── my-library.umd.js.map
    |   ├── my-library.umd.min.js
    |   └── my-library.umd.min.js.map
    ├── esm5
    |   ├── **/*.js
    |   └── **/*.js.map
    ├── esm2015
    |   ├── **/*.js
    |   └── **/*.js.map
    ├── fesm5
    |   ├── my-library.js
    |   └── my-library.js.map
    ├── fesm2015
    |   ├── my-library.js
    |   └── my-library.js.map
    ├── src
    |   └── **/*.d.ts
    ├── my-library.d.ts
    ├── my-library.metadata.json
    ├── LICENSE
    ├── package.json
    ├── public_api.d.ts
    └── README
```
To test locally the npm package before publishing:
```Shell
npm run pack:lib
```
Then you can install it in an app to test it:
```Shell
npm install [path]my-library-{version}.tgz
```

## <a name="5"></a>5 Publishing
Before publishing the first time:
- you can register your library on [Travis CI](https://travis-ci.org/): you have already configured `.travis.yml` file
- you must have a user on the _npm_ registry: [Publishing npm packages](https://docs.npmjs.com/getting-started/publishing-npm-packages)

```Shell
npm run publish:lib
```

## <a name="6"></a>6 Documentation
To generate the documentation, this starter uses [compodoc](https://github.com/compodoc/compodoc):
```Shell
npm run compodoc
npm run compodoc:serve 
```

## <a name="7"></a>7 Using the library
### Installing
```Shell
npm install my-library --save 
```
### Loading
#### Angular-CLI
No need to set up anything, just import it in your code.
#### Rollup or webpack
No need to set up anything, just import it in your code.
#### Using SystemJS configuration
```JavaScript
System.config({
    map: {
        'my-library': 'node_modules/my-library/bundles/my-library.umd.js'
    }
});
```
#### Plain JavaScript
Include the `umd` bundle in your `index.html`:
```Html
<script src="node_modules/my-library/bundles/my-library.umd.js"></script>
```
and use global `ng.myLibrary` namespace.

### AoT compilation
The library is compatible with _AoT compilation_.

## <a name="8"></a>8 What it is important to know
1. `package.json`

    * `"main": "./bundles/angular-library-starter.umd.js"` legacy module format 
    * `"module": "./esm5/angular-library-starter.js"` flat _ES_ module, for using module bundlers such as _Rollup_ or _webpack_
    * `"es2015": "./esm2015/angular-library-starter.js"` _ES2015_ flat _ESM_ format
    * `"typings"` declaration files for _TypeScript_ compiler
    * `"peerDependencies"` the packages and their versions required by the library when it will be installed

2. `tsconfig.json` file used by _TypeScript_ compiler

    * Compiler options:
        * `"strict": true` enables _TypeScript_ `strict` master option

3. `tsconfig-build.json` file used by _ngc_ compiler

    * Compiler options:
        * `"declaration": true` to emit _TypeScript_ declaration files
        * `"module": "es2015"` & `"target": "es2015"` are used by _Rollup_ to create the _ES2015_ bundle

    * Angular Compiler Options:
        * `"enableResourceInlining": true` inlining of templates & styles
        * `"skipTemplateCodegen": true` skips generating _AoT_ files
        * `"annotateForClosureCompiler": true` for compatibility with _Google Closure compiler_
        * `"strictMetadataEmit": true` without emitting metadata files, the library will not be compatible with _AoT compilation_: it is intended to report syntax errors immediately rather than produce a _.metadata.json_ file with errors
        * `"flatModuleId": "@scope/package"` full package name has to include scope as well, otherwise AOT compilation will fail in the consumed application

4. `rollup.config.js` file used by _Rollup_

    * `format: 'umd'` the _Universal Module Definition_ pattern is used by _Angular_ for its bundles
    * `moduleName: 'ng.angularLibraryStarter'` defines the global namespace used by _JavaScript_ apps
    * `external` & `globals` declare the external packages

5. Server Side Rendering

    If you want the library will be compatible with Server Side Rendering:
    * `window`, `document`, `navigator` and other browser types do not exist on the server
    * don't manipulate the _nativeElement_ directly

## <a name="9"></a>9 Inlining of templates and stylesheets
Now _ngc_ compiler supports inlining of templates & styles. Moreover, this starter allows you to use `.scss` _sass_ files. If you need, you can use different pre-processors.

## <a name="built-with-this-starter"></a>Built with this starter
- [angular-l10n](https://github.com/robisim74/angular-l10n) *An Angular library to translate messages, dates and numbers*
- [angular-auth-oidc-client](https://github.com/damienbod/angular-auth-oidc-client) *An OpenID Connect Implicit Flow client for Angular*
- [ngx-infinite-scroll](https://github.com/orizens/ngx-infinite-scroll) *An infinite scroll directive for Angular compatible with AoT compilation and Tree shaking*
- [ngx-typeahead](https://github.com/orizens/ngx-typeahead) *A simple but yet powerful typeahead component for Angular*
- [ng2-youtube-player](https://github.com/orizens/ng2-youtube-player) *A Powerful Youtube Player Component for Angular*
- [ng2-completer](https://github.com/oferh/ng2-completer) *Angular autocomplete component*
- [ngx-store](https://github.com/zoomsphere/ngx-store) *Angular Storage library for managing `localStorage`, `sessionStorage` and cookies, allowing to watch storage changes. Includes easy-to-use decorators, services and API based on builder pattern.*
- [ngx-table-editor](https://github.com/maurei/ngx-table-editor) *A library for Angular that transforms HTML tables into dynamic editable components.*
- [ngx-ui-scroll](https://github.com/dhilt/ngx-ui-scroll) *An Angular `*ngFor`-like directive for infinite/virtual scrolling*


MIT
