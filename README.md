# EducAPI &middot; CRUD Usuarios [![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/) #

API realizada para el proyecto final de el curso **Avanzado de Espacio Educa**.

La finalidad de este proyecto, es realizar un CRUD de Usuarios desde un proyecto de React.js.

# ¿Como consumir la API?

La API se encuentra desplegada en la web, lo que quiere decir que la podran usar desde su casa en todo momento.

PD: Puede ocurrir que al realizar la primera peticion, tarde un poco en responder, ya que el servicio inicio On Demand (solo cuando es requerido).

## Consultar usuarios existentes

Para consultar los usuarios existentes, debes hacer una peticion al endpoint de:

`https://todolist-api-9ymb.onrender.com/api/v1/getAllUsers`

Con el metodo **GET**

Y recibiras una respuesta del siguiente estilo, acompañada de un status **200**:

```
{
  "message": "Usuarios consultados correctamente",
  "usuarios": [
    {
      "id_usuario": 7,
      "tx_nombre": "John",
      "tx_apellido": "Doe",
      "st_usuario": "active",
      "tx_src_foto": "/path/to/photo.jpg",
      "tx_email": "johndoe@example.com",
      "id_documento": 123456789
    },
    {
      "id_usuario": 8,
      "tx_nombre": "Alejandro",
      "tx_apellido": "Perez",
      "st_usuario": "active",
      "tx_src_foto": "/path/to/photo.jpg",
      "tx_email": "johndoe@example.com",
      "id_documento": 987654321
    },
    {
      "id_usuario": 9,
      "tx_nombre": "John",
      "tx_apellido": "Smith",
      "st_usuario": "active",
      "tx_src_foto": "/path/to/photo.jpg",
      "tx_email": "johndoe@example.com",
      "id_documento": 123456789
    },
    {
      "id_usuario": 10,
      "tx_nombre": "Alejandro",
      "tx_apellido": "Moreno",
      "st_usuario": "active",
      "tx_src_foto": "/path/to/photo.jpg",
      "tx_email": "johndoe@example.com",
      "id_documento": 987654321
    }
  ]
}
```

## Crear un nuevo usuario

Para crear un nuevo usuario, debes hacer una peticion al endpoint de:

`https://todolist-api-9ymb.onrender.com/api/v1/insertUser`

Con el metodo **POST**

El body que se debe mandar es el siguiente:
```
{
    "tx_nombre": "John",
    "tx_apellido": "Smith",
    "tx_src_foto": "/path/to/photo.jpg",
    "tx_email": "johndoe@example.com",
    "id_documento": 123456789
}

```

Si se envia la informacion correctamente, se recibira el siguiente mensaje, acompañado de un status **200**:

```
{
    "message": "Usuario insertado correctamente"
}
```

Si no se envia la informacion correctamente, se recibira el siguiente mensaje, acompañado de un status **400** o **500**:

```
{
    "message": "Error validando los campos",
    "primerError": "tx_nombre must be a string",
    "errores": [
        {
            "columna": "tx_nombre",
            "errores": [
                "tx_nombre must be a string"
            ]
        }
    ]
}
```


## Actualizar un usuario existente

Para actualizar un usuario existente, debes hacer una peticion al endpoint de:

`https://todolist-api-9ymb.onrender.com/api/v1/updateUser`

Con el metodo **PUT**

```
{
    "id_usuario": "8",
    "tx_nombre": "Alejandro",
    "tx_apellido": "Perez",
    "st_usuario": "active",
    "tx_src_foto": "/path/to/photo.jpg",
    "tx_email": "johndoe@example.com",
    "id_documento": 987654321
}
```

Si se envia la informacion correctamente, se recibira el siguiente mensaje, acompañado de un status **200**:

```
{
    "message": "Usuario actualizado correctamente"
}
```

Si no se envia la informacion correctamente, se recibira el siguiente mensaje, acompañado de un status **400** o **500**:

```
{
    "message": "Error validando los campos",
    "primerError": "tx_apellido must be a string",
    "errores": [
        {
            "columna": "tx_apellido",
            "errores": [
                "tx_apellido must be a string"
            ]
        }
    ]
}
```

## Eliminar un usuario

Para eliminar un usuario, debes hacer una peticion al endpoint de:

`/api/v1/deleteUser`

Con el metodo **DELETE**

Este mensaje no lleva Body, sin embargo en el endpoint, se usara algo llamado parametros, lo cual se ve la siguiente forma:
```
https://todolist-api-9ymb.onrender.com/api/v1/deleteUser?id=1
```

Siendo el endpoint hasta el `delete` y despues del signo de pregunta, se enviaran los parametros, en este caso, tenemos un unico parametro, llamado **id** el cual en este caso tiene un valor de **1**

Si se envia la informacion correctamente, se recibira el siguiente mensaje, acompañado de un status **200**:

```
{
    "message": "Usuario eliminado correctamente"
}
```

Si se intenta eliminar un usuario que no existe, el servidor respondera el siguiente mensaje, con un codigo de error **404**:

```
{
    "message": "No se encontro el usuario a eliminar"
}
```

