Install Dependencies

```bash
npm install
```

After installing the dependencies, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can now begin the [Course App Overview](https://frontendmasters.com/courses/fullstack-app-next/course-app-overview/) lesson.

You can also view the [completed project](https://github.com/Hendrixer/fullstack-music) for more information.



VAMO A ESCRIBIR COSAS AQUI Q NO ESCRIBIR N EL CURSO ANTERIOR Y DESPUES LAS VAMOS A PASAR AL GITBOOK EN INGLES :B

PRIMERO TENEMOS Q CREAR NUESTRA CARPETA DE PRISMA.

npx prisma init

npx prisma migrate dev

npx prisma studio

npx prisma migrate reset db

npx prisma db seed


para resetear la db debemos borrar las migraciones, PORFAVOR NO HACER ESTO DESPUES DE TENER DATA EN ESTO.


El error que estabamos teniendo en el signup, era pq cambiamos el secreto del JWT, debemos encontrar una forma más fancy de mostrar el error cuando el usuario no tenga autorizacion.


TODOS

Cuando creamos una carrera debe tirarnos a la URL de la carrera creada.


GUIA PARA CREAR ESTRATEGIA =>
Usuario corre 4 horas => hora tiene marca más grande => desglozar cada 15min if possible

Calculo cada 30min es el excel


FOODS =>
El usuario va a tener un tener que llenar un formulario para poder agregar una comida
Existiran ejemplos genericos para rapides.


https://github.com/prisma/prisma/discussions/4399 => estamos teniendo el error de tener muchas instancias de Prisma abiertas, tenemos q fixear esto :)