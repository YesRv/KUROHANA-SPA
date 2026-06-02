export function landingView() {
  return `
  <div class="landing-wrapper">
    <!-- NAVBAR -->
    <nav class="landing-nav" id="landing-nav">
      <div class="landing-nav__logo">
        <img src="/src/assets/img/Logo_blanco_sin_fondo.png" alt="Kurohana" />
      </div>
      <ul class="landing-nav__links">
        <li><a href="#sobre">Sobre Kurohana</a></li>
        <li><a href="#tecnologias">Tecnologías</a></li>
        <li><a href="#equipo">Equipo</a></li>
        <li><a href="#branding">Branding</a></li>
      </ul>
      <a href="#login" class="landing-nav__btn">Acceder</a>
    </nav>

    <!-- HERO -->
    <section class="landing-hero" id="inicio">
      <img src="/src/assets/img/landing/landing-hero.png" alt="Kurohana Hero" class="landing-hero__img" />
    </section>

    <!-- SOBRE KUROHANA -->
    <section class="landing-sobre" id="sobre">
      <div class="landing-sobre__left">
        <span class="landing-section-label">¿Qué es?</span>
        <h2 class="landing-sobre__title">Kurohana</h2>
        <p class="landing-sobre__text">
          Kurohana es una <strong>Single Page Application</strong> diseñada para la gestión de un restaurante de cocina asiática. Permite administrar productos, gestionar pedidos mediante un carrito interactivo y ofrecer funcionalidades diferenciadas para usuarios y administradores.
        </p>
      </div>
      <div class="landing-sobre__right">
        <div class="landing-sobre__card">
          <span class="landing-sobre__card-icon">💡</span>
          <h3>¿Por qué se creó?</h3>
          <p>Para digitalizar y centralizar la administración de un restaurante, facilitando la gestión de platos, pedidos, usuarios y promociones en una sola plataforma.</p>
        </div>
        <div class="landing-sobre__card">
          <span class="landing-sobre__card-icon">⚙️</span>
          <h3>¿Cómo se creó?</h3>
          <p>Desarrollada con Vite y JavaScript Vanilla, siguiendo arquitectura MVC con separación de vistas, controladores y componentes. Incluye autenticación SHA-256 y gestión de roles.</p>
        </div>
      </div>
    </section>

    <!-- TECNOLOGÍAS -->
    <section class="landing-tech" id="tecnologias">
      <span class="landing-section-label">Stack</span>
      <h2 class="landing-tech__title">Tecnologías</h2>
      <div class="landing-tech__grid">
        <div class="landing-tech__item">
          <span class="landing-tech__icon">⚡</span>
          <p>Vite</p>
        </div>
        <div class="landing-tech__item">
          <span class="landing-tech__icon">🟨</span>
          <p>JavaScript Vanilla</p>
        </div>
        <div class="landing-tech__item">
          <span class="landing-tech__icon">🎨</span>
          <p>Tailwind CSS v4</p>
        </div>
        <div class="landing-tech__item">
          <span class="landing-tech__icon">🗄️</span>
          <p>JSON Server</p>
        </div>
        <div class="landing-tech__item">
          <span class="landing-tech__icon">🔐</span>
          <p>SHA-256</p>
        </div>
        <div class="landing-tech__item">
          <span class="landing-tech__icon">🏗️</span>
          <p>Patrón MVC</p>
        </div>
      </div>
    </section>

    <!-- EQUIPO -->
    <section class="landing-equipo" id="equipo">
      <span class="landing-section-label">Desarrolladores</span>
      <h2 class="landing-equipo__title">El Equipo</h2>
      <div class="landing-equipo__grid">

        <div class="landing-card">
          <div class="landing-card__inner">
            <div class="landing-card__front">
              <img src="/src/assets/img/team/maria.jpg" alt="Maria Muñoz" />
              <div class="landing-card__front-info">
                <h3>Maria Muñoz</h3>
                <span>Angelus</span>
              </div>
            </div>
            <div class="landing-card__back">
              <h3>Angelus</h3>
              <p>Creación y diseño del stock, CRUD de productos y cupones, sección administrador, botones de desplazamiento, barra de búsqueda y categorías.</p>
            </div>
          </div>
        </div>

        <div class="landing-card">
          <div class="landing-card__inner">
            <div class="landing-card__front">
              <img src="/src/assets/img/team/gustavo.jpg" alt="Gustavo Guzman" />
              <div class="landing-card__front-info">
                <h3>Gustavo Guzmán</h3>
                <span>Zerik</span>
              </div>
            </div>
            <div class="landing-card__back">
              <h3>Zerik</h3>
              <p>Sidebar dinámico por roles, modales, arquitectura MVC del proyecto y documentación README.</p>
            </div>
          </div>
        </div>

        <div class="landing-card">
          <div class="landing-card__inner">
            <div class="landing-card__front">
              <img src="/src/assets/img/team/yesica.jpg" alt="Yesica Rodriguez" />
              <div class="landing-card__front-info">
                <h3>Yesica Rodríguez</h3>
                <span>Yess</span>
              </div>
            </div>
            <div class="landing-card__back">
              <h3>Yess</h3>
              <p>Diseño del login y sign up, hasheo de contraseñas SHA-256 y validación de errores en formularios.</p>
            </div>
          </div>
        </div>

        <div class="landing-card">
          <div class="landing-card__inner">
            <div class="landing-card__front">
              <img src="/src/assets/img/team/carlos.jpg" alt="Carlos Muñoz" />
              <div class="landing-card__front-info">
                <h3>Carlos Muñoz</h3>
                <span>Charles</span>
              </div>
            </div>
            <div class="landing-card__back">
              <h3>Charles</h3>
              <p>Sidebar y carrito, rol de usuario/cliente, lógica del carrito, aplicación de cupones, modal de pago, sección settings y diseño visual CSS del SPA.</p>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- BRANDING -->
    <section class="landing-branding" id="branding">
      <span class="landing-section-label">Identidad visual</span>
      <h2 class="landing-branding__title">Branding</h2>

      <!-- Capturas del SPA -->
      <div class="landing-branding__cards">
        <div class="landing-branding__card">
          <div class="landing-branding__card-img">
            <img src="/src/assets/img/branding/captura-1.png" alt="Vista del SPA" />
          </div>
          <div class="landing-branding__card-text">
            <h3>Título captura 1</h3>
            <p>Descripción de esta sección o vista del SPA. Explica qué se ve y qué función cumple.</p>
          </div>
        </div>
        <div class="landing-branding__card">
          <div class="landing-branding__card-img">
            <img src="/src/assets/img/branding/captura-2.png" alt="Vista del SPA" />
          </div>
          <div class="landing-branding__card-text">
            <h3>Título captura 2</h3>
            <p>Descripción de esta sección o vista del SPA. Explica qué se ve y qué función cumple.</p>
          </div>
        </div>
      </div>

      <!-- Carrusel de logos / paleta / capturas -->
      <div class="landing-branding__carrusel-wrapper">
        <button class="landing-branding__arrow left" id="branding-prev">&#8592;</button>
        <div class="landing-branding__carrusel" id="branding-carrusel">
          <div class="landing-branding__slide">
            <img src="/src/assets/img/branding/slide-1.png" alt="Branding 1" />
          </div>
          <div class="landing-branding__slide">
            <img src="/src/assets/img/branding/slide-2.png" alt="Branding 2" />
          </div>
          <div class="landing-branding__slide">
            <img src="/src/assets/img/branding/slide-3.png" alt="Branding 3" />
          </div>
          <div class="landing-branding__slide">
            <img src="/src/assets/img/branding/slide-3.png" alt="Branding 4" />
          </div>
          <div class="landing-branding__slide">
            <img src="/src/assets/img/branding/slide-3.png" alt="Branding 5" />
          </div>
          <div class="landing-branding__slide">
            <img src="/src/assets/img/branding/slide-3.png" alt="Branding 6" />
          </div>
        </div>
        <button class="landing-branding__arrow right" id="branding-next">&#8594;</button>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="landing-footer">
      <img src="/src/assets/img/Logo_blanco_sin_fondo.png" alt="Kurohana" class="landing-footer__logo" />
      <p>Kurohana © 2025 — Proyecto académico de desarrollo web</p>
      <a href="#login" class="landing-nav__btn">Acceder a la app →</a>
    </footer>
  </div>
  `;
}