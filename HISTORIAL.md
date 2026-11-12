# Historial — Portafolio de Programación V · Cristian Valdes

> Diario de lo hecho, decisiones y pendientes. **Una entrada por día de trabajo**, con fecha dd/MM/yyyy. Se actualiza después de cada cambio importante (ver la guía de README e historial del kit).
> Repositorio: `portafolio-progv` · Usuario: @Criss1804 · Página: https://Criss1804.github.io/portafolio-progv/ · Servidor en vivo: https://progv-criss1804.onrender.com

## 12/11/2026 — Creado el portafolio a partir del kit

- Creado el portafolio de **Programación V** de **Cristian Valdes** (Universidad Autónoma de Chiriquí (UNACHI), prof. Alexis Flores, 2026) a partir del kit de Dereck Martinez (@Deryus15).
- Verificada la cuenta de GitHub: el usuario del CLI, el del navegador y el que indiqué coinciden (**@Criss1804**).
- Creado el repositorio público `portafolio-progv` con la plantilla del portafolio y el material de los 8 laboratorios (`prog-v/`).
- Datos personales cargados en `portafolio/web/js/perfil.js`.
- Cédula: decidí **no mostrarla** (no está en ningún archivo del repositorio).
- Diseño elegido: **minimalista claro**, acento azul `#2563eb`, portada de presentación simple (se aplica en la Fase 4).
- Problema: el primer `push` fue rechazado porque la sesión de `gh` no tenía el permiso `workflow` (necesario para `.github/workflows/pages.yml`). Solución: `gh auth refresh -h github.com -s workflow` (autorizado por mí en el navegador) y `gh auth setup-git`. Después el `push` a `main` funcionó.
- **Pendiente:** aplicar mi diseño, activar GitHub Pages, desplegar en Render, conectar `config.js`, generar capturas, revisar en el celular.

## Lista de verificación de pendientes

Marca con `x` cuando esté hecho y anota la fecha en la entrada correspondiente.

- [x] Repositorio público creado y `origin` apunta a **mi** usuario (`git remote -v`)
- [ ] GitHub Pages **activado** y el workflow en `success` (`gh run list`)
- [ ] https://Criss1804.github.io/portafolio-progv/ abre con HTTP 200
- [ ] Servicio de Render creado con plan **Free ($0)** y en estado **Live**
- [ ] `portafolio/web/js/config.js` apunta a https://progv-criss1804.onrender.com y está subido
- [ ] `perfil.js → origenes` incluye mi URL pública (y mi dominio, si uso uno)
- [ ] La página publicada muestra **“servidor en vivo”** y puedo ejecutar el lab 1 y el lab 8
- [ ] **Capturas generadas** (`capturar.js`) y subidas (`capturas.js` + `img/capturas/`)
- [ ] HTTPS activo (si uso dominio propio: `https_enforced=true`)
- [ ] Mi **diseño propio** aplicado y revisado (contraste, “reducir movimiento”)
- [ ] Revisado en un **celular real**
- [ ] `README.md` con mis URLs correctas y `HISTORIAL.md` al día
- [ ] Abrí el servidor ~5 minutos antes de la presentación (el plan gratis duerme a los 15 min)

## Plantilla para nuevas entradas

```markdown
## dd/MM/yyyy — Título corto de lo que se hizo
- Qué se hizo (hechos verificables: “Pages devolvió 200”, “el lab 4 tardó 90 s”).
- Decisiones tomadas y por qué.
- Problemas encontrados y cómo se resolvieron.
- **Pendiente:** lo que sigue.
```
