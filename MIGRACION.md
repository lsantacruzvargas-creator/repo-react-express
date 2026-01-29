# Migración Alcoinsac: PHP → React + Express

Este documento detalla la migración completa del sitio web de Alcoinsac de PHP a una arquitectura moderna con **React** (frontend) y **Express** (backend).

---

## 📋 Contenido de la Migración

### **1. Estructura del Proyecto**

```
repo-react-express/
├── frontend/                      # Aplicación React con Vite
│   ├── src/
│   │   ├── components/           # Componentes reutilizables
│   │   │   ├── Navbar.jsx       # Barra de navegación
│   │   │   ├── Footer.jsx       # Pie de página
│   │   │   ├── Banner.jsx       # Banner reutilizable
│   │   │   ├── CardMVV.jsx      # Tarjetas Misión/Visión/Valores
│   │   │   └── ServiceCard.jsx  # Tarjetas de servicios
│   │   ├── pages/               # Páginas principales
│   │   │   ├── Home.jsx         # Página de inicio
│   │   │   ├── ServicioDetail.jsx   # Detalle de servicios
│   │   │   ├── MantenimientoDetail.jsx # Detalle de mantenimientos
│   │   │   ├── NosotrosDetail.jsx # Secciones Misión/Visión/Valores
│   │   │   └── Contacto.jsx     # Página de contacto
│   │   ├── App.jsx              # Componente principal
│   │   ├── main.jsx             # Punto de entrada
│   │   └── index.css            # Estilos globales
│   ├── index.html               # HTML principal
│   ├── vite.config.js           # Configuración de Vite
│   ├── package.json             # Dependencias del frontend
│   └── .env                     # Variables de entorno
│
├── backend/                      # Servidor Express
│   ├── server.js                # Servidor principal
│   ├── routes/                  # Rutas API
│   ├── controllers/             # Lógica de negocio
│   ├── middleware/              # Middlewares personalizados
│   ├── package.json             # Dependencias del backend
│   └── .env                     # Variables de entorno
│
├── public/                      # Archivos estáticos
│   ├── img/                     # Imágenes
│   ├── fonts/                   # Fuentes personalizadas
│   └── favicon.ico              # Favicon
│
├── css/                         # CSS original (referencia)
├── js/                          # JavaScript original (referencia)
└── README.md                    # Este archivo

```

---

## 🔄 ¿Qué Cambió en la Migración?

### **De PHP a React**

| Aspecto | PHP (Antiguo) | React (Nuevo) | Ventaja |
|--------|---------------|---------------|---------|
| **Renderizado** | Server-side (SSR) | Client-side (CSR) | Más rápido, interactivo |
| **Componentes** | Include de archivos PHP | Componentes JSX reutilizables | Código más limpio y mantenible |
| **Navegación** | Recarga de página completa | SPA con React Router | Navegación fluida sin recarga |
| **Estilos** | CSS global | CSS + módulos | Estilos mejor organizados |
| **Datos** | PHP + Base de datos | API REST | Separación clara frontend/backend |

### **Componentes Creados**

1. **Navbar.jsx** - Barra de navegación con menús desplegables
2. **Footer.jsx** - Pie de página con información de contacto y redes sociales
3. **Banner.jsx** - Componente reutilizable para banners con video/imagen
4. **CardMVV.jsx** - Tarjetas para Misión, Visión, Valores
5. **ServiceCard.jsx** - Tarjetas para servicios
6. **Home.jsx** - Página principal con todas las secciones
7. **ServicioDetail.jsx** - Página de detalle para cada servicio
8. **MantenimientoDetail.jsx** - Página de tipos de mantenimiento
9. **NosotrosDetail.jsx** - Páginas de Misión, Visión y Valores
10. **Contacto.jsx** - Formulario de contacto

---

## 🚀 Instalación y Ejecución

### **Requisitos Previos**
- Node.js v16 o superior
- npm o yarn

### **Paso 1: Instalar Dependencias**

#### Frontend:
```bash
cd frontend
npm install
```

#### Backend:
```bash
cd ../backend
npm install
```

### **Paso 2: Configurar Variables de Entorno**

**Frontend** (`frontend/.env`):
```
VITE_API_URL=http://localhost:5000/api
```

**Backend** (`backend/.env`):
```
NODE_ENV=development
PORT=5000
API_URL=http://localhost:5000
```

### **Paso 3: Ejecutar en Desarrollo**

#### Terminal 1 - Backend:
```bash
cd backend
npm run dev
```
El servidor estará en: `http://localhost:5000`

#### Terminal 2 - Frontend:
```bash
cd frontend
npm run dev
```
La aplicación estará en: `http://localhost:5173`

---

## 🔨 Build para Producción

### **Frontend:**
```bash
cd frontend
npm run build
```
Genera la carpeta `dist/` con los archivos optimizados.

### **Backend:**
```bash
cd backend
npm start
```

---

## 📁 Rutas de la Aplicación

| Ruta | Componente | Descripción |
|------|-----------|-------------|
| `/` | Home | Página de inicio |
| `/servicios/:servicioId` | ServicioDetail | Detalle de servicio |
| `/mantenimientos/:tipoId` | MantenimientoDetail | Tipo de mantenimiento |
| `/nosotros/:seccionId` | NosotrosDetail | Misión, Visión, Valores |
| `/contacto` | Contacto | Formulario de contacto |

### **Servicios Disponibles:**
- `rebobinado-de-motores`
- `alineacion-de-motores`
- `sistema-de-pozo-a-tierra`
- `analisis-vibracional`
- `analisis-termografico`

### **Mantenimientos Disponibles:**
- `preventivo`
- `correctivo`
- `predictivo`

### **Secciones Sobre Nosotros:**
- `mision`
- `vision`
- `valores`

---

## 🎨 Estilos

Los estilos CSS se encuentran en:
- **Global:** `frontend/src/index.css` - Contiene todos los estilos CSS globales migrados de PHP
- **Componentes:** Cada componente puede tener su propio CSS (actualmente en `index.css`)

### **Variables CSS Globales:**
```css
--color-fondo: rgb(253, 122, 75)     /* Naranja principal */
--color-borde: rgb(20, 20, 95)       /* Azul oscuro */
```

---

## 📦 Dependencias Principales

### **Frontend:**
- **React** 18.2.0 - Librería UI
- **React Router DOM** 6.20.0 - Enrutamiento
- **Vite** 5.0.8 - Empaquetador
- **Bootstrap** 5.3.2 - Framework CSS
- **Axios** 1.6.2 - Cliente HTTP (opcional para llamadas API)

### **Backend:**
- **Express** 4.18.2 - Framework web
- **CORS** 2.8.5 - Permitir solicitudes cross-origin
- **Body Parser** 1.20.2 - Parsear JSON
- **Dotenv** 16.3.1 - Variables de entorno

---

## 🔌 API Endpoints

### **Salud del Servidor:**
```
GET /api/health
```

Respuesta:
```json
{
  "status": "OK",
  "message": "Servidor funcionando correctamente"
}
```

---

## 🔒 Estructura de Carpetas - Explicación Detallada

### **`frontend/src/components/`**
Componentes reutilizables que se usan en múltiples páginas:
- **Navbar**: Menú de navegación con React Router
- **Footer**: Pie de página con links de contacto
- **Banner**: Componente flexible para mostrar imágenes/videos

### **`frontend/src/pages/`**
Componentes que representan páginas completas:
- **Home**: Página principal con todas las secciones
- **ServicioDetail**: Página dinámica para cada servicio
- **MantenimientoDetail**: Página dinámica para cada tipo de mantenimiento
- **NosotrosDetail**: Páginas de Misión/Visión/Valores
- **Contacto**: Formulario de contacto

### **`backend/`**
- **server.js**: Configura Express, CORS, y sirve archivos estáticos
- **routes/**: Futuras rutas API para datos dinámicos
- **controllers/**: Lógica de negocio para cada endpoint
- **middleware/**: Middlewares personalizados (autenticación, validación, etc.)

---

## 🔄 Próximos Pasos para Completar la Migración

1. **Base de datos**: Implementar MongoDB o PostgreSQL para almacenar datos dinámicos
2. **API completa**: Crear endpoints para crear, leer, actualizar y eliminar (CRUD) servicios
3. **Autenticación**: Implementar autenticación para administrar contenido
4. **Formulario de contacto**: Conectar con servicio de emails (Nodemailer, SendGrid)
5. **SEO**: Implementar Next.js para Server-Side Rendering (SSR) si es necesario
6. **Deploy**: Subir a plataformas como Vercel, Heroku, AWS, etc.

---

## 📝 Notas Importantes

### **Archivos Estáticos**
- Las imágenes, fuentes y otros archivos estáticos deben ir en la carpeta `public/`
- Se sirven automáticamente desde `http://localhost:5000/` en producción

### **Bootstrap Icons**
- Se usa Bootstrap Icons para iconos (incluido en dependencias)
- Acceso: `<i className="bi bi-icon-name"></i>`

### **Rutas Dinámicas**
- Las rutas usan parámetros dinámicos: `:servicioId`, `:tipoId`, `:seccionId`
- Esto permite crear páginas dinámicas con contenido diferente según la URL

---

## 🐛 Solución de Problemas

### **Error: "Cannot find module 'react'"**
```bash
npm install --save react react-dom
```

### **Error: CORS**
Asegúrate de que en `backend/server.js` está habilitado CORS:
```javascript
app.use(cors());
```

### **Puertos ocupados**
- Frontend usa puerto 5173 (Vite)
- Backend usa puerto 5000
- Si están ocupados, cambia en `.env`

---

## 📞 Contacto

Para preguntas sobre la migración, contacta al equipo de desarrollo.

---

**Última actualización:** 28 de Enero de 2026
**Versión:** 1.0.0
