# Blog Edgar Redondo - Sitio Hugo Estático (Versión 2 - Mejorada)

Este es el sitio web estático generado con Hugo a partir del blog WordPress original de edgarredondo.com, con un tema personalizado que replica el diseño original.

## Características

✅ **Diseño idéntico al WordPress original**
- Colores del tema Rara Academic (#018c82, #01d0c1)
- Tipografías originales (PT Sans, Bitter)
- Estructura HTML replicada (header, sidebar, footer)
- CSS original del WordPress incluido

✅ **Contenido completo y limpio**
- 37 artículos migrados
- 260+ imágenes descargadas
- Contenido HTML limpiado (sin botones de WordPress)
- Categorías y fechas preservadas

✅ **Enlaces funcionando correctamente**
- Enlaces internos apuntan a artículos locales
- Navegación por categorías funcional
- Estructura de URLs limpia

## Estructura del Proyecto

```
edgarredondo-hugo-v2/
├── content/
│   └── posts/          # 37 artículos en Markdown
├── static/
│   └── images/         # Todas las imágenes organizadas
├── themes/
│   └── edgarredondo/   # Tema personalizado
│       ├── layouts/    # Templates HTML
│       └── static/
│           └── css/    # CSS original + personalizado
├── public/             # Sitio generado (después de hugo)
└── hugo.toml           # Configuración

```

## Requisitos

- Hugo Extended v0.146.0 o superior

## Instalación de Hugo

### Linux/Ubuntu
```bash
wget https://github.com/gohugoio/hugo/releases/download/v0.146.0/hugo_extended_0.146.0_linux-amd64.tar.gz
tar -xzf hugo_extended_0.146.0_linux-amd64.tar.gz
sudo mv hugo /usr/local/bin/
```

### macOS
```bash
brew install hugo
```

### Windows
Descarga desde: https://github.com/gohugoio/hugo/releases

## Uso

### 1. Previsualizar localmente

```bash
cd edgarredondo-hugo-v2
hugo server
```

Abre http://localhost:1313

### 2. Generar sitio estático

```bash
cd edgarredondo-hugo-v2
hugo --minify
```

Los archivos estarán en `public/`

### 3. Desplegar

**Netlify (Recomendado)**
1. Arrastra `public/` al dashboard de Netlify
2. O conecta el repositorio Git

**Servidor tradicional**
1. Sube el contenido de `public/` vía FTP/SFTP
2. Configura el servidor web

## Personalización

Edita `hugo.toml` para cambiar:
- `baseURL`: Tu dominio final
- `title`: Título del sitio
- `params.description`: Descripción

## Diferencias con el WordPress Original

### Mantenido:
- ✅ Diseño visual idéntico
- ✅ Todos los artículos y contenido
- ✅ Imágenes y multimedia
- ✅ Categorías y estructura
- ✅ Fechas de publicación

### Eliminado (innecesario en sitio estático):
- ❌ Botones de compartir en redes sociales
- ❌ Comentarios (se pueden añadir con Disqus si se desea)
- ❌ Búsqueda dinámica (se puede añadir con Algolia)

### Mejorado:
- ⚡ Velocidad de carga ultra rápida
- 🔒 Seguridad máxima (sin base de datos)
- 💰 Hosting gratuito disponible
- 📱 Responsive design mantenido

## Añadir Nuevos Artículos

```bash
hugo new posts/nuevo-articulo/index.md
```

Edita el archivo generado en `content/posts/nuevo-articulo/index.md`

## Soporte

- Hugo: https://gohugo.io/documentation/
- Tema personalizado basado en Rara Academic

---

**Autor**: Edgar Redondo
**Email**: edgarredondo@gmail.com
**Migración**: Octubre 2025
**Tema original**: Rara Academic (WordPress)
**Tema Hugo**: Personalizado (edgarredondo)
