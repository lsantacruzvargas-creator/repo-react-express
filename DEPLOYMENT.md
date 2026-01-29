# 🌐 Guía de Deployment (Deploy en Internet)

## Opciones para subir tu sitio a Internet

Cuando estés listo para publicar tu sitio web, aquí hay varias opciones:

---

## 🥇 OPCIÓN 1: VERCEL (Recomendado - Gratis y Fácil)

### ¿Por qué Vercel?
- ✅ Gratis para aplicaciones pequeñas
- ✅ Deploy automático desde Git
- ✅ Excelente rendimiento
- ✅ SSL automático
- ✅ Dominio personalizado

### Pasos:

1. **Crea cuenta en Vercel**: https://vercel.com/signup

2. **Conecta tu repositorio Git**:
   - Publica tu proyecto en GitHub
   - Conecta tu cuenta GitHub a Vercel
   - Selecciona el repositorio

3. **Configurar variables de entorno**:
   - En Vercel: Settings → Environment Variables
   - Agrega tus variables desde `.env`

4. **Deploy automático**:
   - Cada push a main = deploy automático
   - El sitio estará en vivo en minutos

5. **Dominio personalizado**:
   - Settings → Domains
   - Agrega tu dominio alcoinsac.com

### Archivo requerido: `vercel.json`

```json
{
  "buildCommand": "cd frontend && npm run build",
  "outputDirectory": "frontend/dist",
  "env": {
    "VITE_API_URL": "@api_url"
  }
}
```

---

## 🥈 OPCIÓN 2: NETLIFY

### ¿Por qué Netlify?
- ✅ Muy fácil de usar
- ✅ Gratis
- ✅ Deploy en segundos
- ✅ Buen soporte

### Pasos:

1. **Crea cuenta**: https://app.netlify.com/signup

2. **Deploy desde Git**:
   - Conecta tu repositorio GitHub
   - Selecciona el branch main

3. **Configuración de build**:
   ```
   Build command: cd frontend && npm run build
   Publish directory: frontend/dist
   ```

4. **Variables de entorno**:
   - Site settings → Build & deploy → Environment
   - Agrega tus variables

---

## 🥉 OPCIÓN 3: HEROKU

### ¿Por qué Heroku?
- ✅ Bueno para backend y frontend juntos
- ✅ Gratis (con limitaciones)
- ✅ Base de datos incluida

### Pasos para Frontend:

```bash
# 1. Instala Heroku CLI
# https://devcenter.heroku.com/articles/heroku-cli

# 2. Crea app en Heroku
heroku create alcoinsac-web

# 3. Build frontend
cd frontend
npm run build

# 4. Push a Heroku
git push heroku main
```

### Pasos para Backend:

```bash
# Crea archivo Procfile en backend/
echo "web: npm start" > Procfile

# Push a Heroku
git push heroku main
```

---

## 🚀 OPCIÓN 4: AWS (Más Profesional)

### Servicios AWS:
- **S3**: Para archivos estáticos (frontend)
- **EC2**: Para servidor backend
- **CloudFront**: Para cacheo y velocidad

### Ventajas:
- ✅ Muy escalable
- ✅ Excelente rendimiento
- ✅ Soporte profesional

### Costo: $$ (pero hay free tier)

---

## 📋 CHECKLIST PRE-DEPLOYMENT

Antes de subir a producción, verifica:

- [ ] Todos los links funcionan correctamente
- [ ] Responsive en móviles (probado)
- [ ] Todas las imágenes cargan correctamente
- [ ] Formularios funcionan
- [ ] No hay errores en la consola del navegador
- [ ] Variables de entorno están correctas
- [ ] Build de producción genera sin errores
- [ ] Prueba local funciona perfectamente

---

## 🔒 SEGURIDAD EN PRODUCCIÓN

### 1. Variables de Entorno
Nunca subas `.env` a Git:

```bash
# En .gitignore ya está incluido
.env
```

### 2. HTTPS
Asegúrate de que tu sitio use HTTPS (todos los servicios lo incluyen).

### 3. CORS
En `backend/server.js`:

```javascript
app.use(cors({
  origin: 'https://tudominio.com',
  credentials: true
}));
```

### 4. Validación de Datos
Valida siempre en backend:

```javascript
// Ejemplo de validación
if (!nombre || nombre.trim() === '') {
  return res.status(400).json({ error: 'Nombre requerido' });
}
```

---

## 📊 COMPARATIVA DE OPCIONES

| Opción | Costo | Facilidad | Escalabilidad | Mejor Para |
|--------|-------|-----------|---------------|------------|
| Vercel | Gratis | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | Frontend + API |
| Netlify | Gratis | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | Frontend estático |
| Heroku | Gratis* | ⭐⭐⭐ | ⭐⭐⭐ | App completa |
| AWS | $$ | ⭐⭐ | ⭐⭐⭐⭐⭐ | Empresas grandes |

*Heroku: Gratis pero con limitaciones

---

## 🎯 MI RECOMENDACIÓN

**Para Alcoinsac, recomiendo VERCEL** porque:

1. ✅ Es gratis para empezar
2. ✅ Muy fácil de usar
3. ✅ Perfecto para React + Node.js
4. ✅ Deploy automático desde Git
5. ✅ Escalable para el futuro
6. ✅ Excelente soporte

---

## 📝 PASOS RÁPIDOS CON VERCEL

```bash
# 1. Instalar Vercel CLI
npm i -g vercel

# 2. Logearse
vercel login

# 3. Deploy
vercel --prod

# 4. Verificar en: https://your-project.vercel.app
```

---

## 🆘 PROBLEMAS COMUNES

### "Build failed"
- Verifica que `npm run build` funciona localmente
- Revisa que todas las dependencias estén en package.json

### "Páginas 404"
- Asegúrate de que el fallback a SPA está configurado
- En Vercel, crea `vercel.json` (está en ejemplos arriba)

### "CORS error"
- Actualiza `backend/server.js` con el dominio correcto
- En producción debe ser el dominio real, no localhost

### "Imágenes no cargan"
- Verifica que las rutas en `public/` son correctas
- Asegúrate de que no hay path absoluto incorrecto

---

## 🔄 ACTUALIZACIONES

Para actualizar tu sitio después de deployed:

```bash
# 1. Hacer cambios locales
# ... edita archivos ...

# 2. Commit y push a Git
git add .
git commit -m "Descripción de cambios"
git push origin main

# 3. ¡Vercel detecta el cambio y hace deploy automático!
```

---

## 📞 CONTACTO Y SOPORTE

- **Vercel Docs**: https://vercel.com/docs
- **React Docs**: https://react.dev
- **Express Docs**: https://expressjs.com
- **Netlify Docs**: https://docs.netlify.com

---

## ✅ SIGUIENTE PASO

Una vez que tu sitio esté en Vercel:

1. **Configurar dominio personalizado**:
   - Compra dominio en GoDaddy, Namecheap, etc.
   - Apunta DNS a Vercel
   - Configurar SSL (automático)

2. **Conectar base de datos** (opcional):
   - MongoDB Atlas (gratis)
   - PostgreSQL en Railway
   - Supabase (Firebase alternativa)

3. **Monitoreo**:
   - Google Analytics
   - Sentry (error tracking)
   - Vercel Analytics

---

**¡Tu sitio estará en línea en minutos!**

**Última actualización:** 28 de Enero de 2026
