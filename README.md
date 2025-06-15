# Centro de Datos

🧠 Núcleo modular que agrupa acceso a bases de datos, funciones, almacenamiento y más — diseñado para los proyectos municipales.

## 🚀 Instalación

```bash
bun add git+https://github.com/alcaldiadda/centro-de-datos.git
# o
yarn add git+https://github.com/alcaldiadda/centro-de-datos.git
```

## ⚙️ Inicialización y uso

`centro-de-datos` ofrece dos métodos principales de inicialización, adaptados a diferentes escenarios de su aplicación:

### 1. Inicialización Global (CSR / Cliente Fijo)

Utilice la función init() para configurar una instancia global y única de db y func para toda la aplicación. Este método es ideal para:

- Aplicaciones de Frontend (CSR), donde el cliente Appwrite se inicializa una vez y utiliza la misma configuración para todas las interacciones.

- Aplicaciones de Backend (Node.js) que usan un cliente administrativo con una apiKey fija, o un cliente público que no requiere contexto de usuario por solicitud.

Después de llamar a `init()`, `db` y `func` estarán disponibles como objetos de acceso directo.

```ts
import { init } from "centro-de-datos";

const APPWRITE_ENDPOINT = process.env.APPWRITE_ENDPOINT;
const APPWRITE_PROJECT_ID = process.env.APPWRITE_PROJECT_ID;
const APPWRITE_API_KEY = process.env.APPWRITE_API_KEY; // ¡Advertencia de seguridad para el frontend!

init({
  endpoint: APPWRITE_ENDPOINT,
  projectId: APPWRITE_PROJECT_ID,
  apiKey: APPWRITE_API_KEY,
});

const dispositivos = await db.asistencia.dispositivos.list([Query.limit(2)]);
```

> Si llama a `init()` en un entorno SSR/Node.js y no proporciona una `apiKey` (es decir, usa `sessionToken` o un cliente público), el SDK emitirá una advertencia. Esto se debe a que la instancia global de `db` y `func` no es adecuada para manejar sesiones de usuario dinámicas por solicitud en SSR, ya que el estado de la sesión es fijo. Para esos casos, use `CentroDeDatos()`

### 2. Inicialización por Solicitud (SSR / Contextos Dinámicos)

Utilice la función `CentroDeDatos()` para crear nuevas instancias de `db` y `func` por cada solicitud o contexto específico. Este método es esencial para:

- Next.js Server Components, API Routes, o `getServerSideProps` / `getStaticProps`: Donde cada solicitud puede tener un usuario diferente y, por lo tanto, un `sessionToken` único.

- Cualquier escenario donde necesite aislar el contexto de autenticación del SDK por cada operación o usuario.

`CentroDeDatos()` puede tomar la configuración del cliente Appwrite directamente o instancias de `Databases` y `Functions` ya construidas.

```ts
import { Client, Databases, Functions } from "node-appwrite";
import { CentroDeDatos, AppwriteClientConfig } from "centro-de-datos";
import { cookies } from "next/headers";

const SESSION_COOKIE_TOKEN = "nombre-cookie-sesion-appwrite";
const BASE_CONFIG: Omit<AppwriteClientConfig, "apiKey" | "sessionToken"> = {
  endpoint: process.env.NEXT_PUBLIC_ENDPOINT || "https://cloud.appwrite.io/v1",
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID || "YOUR_APPWRITE_PROJECT_ID",
};

/**
 * Obtiene instancias de 'db' y 'func' para el usuario actual (sesión), por solicitud.
 * Para uso en Server Components / API Routes.
 */
export async function ServiciosBaseDeDatos() {
  const session = (await cookies()).get(SESSION_COOKIE_TOKEN);

  if (!session || !session.value) {
    throw new Error("Autenticación requerida: Sesión no activa.");
  }

  // Opción 1 (Recomendada): CentroDeDatos construye el cliente internamente con la sesión
  return CentroDeDatos({
    ...BASE_CONFIG,
    sessionToken: session.value,
  });

  // Opción 2 (Alternativa): Construye el cliente Appwrite manualmente y pásalo a CentroDeDatos
  const client = new Client()
    .setEndpoint(BASE_CONFIG.endpoint)
    .setProject(BASE_CONFIG.projectId)
    .setSession(session.value);

  const databases = new Databases(client);
  const functions = new Functions(client);

  return CentroDeDatos({ databases, functions });
}

// --- Ejemplo de uso en un Server Component ---
export default async function UserDashboard() {
  let userDevices: Models.Document[] = [];
  let error: string | null = null;

  const { db, dunc } = await ServiciosBaseDeDatos();
  userDevices = (await db.asistencia.dispositivos.list()).documents;

  return (
    <div>
      <h1>Mis Dispositivos (SSR)</h1>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      <ul>
        {userDevices.length > 0
          ? userDevices.map((device) => (
              <li key={device.$id}>
                {device.name || "Dispositivo sin nombre"}
              </li>
            ))
          : !error && (
              <p>No se encontraron dispositivos o no hay sesión activa.</p>
            )}
      </ul>
    </div>
  );
}
```

## 📆 Módulos disponibles

| Módulo                                    | Descripción                                                                                                                               |
| ----------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `init(config)`                            | La función para la inicialización global del SDK.                                                                                         |
| `db`                                      | (Objeto global) Acceso tipado a sus bases de datos y colecciones de Appwrite para operaciones CRUD cuando se usa la inicialización global |
| `func`                                    | (Objeto global) Acceso a sus funciones personalizadas de Appwrite cuando se usa la inicialización global                                  |
| `CentroDeDatos(Config)`                   | La función principal para crear instancias de db y func por solicitud. Devuelve { db, func }.                                             |
| `CentroDeDatos({ databases, functions })` | Se envían las instancias de Appwrite como parametros. Devuelve { db, func }.                                                              |
| `Query`                                   | Exportado directamente desde node-appwrite para construir consultas avanzadas                                                             |

> Nota: Si intentas usar db o func antes de llamar a init(), se lanzará un error

```
Error: centro-de-datos: Debes llamar a init() antes de usar db.
Error: centro-de-datos: Debes llamar a init() antes de usar func.
```

## 🛠️ Requisitos

- Node.js ≥ 18
- Base de datos compatible (PostgreSQL, MongoDB, etc.)
- Módulos opcionales requerirán configuración adicional

## 📄 Licencia

MIT
