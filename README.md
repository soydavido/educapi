# 🚀 EducAPI · CRUD Usuarios [![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

API realizada para el proyecto final del curso **Avanzado de Espacio Educa**.

La finalidad de este proyecto es realizar un CRUD de Usuarios desde un proyecto de React.js.

---

## 🌐 ¿Cómo consumir la API?

La API está desplegada en la web, por lo que puedes usarla desde cualquier lugar.

> ⚠️ **Nota:** Puede que la primera petición tarde un poco en responder, ya que el servicio inicia On Demand (solo cuando es requerido).

---

## 👥 Consultar usuarios existentes

- **Endpoint:**  
  `GET https://educapi.onrender.com/api/v1/getAllUsers`

- **Respuesta exitosa:**
```json
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

---

## ➕ Crear un nuevo usuario

- **Endpoint:**  
  `POST https://educapi.onrender.com/api/v1/insertUser`

- **Body ejemplo:**
```json
{
  "tx_nombre": "John",
  "tx_apellido": "Smith",
  "tx_src_foto": "/path/to/photo.jpg",
  "tx_email": "johndoe@example.com",
  "id_documento": 123456789
}
```

- **Respuesta exitosa:**
```json
{
  "message": "Usuario insertado correctamente"
}
```

- **Respuesta de error:**
```json
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

---

## ✏️ Actualizar un usuario existente

- **Endpoint:**  
  `PUT https://educapi.onrender.com/api/v1/updateUser`

- **Body ejemplo:**
```json
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

- **Respuesta exitosa:**
```json
{
  "message": "Usuario actualizado correctamente"
}
```

- **Respuesta de error:**
```json
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

---

## 🗑️ Eliminar un usuario

- **Endpoint:**  
  `DELETE https://educapi.onrender.com/api/v1/deleteUser?id=1`

  > El parámetro `id` se pasa en la URL como query string.

- **Respuesta exitosa:**
```json
{
  "message": "Usuario eliminado correctamente"
}
```

- **Respuesta si el usuario no existe:**
```json
{
  "message": "No se encontro el usuario a eliminar"
}
```

---

## 📝 Notas

- Todos los endpoints devuelven respuestas en formato JSON.
- Los códigos de estado HTTP (`200`, `400`, `404`, `500`) indican el resultado de la operación.
- Puedes usar herramientas como [Postman](https://www.postman.com/) o [Insomnia](https://insomnia.rest/) para probar la API.

---

💻 Hecho con ❤️ para la comunidad de Espacio Educa
