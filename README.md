
# Somos (React + Vite)

Secciones:
- **La Biblioteca**: eventos (Passline), quiénes somos, carrusel del espacio.
- **Somos Academia**: grilla + búsqueda de cursos y detalle con formulario.
- **Somos Produce**: página informativa con servicios.

## Desarrollo
```bash
npm i
npm run dev
```

## Build (subir a hosting)
```bash
npm run build
```
Los archivos generados quedan en `dist/` listos para subir. Si tu hosting sirve desde subcarpeta, ajustá `base` en `vite.config.js`.

## Datos
- Editá `public/events.json` y `public/courses.json`.

## Formularios
Los formularios hoy hacen `alert()` (front). Conectalos a tu backend PHP cambiando el `onSubmit` por un `fetch('https://tu-dominio/api/...')`.
