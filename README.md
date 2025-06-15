# Centro de Datos

🧠 Núcleo modular que agrupa acceso a bases de datos, funciones, almacenamiento y más — diseñado para proyectos distribuidos y escalables.

## 🚀 Instalación

```bash
bun add git+https://github.com/alcaldiadda/centro-de-datos.git
# o
yarn add git+https://github.com/alcaldiadda/centro-de-datos.git
```

## ⚙️ Inicialización

Antes de usar cualquier módulo (`db`, `func`, etc.), debes inicializar el sistema:

```ts
import { init } from "centro-de-datos";

const APPWRITE_ENDPOINT = process.env.APPWRITE_ENDPOINT;
const APPWRITE_PROJECT_ID = process.env.APPWRITE_PROJECT_ID;
const APPWRITE_API_KEY = process.env.APPWRITE_API_KEY; // ¡Advertencia de seguridad para el frontend!

init(APPWRITE_ENDPOINT, APPWRITE_PROJECT_ID, APPWRITE_API_KEY);
```

## 📆 Módulos disponibles

| Módulo  | Descripción                                                                        |
| ------- | ---------------------------------------------------------------------------------- |
| `db`    | Acceso tipado a tus bases de datos y colecciones de Appwrite para operaciones CRUD |
| `func`  | Acceso a tus funciones personalizadas de Appwrite                                  |
| `Query` | Exportado directamente desde node-appwrite para construir consultas avanzadas      |

> Nota: Si intentas usar db o func antes de llamar a init(), se lanzará un error

```
Error: centro-de-datos: Debes llamar a init() antes de usar db.
Error: centro-de-datos: Debes llamar a init() antes de usar func.
```

## 🧹 Ejemplo completo

```ts
import { init, db, func, Query } from "centro-de-datos";
import { Models } from "node-appwrite";

// --- Paso 1: Inicialización ---
init(
  process.env.APPWRITE_ENDPOINT || "https://cloud.appwrite.io/v1",
  process.env.APPWRITE_PROJECT_ID || "YOUR_PROJECT_ID",
  process.env.APPWRITE_API_KEY || "YOUR_API_KEY"
);

// --- Paso 2: Usar db y func en tus operaciones ---
async function main() {
  try {
    console.log("Iniciando operaciones...");

    const dispositivos = await db.asistencia.dispositivos.list([
      Query.limit(5),
      Query.orderDesc("$createdAt"),
    ]);

    // Ejemplo con 'func': Llamar a una función personalizada
    const resultadoFuncion = await func.miFuncionDeEjemplo(
      "Dato de prueba para la función"
    );
  } catch (error) {
    console.error("Ocurrió un error:", error);
  }
}

main();
```

## 🛠️ Requisitos

- Node.js ≥ 18
- Base de datos compatible (PostgreSQL, MongoDB, etc.)
- Módulos opcionales requerirán configuración adicional

## 📄 Licencia

MIT
