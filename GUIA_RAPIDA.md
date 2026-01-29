# 🚀 GUÍA RÁPIDA DE INICIO

## 5 Pasos para ejecutar tu nuevo sitio web

---

## ✅ PASO 1: Preparar tu computadora

Asegúrate de tener instalado **Node.js** (incluye npm):

1. Descarga desde: https://nodejs.org/
2. Instala la versión LTS (Long Term Support)
3. Verifica la instalación:

```bash
node --version
npm --version
```

---

## ✅ PASO 2: Abrir Terminal / PowerShell

En Windows:
- Presiona `Win + R`
- Escribe `powershell` o `cmd`
- Presiona Enter

En Mac/Linux:
- Abre Terminal

Navega a la carpeta del proyecto:
```bash
cd "C:/Users/User/OneDrive - Automation Parts/1.- Admin de Páginas/Alcoinsac/Alcoinsac-web/repo-react-express"
```

---

## ✅ PASO 3: Instalar Dependencias del Frontend

Abre una terminal en la carpeta `frontend`:

```bash
cd frontend
npm install
```

**Espera a que termine** (puede tomar 2-5 minutos)

---

## ✅ PASO 4: Instalar Dependencias del Backend

Abre OTRA terminal en la carpeta `backend`:

```bash
cd backend
npm install
```

**Espera a que termine**

---

## ✅ PASO 5: Ejecutar los Servidores

### Terminal 1 - Backend (Puerto 5000):
```bash
cd backend
npm run dev
```

Deberías ver:
```
Servidor ejecutándose en http://localhost:5000
```

### Terminal 2 - Frontend (Puerto 5173):
```bash
cd frontend
npm run dev
```

Deberías ver:
```
  VITE v5.0.8  ready in 500 ms

  ➜  Local:   http://localhost:5173/
```

---

## 🌐 ¡LISTO! Abre tu navegador

Accede a: **http://localhost:5173**

Verás tu sitio web funcionando con toda la interactividad de React.

---

## 📍 Rutas Disponibles

Haz clic en los enlaces de la navegación para probar:

### **Servicios:**
- Rebobinado de Motores
- Alineación Laser
- Pozo a Tierra
- Análisis Vibracional
- Análisis Termográfico

### **Mantenimientos:**
- Preventivo
- Correctivo
- Predictivo

### **Sobre Nosotros:**
- Misión
- Visión
- Valores

### **Contacto:**
- Formulario de contacto

---

## 🔄 Probar Cambios

Si cambias código en los archivos `.jsx` o `.css`:

1. **Frontend**: Se actualiza automáticamente en el navegador
2. **Backend**: Debes reiniciar (Ctrl+C y vuelve a ejecutar `npm run dev`)

---

## 🛑 Detener los Servidores

En ambas terminales presiona:
```bash
Ctrl + C
```

---

## 📚 Estructura de Carpetas - Guía Rápida

```
frontend/
├── src/
│   ├── components/     ← Componentes reutilizables
│   ├── pages/          ← Páginas principales
│   ├── App.jsx         ← Componente raíz
│   └── index.css       ← Todos los estilos

backend/
├── server.js           ← Servidor Express
├── .env                ← Configuración

public/
├── img/                ← Imágenes del sitio
└── fonts/              ← Fuentes personalizadas
```

---

## 🎨 Personalizar Sitio

### Cambiar Colores:
Edita `frontend/src/index.css` líneas 45-48:
```css
:root {
  --color-fondo: rgb(253, 122, 75);    /* Naranja */
  --color-borde: rgb(20, 20, 95);      /* Azul oscuro */
}
```

### Cambiar Logo:
Reemplaza las imágenes en `public/img/`

### Cambiar Contenido:
Edita los archivos en `frontend/src/pages/`

---

## ⚠️ Problemas Comunes

### **Error: "npm command not found"**
Node.js no está instalado. Descárgalo e instálalo.

### **Error: "Port already in use"**
Otro programa usa el puerto 5000 o 5173:
- Cambia el puerto en `backend/.env` (línea PORT=5000)
- O cierra el programa que usa ese puerto

### **Error: "Cannot find module"**
Ejecuta `npm install` nuevamente en la carpeta afectada.

### **Cambios no se reflejan**
- Frontend: Actualiza el navegador (F5 o Ctrl+Shift+R)
- Backend: Reinicia el servidor (Ctrl+C y vuelve a ejecutar)

---

## 📦 Build para Producción

Cuando quieras subir a Internet:

### Frontend:
```bash
cd frontend
npm run build
```

Genera carpeta `dist/` lista para deploy.

### Backend:
```bash
cd backend
npm start
```

---

## 🎓 Aprender Más

- **React**: https://react.dev
- **Express**: https://expressjs.com
- **Vite**: https://vitejs.dev
- **Bootstrap**: https://getbootstrap.com

---

## 💡 Siguiente Nivel

Una vez que todo funcione:

1. **Agregar Base de Datos** (MongoDB/PostgreSQL)
2. **APIs Dinámicas** para contenido
3. **Panel de Admin** para editar contenido
4. **Formulario de Contacto** con Email
5. **Deploy en Internet** (Vercel/Heroku/AWS)

---

## ✅ Checklist de Verificación

- [ ] Node.js instalado
- [ ] Dependencias instaladas (`npm install`)
- [ ] Backend ejecutándose (`npm run dev`)
- [ ] Frontend ejecutándose (`npm run dev`)
- [ ] Navegador en http://localhost:5173
- [ ] Todos los enlaces funcionan
- [ ] Responsivo en móvil

---

## 🎉 ¡FELICIDADES!

Tu sitio web con React + Express está funcionando exitosamente.

---

**¿Preguntas?** Consulta los archivos:
- `MIGRACION.md` - Documentación técnica completa
- `RESUMEN_EJECUTIVO.md` - Resumen de lo que se hizo

**Última actualización:** 28 de Enero de 2026
