<template>
  <div class="home">
    <nav
      class="navbar navbar-expand-lg bg-success fixed-top navbar-transparent"
      color-on-scroll="400"
    >
      <div class="container">
        <div class="navbar-translate">
          <a class="nav-link" href="/">
            <img src="assets/img/league-menu-head.png" />
          </a>
          <button
            class="navbar-toggler navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navigation"
            aria-controls="navigation-index"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-bar top-bar"></span>
            <span class="navbar-toggler-bar middle-bar"></span>
            <span class="navbar-toggler-bar bottom-bar"></span>
          </button>
        </div>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navigation"
          data-nav-image="assets/img/blurred-image-1.jpg"
        >
          <ul class="navbar-nav">
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  >Divisional A</a
                >
                <div
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a class="dropdown-item" href="#/divisional-a/tablas"
                    >Tablas</a
                  >
                  <a
                    class="dropdown-item"
                    href="#/divisional-a/fotos-resultados"
                    >Fotos y Resultados</a
                  >
                  <a class="dropdown-item" href="#/divisional-a/clubes"
                    >Clubes</a
                  >
                </div>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  >Divisional B</a
                >
                <div
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a class="dropdown-item" href="#/divisional-b/tablas"
                    >Tablas</a
                  >
                  <a
                    class="dropdown-item"
                    href="#/divisional-b/fotos-resultados"
                    >Fotos y Resultados</a
                  >
                  <a class="dropdown-item" href="#/divisional-b/clubes"
                    >Clubes</a
                  >
                </div>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  >Divisional C</a
                >
                <div
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a class="dropdown-item" href="#/divisional-c/tablas"
                    >Tablas</a
                  >
                  <a
                    class="dropdown-item"
                    href="#/divisional-c/fotos-resultados"
                    >Fotos y Resultados</a
                  >
                  <a class="dropdown-item" href="#/divisional-c/clubes"
                    >Clubes</a
                  >
                </div>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  >Campeonato Femenino</a
                >
                <div
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a class="dropdown-item" href="#/femenino/tablas">Tablas</a>
                  <a class="dropdown-item" href="#/femenino/fotos-resultados"
                    >Fotos y Resultados</a
                  >
                  <a class="dropdown-item" href="#/femenino/clubes">Clubes</a>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  >F11 League</a
                >
                <div
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a class="dropdown-item" href="#/f11tablas">Tablas</a>
                  <a class="dropdown-item" href="#/f11fotos"
                    >Fotos y Resultados</a
                  >
                  <a class="dropdown-item" href="#/f11clubes">Clubes</a>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  >La Liga</a
                >
                <div
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a class="dropdown-item" href="/">Inicio</a>
                  <a class="dropdown-item" href="#/noticias">Noticias</a>
                  <a class="dropdown-item" href="#/contacto">Contacto</a>
                </div>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  rel="tooltip"
                  title="Síguenos en Facebook"
                  data-placement="bottom"
                  href="https://www.facebook.com/33futbol7"
                  target="_blank"
                >
                  <i class="fab fa-facebook-square"></i>
                  <p class="d-lg-none d-xl-none">Facebook</p>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  rel="tooltip"
                  title="Síguenos en Instagram"
                  data-placement="bottom"
                  href="https://www.instagram.com/33league/"
                  target="_blank"
                >
                  <i class="fab fa-instagram"></i>
                  <p class="d-lg-none d-xl-none">Instagram</p>
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
    <div class="wraper">
      <div class="page-header page-header-small">
        <div
          class="page-header-image"
          data-parallax="true"
          style="
            background-image: url('assets/img/2019-09-28-5ta-fecha-29-Mutual-Vs-Los-Sauces-26.jpg');
          "
        ></div>
        <div class="content-center">
          <div class="container">
            <img src="assets/img/favicon.png" />
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      datos: [],
      fotos: [],
      fechas: [],
      partidos: [],
      escudosA: [],
      escudosB: [],
      fechaId: "",
      partidoId: "",
      loader: false,
      api: "https://league33.herokuapp.com/api",
    };
  },

  created() {
    this.load();
  },

  methods: {
    load() {
      this.loader = true;

      axios.get(this.api).then((res) => {
        this.datos = res.data;
        this.loader = false;
        for (let i = 0; i < this.datos.length; i++) {
          const element = this.datos[i];
          if (element.ftorneo == "6039c3fce8c5cb001508aae5") {
            this.fechas.push({
              fnombre: element.fnombre,
              id: element._id,
            });
          }
        }
      });
    },
    fnSelFecha(idfecha) {
      let z = 0;
      let x = -1;
      let id = "";
      this.partidos = [];
      this.escudosA = [];
      this.escudosB = [];

      for (let i = 0; i < this.datos.length; i++) {
        const element = this.datos[i];
        if (element.pfechaid == idfecha) {
          this.partidos.push({
            pequipoa: element.pequipoa,
            pequipob: element.pequipob,
            peagoles: element.peagoles,
            pebgoles: element.pebgoles,
            id: element._id,
            cont: x + 1,
          });
          x++;
        }
      }

      do {
        for (let i = 0; i < this.datos.length; i++) {
          const element = this.datos[i];
          if (element.enombre == this.partidos[z].pequipoa) {
            id = element._id;
            for (let i = 0; i < this.datos.length; i++) {
              const element = this.datos[i];
              if (element.title == id) {
                this.escudosA.push({
                  escudo: element.imageURL,
                });
              }
            }
          }
        }
        z++;
      } while (z < this.partidos.length);

      z = 0;

      do {
        for (let i = 0; i < this.datos.length; i++) {
          const element = this.datos[i];
          if (element.enombre == this.partidos[z].pequipob) {
            id = element._id;
            for (let i = 0; i < this.datos.length; i++) {
              const element = this.datos[i];
              if (element.title == id) {
                this.escudosB.push({
                  escudo: element.imageURL,
                });
              }
            }
          }
        }
        z++;
      } while (z < this.partidos.length);
    },
    fnFotos(id){
      this.fotos = [];

      for (let i = 0; i < this.datos.length; i++) {
        const element = this.datos[i];
        if (element.title == id) {
          this.fotos.push({
            imageURL: element.imageURL,
          })
        }
      }
    }
  },
};
</script>