### Module Federation con Angular

Este es un ejemplo de como utilizar el nuevo plugin de Webpack, Module Federation para cargar otras aplicaciónes de Angular.

 - Slides TBD

**Consideraciones**
- Debes utilizar Yarn, para poder utilizar Webpack 5, atraves de resolutions.
- La recompilación automaticamente de los cambios no funciona por el momento en CLI 11, así que cualquier cambio se tiene que detener la consola y correr lo de nuevo.

**Comandos**
- `yarn install` - Instala dependencias
- `ng serve remote` - Corre remote aplicacion remota en el puerto `3000`
- `ng serve shell` - Corre remote aplicacion remota en el puerto `500`

---

### Module Federation with Angular

This is an example of how to use Angular with the new Module Federation plugin for Webpack to load other remote Angular app. 

**Consider**
- Must use Yarn, to use Webpack 5 through resolutions
- Recompilation with Yarn is not supported yet. Any change you do, you will need to rerun the command. 

**Commands**
- `yarn install` - Instala dependencias
- `ng serve remote` - Corre remote aplicacion remota en el puerto `3000`
- `ng serve shell` - Corre remote aplicacion remota en el puerto `500`
