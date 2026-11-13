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

## 12/11/2026 — GitHub Pages activado (Fase 5)

- Activado Pages con `build_type=workflow`; el workflow «Publicar portafolio en GitHub Pages» terminó en `success`.
- https://criss1804.github.io/portafolio-progv/ devuelve **HTTP 200**.
- Sin conflicto de dominio: no existe `Criss1804.github.io` con dominio personalizado.
- Diseño minimalista claro preparado en local (portada simple, acento azul), **sin subir todavía**: decidí dejar el diseño para el final.
- **Pendiente:** Render (Fase 6), `config.js`, capturas, diseño final, revisar en el celular.

## 12/11/2026 — Laboratorios en vivo en Render (Fase 6)

- Cuenta de Render creada por mí con GitHub (correo verificado).
- Servicio web `progv-criss1804` desde el repositorio público, Docker, región Virginia, plan **Free ($0 / month · 0.1 CPU · 512 MB)**. Sin tarjeta.
- `https://progv-criss1804.onrender.com/api/estado` → `"ok":true` (JDK 21 y Tomcat disponibles). La raíz responde 200.
- CORS correcto: el servidor responde `access-control-allow-origin: https://criss1804.github.io`.
- `portafolio/web/js/config.js` apunta al servidor de Render.
- Probado desde la página publicada: arriba dice **«servidor en vivo»**; el lab 1 imprimió «Hola Programacion V» y el modelo Student (503 ms); el lab 8 arrancó («en línea») y `GET lista` devolvió las reservas en JSON.
- **Pendiente:** capturas (Fase 7), diseño final, revisar en el celular.

## 12/11/2026 — Capturas reales (Fase 7)

- `capturar.js` contra Render: labs 1 y 2 (4 programas) OK; lab 7 (7 peticiones, incluida 201 → 409) y lab 8 (7 peticiones, de 200 a 204) con los códigos esperados.
- Pantallazos revisados: `lab4-lista`, `lab4-nuevo`, `lab5-menu`, `lab5-articulos`, `lab5-existencias`.
- Generados `portafolio/web/js/capturas.js` y `portafolio/web/img/capturas/`.
- **Pendiente:** diseño final (minimalista claro, ya preparado en local), README y cierre, revisar en el celular.

## 12/11/2026 — Diseño propio: «Travesía espacial» (Fase 4)

- Descarté el minimalista claro y pedí un diseño totalmente distinto al de la plantilla: tema espacial oscuro, interactivo y ligero.
- Fondo: nebulosa en CSS + campo de estrellas en un solo `<canvas>` (`js/espacio.js`) con parallax al bajar y al mover el cursor, titileo y estrellas fugaces; se pausa con la pestaña oculta.
- Portada: bitácora de misión (nombre en degradado, botones «Iniciar viaje» y «Aterrizar en el planeta 01», telemetría) y un sistema solar 3D con 8 planetas en órbita que enlazan a cada laboratorio.
- Índice «Carta de navegación»: ruta en zigzag con una nave que avanza al bajar. Cada lab es un planeta con nombre y color propios (Génesis, Dualis, Nexo, Verdant, Stratos, Códice, Pulsar, Órbita).
- Labs: tramo «03 → 04», planeta grande con parallax, tarjetas de datos y consola con el color del planeta. Tipografía Space Grotesk.
- Rendimiento y accesibilidad: solo se animan `transform` y `opacity`; con «reducir movimiento» todo queda quieto.
- **Pendiente:** README y cierre (Fase 8), revisar en el celular.

## Lista de verificación de pendientes

Marca con `x` cuando esté hecho y anota la fecha en la entrada correspondiente.

- [x] Repositorio público creado y `origin` apunta a **mi** usuario (`git remote -v`)
- [x] GitHub Pages **activado** y el workflow en `success` (`gh run list`)
- [x] https://Criss1804.github.io/portafolio-progv/ abre con HTTP 200
- [x] Servicio de Render creado con plan **Free ($0)** y en estado **Live**
- [x] `portafolio/web/js/config.js` apunta a https://progv-criss1804.onrender.com y está subido
- [x] `perfil.js → origenes` incluye mi URL pública (y mi dominio, si uso uno)
- [x] La página publicada muestra **“servidor en vivo”** y puedo ejecutar el lab 1 y el lab 8
- [x] **Capturas generadas** (`capturar.js`) y subidas (`capturas.js` + `img/capturas/`)
- [ ] HTTPS activo (si uso dominio propio: `https_enforced=true`)
- [x] Mi **diseño propio** aplicado y revisado (contraste, “reducir movimiento”)
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
