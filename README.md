# EducAPI

API realizada para el proyecto final de el curso **Avanzado de Espacio Educa**

## ¿Como consumir la API?

#### Consultar usuarios existentes

Para consultar los usuarios existentes, debes hacer una peticion al endpoint de:

`/api/v1/getAllUsers`

Y recibiras una respuesta del siguiente estilo

#### Crear un nuevo usuario

Para crear un nuevo usuario, debes hacer una peticion al endpoint de:

`/api/v1/insertUser`

El body que se debe mandar es el siguiente:
```
{
    "tx_nombre": "John",
    "tx_apellido": "Smith",
    "dt_fecha_nacimiento": "1980-01-01T00:00:00.000Z",
    "st_usuario": "active",
    "tx_src_foto": "/path/to/photo.jpg",
    "tx_alt_src_foto": "Alternative text for photo",
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


#### Actualizar un usuario existente

Para actualizar un usuario existente, debes hacer una peticion al endpoint de:

`/api/v1/updateUser`

```
{
    "id_usuario": "6",
    "tx_nombre": "Alejandro",
    "tx_apellido": "Gonzalez",
    "dt_fecha_nacimiento": "1990-02-02T00:00:00.000Z",
    "st_usuario": "active",
    "tx_src_foto": "/path/to/photo.jpg",
    "tx_alt_src_foto": "Alternative text for photo",
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
