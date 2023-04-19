# Backend Huellitas - clinica veterinaria

Este backend pertenece al proyecto _Huellitas Clínica Veterinaria_ 



>Indice
>-  [Tecnologías](#las-tecnologías-utilizadas-son-las-siguientes)
>- [Backend Local]()
>   - [Requisitos ]()
>   - [Preparación]()
>       - [Variables de Entorno]()
>   - [Scripts]()
>- [Desarrolladores]()

### Las tecnologías utilizadas son las siguientes:

> _Lenguage: Typescript_  
> _Frameorks: ExpressJS, Prisma, Firebase,_  
> _Base de datos: PostgreSQL_

## Desplegar backend a nivel local

> _Cuando quieres trabajar con esto, es completamente recomendable trabajar a nivel local, para asi no modificar el servidor ya existente en la nube_

Para desplegar el backend a nivel local, primero existen unos requisitos necesarios para lograr su correcto funcionamiento. Los requisitos de este proyecto, son los siguientes:

> ### Requisitos del proyecto
> - Tener instalado [NodeJS](https://nodejs.org/)
> - Tener instalado [PostgreSQL](https://www.postgresql.org)  
> - Tener instalado Typescript

### Preparación

Luego de estar seguro y tener instalados los requisitos necesarios para correr el proyecto, puedes proceder a realizar los siguietnes pasos:

>1. Clonar este repositorio en tu servidor o de manera local
>2. Dirigirte o pararte, desde la consola, en la carpeta `api` con el comando `cd api` (si es que no estas sobre esta carpeta)  
>3. Deberás crear una nueva base de datos en tu PostgreSQL. Conserva el nombre, lo necesitaras para las variables de entorno.
>4. Definir las varialbes de entorno para que funcione el proyecto. Las variables de entorno son las siguientes: 
>
>```js
>PORT = 3001
>
>BC_ROUNDS = 10 
>JWT_SECRET = QUxhR3JhbmRlTGVQdXNlQ3VjYQ
>JWT_EXPIRE_IN = 2h
>//En la URL, cambia los campos que estan entre picoparentesis con los correspondientes a tu base de datos
>DATABASE_URL = "postgresql://<db_user>:<db_password>@<db_host>:<db_port>/<db_name>?schema=public"
>
>NODE_ENV = development
>
>//este valor lo puedes cambiar por el que te parezca. Simplemente es un valor 
>JWT_SECRET=ZXN0YSBlcyB1bmEga2V5IHNlY3JldGEgYXNpIHF1ZSBjdWFscXVpZXIgcGlyb2JvIG5vIGxhIGRlYmUgdGVuZXI 
>//El tiempo de expiración es 2 horas, pero puedes cambiarlo
>JWT_EXPIRE_IN=2h
>
>FIREBASE_API_KEY=//La api-kei de tú firebase
>FIREBASE_PROJECT_ID=//la id de proyecto de tú firebase
>FIREBASE_STORAGE=//el storage de tú proyecto de firebase
>FIREBASE_API_ID=//La api_id de tú proyecto de firebase
>```
>> _Cabe aclarar que no debes poner ningun nombre de las variables a de como están escritas. Sino, el proyecto no funcionará._
>
>
>5. Ejecutar los sigueintes comandos desde la consola, estando colocado en api.
>
>```bash
># Para instalar las dependencias del proyecto
>npm i
>npm run prisma:gen
>npm run primsa:push
>```


> .env example
