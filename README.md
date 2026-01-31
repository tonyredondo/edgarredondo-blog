# Blog de Edgar Redondo

Blog personal de Edgar Redondo - Educador, divulgador científico y amante de la filosofía.

Migrado de WordPress a Hugo para mejor rendimiento, seguridad y facilidad de mantenimiento.

## 🌐 Sitio Web

- **Sitio original (WordPress):** http://edgarredondo.com
- **Repositorio:** https://github.com/tonyredondo/edgarredondo-blog

## 📊 Contenido

- **37 artículos** sobre filosofía, matemáticas, física, transhumanismo y más
- **260+ imágenes** optimizadas
- **13 categorías** temáticas

## 🚀 Tecnología

- **Hugo** v0.146.0 - Generador de sitios estáticos
- **Tema personalizado** replicando el diseño original de WordPress
- **URLs relativas** para portabilidad
- **100% estático** - Sin base de datos, ultra rápido y seguro

## 💻 Desarrollo Local

### Requisitos
- Hugo Extended v0.146.0 o superior

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tonyredondo/edgarredondo-blog.git
cd edgarredondo-blog

# Iniciar servidor de desarrollo
hugo server

# Visitar http://localhost:1313
```

### Generar sitio

```bash
# Generar archivos estáticos en public/
hugo --minify
```

## 📝 Añadir Contenido

```bash
# Crear nuevo artículo
hugo new posts/nuevo-articulo/index.md

# Editar content/posts/nuevo-articulo/index.md
# Añadir imágenes en static/images/nuevo-articulo/
```

## 🚀 Despliegue

### Netlify (Recomendado)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/tonyredondo/edgarredondo-blog)

**Configuración de build:**
- Build command: `hugo --minify`
- Publish directory: `public`
- Hugo version: `0.146.0`

### Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/tonyredondo/edgarredondo-blog)

### GitHub Pages

1. Ir a Settings → Pages
2. Source: GitHub Actions
3. Crear `.github/workflows/hugo.yml` (ver abajo)

## 📁 Estructura

```
edgarredondo-blog/
├── content/
│   └── posts/              # Artículos en Markdown
├── static/
│   ├── css/                # Estilos
│   └── images/             # Imágenes
├── themes/
│   └── edgarredondo/       # Tema personalizado
├── config/
│   ├── _default/hugo.toml  # Configuración base (dev)
│   └── production/hugo.toml# Overrides para producción
└── README.md
```

## 📄 Licencia

Contenido © Edgar Redondo. Todos los derechos reservados.

## 👤 Autor

**Edgar Redondo**
- Email: edgarredondo@gmail.com
- Teléfono: +34 668 69 49 10

---

Migrado de WordPress a Hugo en Octubre 2025

## 🔧 Configuración de GitHub Pages

Este repositorio incluye un workflow de GitHub Actions que automáticamente construye y despliega el sitio en GitHub Pages cada vez que haces push a la rama `master`.

### Activar GitHub Pages

1. Ve a la configuración del repositorio: https://github.com/tonyredondo/edgarredondo-blog/settings/pages
2. En **Source**, selecciona **GitHub Actions**
3. El workflow se ejecutará automáticamente en el próximo push
4. El sitio estará disponible en: https://tonyredondo.github.io/edgarredondo-blog/

### Workflow Automático

El archivo `.github/workflows/hugo.yml` se encarga de:
- ✅ Instalar Hugo v0.146.0
- ✅ Construir el sitio con `hugo --minify`
- ✅ Desplegar automáticamente en GitHub Pages
- ✅ Ejecutarse en cada push a `master`

### Dominio Personalizado

Para usar tu propio dominio (edgarredondo.com):

1. En la configuración de Pages, añade tu dominio personalizado
2. Configura los registros DNS en tu proveedor:
   ```
   CNAME: www.edgarredondo.com → tonyredondo.github.io
   A: edgarredondo.com → 185.199.108.153
   A: edgarredondo.com → 185.199.109.153
   A: edgarredondo.com → 185.199.110.153
   A: edgarredondo.com → 185.199.111.153
   ```
3. GitHub Pages configurará automáticamente SSL
