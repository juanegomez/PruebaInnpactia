# PruebatecnicaInnpactia

Este proyecto fue generado con angular. [Angular CLI](https://github.com/angular/angular-cli) version 13.1.4.

##Framewors necesarios

Para poder iniciar el proyecto es necesario que tenga instalado lo siguiente:
- node js: En este caso se utilizó la versión 16.13.2
- Angular : En este proyecto se utilizó la versión 13.1.4.

- En caso de no tene node.js , debe ir a la página oficial de node.js https://nodejs.org/es/ , descargar el instalador y ejecutar el .exe. 
- para instalar angular es necesario tener instalado node.js, abrimos el cmd(Símbolo se sistema) de nuestro equipo y escribímos el siguiente comando para realizar la instalación de angular npm i -g @angular/cli

Una vez tengamos esto instalado procedemos a clonar el repositorio en nuestro equipo. (En caso de no tener git instalarlo).

## Clonación del repositorio 

Abrimos nuestro terminal de git bash y nos vamos a la carpeta en donde queremos clonar el repositorio.

Una vez estemos ahí pondremos el siguiente comando para clonar el repositorio:

git clone LinkRepositorio

Automáticamente se clonara una carpeta con todos los archivos del proyecto.


## Deploy del proyecto

Para poner a correr el proyecto recomiendo abir la carpeta del repositorio con visual Studio Code.

Una vez estemos en visual studio code, debemos abrir una terminal.

En la terminal vamos a colocar el siguiente comando que lo que hara es que instalará todas las dependencias necesarias para poder correr el proyecto:

npm install

Esperamos a que todas las dependencias instalen , y una vez halla terminado el proceso de instalación vamos a colocar otro comando en el terminal que es el encargado de inicializar el proyecto y así poder verlo:

npm start 

Este proceso demora un poco pero en la terminal nos saldrá un mesaje que nos dice que el servicio está corriendo. 

Una vez veamos este mensaje podemos ir al navegador que tengas de preferencia y poner la siguiente url localhost:4200 y podremos ver el proyecto funcionando.

##Funcionamiento proyecto

Una vez estamos en el navegador y en la url localhost:4200 nos encontramos con una pantalla de login en donde podemos iniciar sesión con las siguientes credenciales: 

Usuario: estdev
Contraseña: Udec123

Una vez puestas estas credenciales daremos clic en el botón de login y nos llevará a otra página en donde podremos consultar el clima de una ciudad. 

En la parte superior aparece una caja en donde ponemos el nombre de la ciudad el cual queremos saber el clima y damos clic en el botón buscar ciudad y nos mostrará el clima de esa ciudad.

También nos llenará una tabla en la parte inferior con todas las búsquedas realizadas.



 


