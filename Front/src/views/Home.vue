<template>
  <div class="home">
    <nav
      class="navbar navbar-expand-lg bg-success fixed-top navbar-transparent"
      color-on-scroll="400"
    >
      <div class="container">
        <div class="navbar-translate">
          <a class="nav-link" href="/">
            <img src="img/league-menu-head.png" />
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
              <li
                class="nav-item dropdown"
                :key="dato"
                v-for="dato in cpMenuDiv"
              >
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  @click="
                    fnInicializar(),
                      (divisionalId = dato.id),
                      (titulo = dato.divisional),
                      (fotosresultados = false),
                      (tablas = false),
                      (clubes = false)
                  "
                  >{{ dato.divisional }}</a
                >
                <div
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a
                    class="dropdown-item"
                    style="cursor: pointer"
                    @click="
                      (fotosresultados = false),
                        (tablas = true),
                        (clubes = false)
                    "
                    >Tablas</a
                  >
                  <a
                    class="dropdown-item"
                    style="cursor: pointer"
                    @click="
                      fnFotosyResultados(),
                        (fotosresultados = true),
                        (tablas = false),
                        (clubes = false)
                    "
                    >Fotos y Resultados</a
                  >
                  <a
                    class="dropdown-item"
                    style="cursor: pointer"
                    @click="
                      fnClubes(),
                        (fotosresultados = false),
                        (tablas = false),
                        (clubes = true)
                    "
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
                  @click="
                    fnInicializar(),
                      (fotosresultados = false),
                      (tablas = false),
                      (clubes = false)
                  "
                  >Otros Torneos</a
                >
                <div
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                  :key="dato"
                  v-for="dato in cpMenuExc"
                >
                  <a
                    class="dropdown-item"
                    style="cursor: pointer"
                    @click="fnTablas(dato.id), (titulo = dato.tnombre)"
                    >{{ dato.tnombre }}</a
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
                  >La Liga</a
                >
                <div
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a class="dropdown-item" href="http://crack.33league.uy/"
                    >Crack del mes</a
                  >
                  <a class="dropdown-item" href="https://drive.google.com/drive/folders/1KhgAKenQfN3ynrD0aHxs7PzZAFlTkfaE?usp=sharing"
                    >Formularios 2021</a
                  >
                  <a
                    class="dropdown-item"
                    href="https://www.instagram.com/33leaguepodcast/"
                    >33 League TV + Podcast</a
                  >
                  <a
                    class="dropdown-item"
                    style="cursor: pointer"
                    href="https://2020.33league.uy/#/"
                    >Temporada 2020</a
                  >
                </div>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  rel="tooltip"
                  title="Copa"
                  data-placement="bottom"
                  href="https://copanacional.33league.uy"
                  target="_blank"
                >
                  Copa Nacional
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  rel="tooltip"
                  title="Síguenos en Facebook"
                  data-placement="bottom"
                  href="https:/"
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
    <div class="wrapper">
      <div class="page-header page-header-small">
        <div
          class="page-header-image"
          data-parallax="true"
          style="background-image: url('img/background.jpg')"
        ></div>
        <div class="content-center">
          <div class="container">
            <h3 v-if="!loader">#muchomasquefutbol</h3>
            <img src="img/loader.gif" width="30" v-if="loader" alt="" />
            <h3 v-if="loader">Cargando...</h3>
          </div>
        </div>
      </div>

      <main role="main" v-if="fotosresultados">
        <div class="container">
          <br />
          <h2>
            {{ titulo }}
          </h2>
          <button
            class="btn btn-success"
            :key="dato"
            v-for="dato in torneos"
            @click="fnSelTorneo(dato.id)"
          >
            {{ dato.tnombre }}
          </button>
          <!-- Tabs with icons on Card -->
          <div class="card card-nav-tabs">
            <div class="card-header card-header-primary">
              <!-- colors: "header-primary", "header-info", "header-success", "header-warning", "header-danger" -->
              <div class="nav-tabs-navigation">
                <div class="nav-tabs-wrapper">
                  <ul class="nav nav-tabs" data-tabs="tabs">
                    <li class="nav-item" :key="dato" v-for="dato in fechas">
                      <a
                        class="nav-link"
                        :href="'#' + dato.id"
                        data-toggle="tab"
                        @click="fnSelFecha(dato.id), (fechaId = dato.id)"
                        >{{ dato.fnombre }}</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="card-body">
              <div class="tab-content text-center">
                <div class="tab-pane active" :id="fechaId">
                  <table class="table">
                    <thead class="thead-dark">
                      <tr>
                        <th scope="col"></th>
                        <th scope="col">Resultado</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        :key="dato"
                        v-for="dato in partidos"
                        @click="fnFotos(dato.id)"
                      >
                        <td style="text-align: right">
                          {{ dato.pequipoa }}
                          <img
                            :src="escudosA[dato.cont].escudo"
                            width="50"
                            alt=""
                          />
                        </td>
                        <td>
                          <i
                            class="fas fa-times"
                            v-if="dato.peagoles < dato.pebgoles"
                          ></i>
                          <i
                            class="fas fa-check"
                            v-if="dato.peagoles > dato.pebgoles"
                          ></i>
                          <i
                            class="fas fa-equals"
                            v-if="dato.peagoles === dato.pebgoles"
                          ></i>
                          <a v-if="dato.peagoles != undefinded"
                            >{{ dato.peagoles + " " }} :
                            {{ " " + dato.pebgoles }}</a
                          >
                          <a
                            style="color: green; font-weight: bold"
                            v-if="dato.peagoles == undefinded"
                            >No jugado</a
                          >
                          <i
                            class="fas fa-times"
                            v-if="dato.peagoles > dato.pebgoles"
                          ></i>
                          <i
                            class="fas fa-check"
                            v-if="dato.peagoles < dato.pebgoles"
                          ></i>
                          <i
                            class="fas fa-equals"
                            v-if="dato.peagoles === dato.pebgoles"
                          >
                          </i>
                        </td>
                        <td style="text-align: left">
                          <img
                            :src="escudosB[dato.cont].escudo"
                            width="50"
                            alt=""
                          />{{ dato.pequipob }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="container" v-if="id">
              <div class="row justify-content-md-center">
                <div class="col"></div>
                <div
                  class="col col-lg-2"
                  style="
                    text-align: center;
                    background-color: red;
                    color: white;
                    font-weight: bold;
                    font-size: 180%;
                    border-color: red;
                    border-radius: 500px;
                  "
                >
                  {{ jornada }}
                </div>
                <div class="col"></div>
              </div>
              <div class="row justify-content-md-center">
                <div
                  class="col col-lg-2"
                  style="
                    text-align: right;
                    font-weight: bold;
                    font-size: 150%;
                    background-color: lightgrey;
                    border-right-style: solid;
                    border-width: 10px;
                    border-color: red;
                    border-radius: 500px;
                  "
                >
                  {{ estpartido[0].pequipoa }}
                </div>
                <div
                  class="col col-lg-1"
                  style="
                    text-align: center;
                    font-weight: bold;
                    font-size: 150%;
                    background-color: black;
                    color: white;
                    border-radius: 500px;
                  "
                >
                  {{ estpartido[0].peamarcador + " " }} :
                  {{ " " + estpartido[0].pebmarcador }}
                </div>
                <div
                  class="col col-lg-2"
                  style="
                    text-align: left;
                    font-weight: bold;
                    font-size: 150%;
                    background-color: lightgrey;
                    border-left-style: solid;
                    border-width: 10px;
                    border-color: red;
                    border-radius: 500px;
                  "
                >
                  {{ estpartido[0].pequipob }}
                </div>
              </div>
              <br />
              <div class="row justify-content-md-center">
                <div class="col"></div>
                <div
                  class="col col-lg-2"
                  style="text-align: center; font-weight: bold; font-size: 100%"
                >
                  GOLES
                </div>
                <div class="col"></div>
              </div>

              <div class="container">
                <div class="row justify-content-md-center">
                  <div class="col col-lg-auto">
                    <ul style="list-style: none; text-align: right">
                      <li :key="dato" v-for="dato in estadisticasA">
                        <a v-if="dato.egoles > 0">{{ dato.egoles + " " }}X</a>
                        <i class="fas fa-futbol" v-if="dato.egoles > 0"></i>
                        <a style="font-weight: bold" v-if="dato.egoles > 0">{{
                          dato.estNombre + " " + dato.estApellido
                        }}</a>
                      </li>
                    </ul>
                  </div>

                  <div class="col col-lg-auto">
                    <ul
                      style="
                        list-style: none;
                        text-align: left;
                        border-left-style: solid;
                      "
                    >
                      <li :key="dato" v-for="dato in estadisticasb">
                        <a style="font-weight: bold" v-if="dato.estGol > 0">{{
                          dato.estNombre + " " + dato.estApellido
                        }}</a>
                        <i class="fas fa-futbol" v-if="dato.estGol > 0"></i>
                        <a v-if="dato.estGol > 0">X{{ " " + dato.estGol }}</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <br />
              <div class="row justify-content-md-center">
                <div class="col"></div>
                <div
                  class="col col-lg-2"
                  style="text-align: center; font-weight: bold; font-size: 100%"
                >
                  AMONESTACIONES
                </div>
                <div class="col"></div>
              </div>

              <div class="container">
                <div class="row justify-content-md-center">
                  <div class="col col-lg-auto">
                    <ul style="list-style: none; text-align: right">
                      <li :key="dato" v-for="dato in estadisticasA">
                        <i
                          class="fas fa-clone"
                          style="color: #feb236"
                          v-if="dato.estAmarilla >= 1"
                        ></i>
                        <i
                          class="fas fa-tablet"
                          style="color: #feb236"
                          v-if="dato.estAmarilla == 1"
                        ></i>
                        <i
                          class="fas fa-tablet"
                          style="color: red"
                          v-if="dato.estRoja == 1"
                        ></i>
                        <a
                          style="font-weight: bold"
                          v-if="
                            dato.estAmarilla > 0 ||
                            dato.estRoja > 0 ||
                            dato.estDobAmarilla > 0
                          "
                          >{{ dato.estNombre + " " + dato.estApellido }}</a
                        >
                        <br v-if="dato.estAmonestacion > 0" /><small
                          class="form-text text-muted"
                          v-if="dato.estAmonestacion > 0"
                          >Jugador sancionado por
                          {{ " " + dato.estAmonestacion + " " }}
                          partidos.</small
                        >
                      </li>
                    </ul>
                  </div>

                  <div class="col col-lg-auto">
                    <ul
                      style="
                        list-style: none;
                        text-align: left;
                        border-left-style: solid;
                      "
                    >
                      <li :key="dato" v-for="dato in estadisticasB">
                        <a
                          style="font-weight: bold"
                          v-if="
                            dato.estAmarilla > 0 ||
                            dato.estRoja > 0 ||
                            dato.estDobAmarilla > 0
                          "
                          >{{ dato.estNombre + " " + dato.estApellido }}</a
                        >
                        <i
                          class="fas fa-clone"
                          style="color: #feb236"
                          v-if="dato.estAmarilla > 1"
                        ></i>
                        <i
                          class="fas fa-tablet"
                          style="color: #feb236"
                          v-if="dato.estAmarilla == 1"
                        ></i>
                        <i
                          class="fas fa-tablet"
                          style="color: red"
                          v-if="dato.estRoja == 1"
                        ></i>
                        <br v-if="dato.estAmonestacion > 0" /><small
                          class="form-text text-muted"
                          v-if="dato.estAmonestacion > 0"
                          >Jugador sancionado por
                          {{ " " + dato.estAmonestacion + " " }}
                          partidos.</small
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-3 col-sm-6" :key="dato" v-for="dato in fotos">
              <a :href="dato.imageURL" target="_blank">
                <img
                  :src="dato.preview"
                  style="margin-bottom: 10px"
                  class="img-thumbnail"
                />
              </a>
            </div>
          </div>
        </div>
      </main>
      <main role="main" v-if="tablas">
        <div class="container">
          <br />
          <h2>
            {{ titulo }}
          </h2>
          <button class="btn btn-success" @click="fnGoleadores()">
            Goleadores
          </button>
          <button
            class="btn btn-success"
            @click="fnTablaAnual()"
          >
            Tabla anual
            <img src="img/loader.gif" width="15" alt="" v-if="loader1" />
          </button>
          <button class="btn btn-success" @click="fnMostrarTorneos()">
            {{ buttonTittle }}
          </button>
          <div v-if="mostrarTorneos">
            <!--
            <button class="btn btn-warning" @click="fnGlobalTablas()">
              Global
            </button>
            -->
            <button
              class="btn btn-warning"
              :key="dato"
              v-for="dato in torneos"
              @click="fnTorneoTabla(dato.id)"
            >
              {{ dato.tnombre }}
            </button>
          </div>

          <!-- Tabs with icons on Card -->
          <div class="card card-nav-tabs" v-if="goleador">
            <div class="card-header card-header-primary">
              <!-- colors: "header-primary", "header-info", "header-success", "header-warning", "header-danger" -->
              <div class="nav-tabs-navigation">
                <div class="nav-tabs-wrapper"></div>
              </div>
            </div>
            <div class="card-body">
              <div class="tab-content text-center">
                <div class="tab-pane active">
                  <table class="table">
                    <thead class="thead-dark">
                      <tr>
                        <th scope="col">Equipo</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Goles</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-if="cpGoleadores[0] != undefinded">
                        <td
                          style="text-align: right"
                          v-if="cpGoleadores[0] != undefinded"
                        >
                          {{ cpGoleadores[0].equipo }}
                          <img
                            :src="cpGoleadores[0].escudo"
                            width="50"
                            alt=""
                          />
                        </td>
                        <td v-if="cpGoleadores[0] != undefinded">
                          {{
                            cpGoleadores[0].nombre +
                            " " +
                            cpGoleadores[0].apellido
                          }}
                        </td>
                        <td
                          style="text-align: left"
                          v-if="cpGoleadores[0].goles > 0"
                        >
                          {{ cpGoleadores[0].goles }}
                        </td>
                      </tr>
                      <tr v-if="cpGoleadores[1] != undefinded">
                        <td
                          style="text-align: right"
                          v-if="cpGoleadores[1].goles > 0"
                        >
                          {{ cpGoleadores[1].equipo }}
                          <img
                            :src="cpGoleadores[1].escudo"
                            width="50"
                            alt=""
                          />
                        </td>
                        <td v-if="cpGoleadores[1].goles > 0">
                          {{
                            cpGoleadores[1].nombre +
                            " " +
                            cpGoleadores[1].apellido
                          }}
                        </td>
                        <td
                          style="text-align: left"
                          v-if="cpGoleadores[1].goles > 0"
                        >
                          {{ cpGoleadores[1].goles }}
                        </td>
                      </tr>
                      <tr v-if="cpGoleadores[2] != undefinded">
                        <td
                          style="text-align: right"
                          v-if="cpGoleadores[2].goles > 0"
                        >
                          {{ cpGoleadores[2].equipo }}
                          <img
                            :src="cpGoleadores[2].escudo"
                            width="50"
                            alt=""
                          />
                        </td>
                        <td v-if="cpGoleadores[2].goles > 0">
                          {{
                            cpGoleadores[2].nombre +
                            " " +
                            cpGoleadores[2].apellido
                          }}
                        </td>
                        <td
                          style="text-align: left"
                          v-if="cpGoleadores[2].goles > 0"
                        >
                          {{ cpGoleadores[2].goles }}
                        </td>
                      </tr>
                      <tr v-if="cpGoleadores[3] != undefinded">
                        <td
                          style="text-align: right"
                          v-if="cpGoleadores[3].goles > 0"
                        >
                          {{ cpGoleadores[3].equipo }}
                          <img
                            :src="cpGoleadores[3].escudo"
                            width="50"
                            alt=""
                          />
                        </td>
                        <td v-if="cpGoleadores[3].goles > 0">
                          {{
                            cpGoleadores[3].nombre +
                            " " +
                            cpGoleadores[3].apellido
                          }}
                        </td>
                        <td
                          style="text-align: left"
                          v-if="cpGoleadores[3].goles > 0"
                        >
                          {{ cpGoleadores[3].goles }}
                        </td>
                      </tr>
                      <tr v-if="cpGoleadores[4] != undefinded">
                        <td
                          style="text-align: right"
                          v-if="cpGoleadores[4].goles > 0"
                        >
                          {{ cpGoleadores[4].equipo }}
                          <img
                            :src="cpGoleadores[4].escudo"
                            width="50"
                            alt=""
                          />
                        </td>
                        <td v-if="cpGoleadores[4].goles > 0">
                          {{
                            cpGoleadores[4].nombre +
                            " " +
                            cpGoleadores[4].apellido
                          }}
                        </td>
                        <td
                          style="text-align: left"
                          v-if="cpGoleadores[4].goles > 0"
                        >
                          {{ cpGoleadores[4].goles }}
                        </td>
                      </tr>
                      <tr v-if="cpGoleadores[5] != undefinded">
                        <td
                          style="text-align: right"
                          v-if="cpGoleadores[5].goles > 0"
                        >
                          {{ cpGoleadores[5].equipo }}
                          <img
                            :src="cpGoleadores[5].escudo"
                            width="50"
                            alt=""
                          />
                        </td>
                        <td v-if="cpGoleadores[5].goles > 0">
                          {{
                            cpGoleadores[5].nombre +
                            " " +
                            cpGoleadores[5].apellido
                          }}
                        </td>
                        <td
                          style="text-align: left"
                          v-if="cpGoleadores[5].goles > 0"
                        >
                          {{ cpGoleadores[5].goles }}
                        </td>
                      </tr>
                      <tr v-if="cpGoleadores[6] != undefinded">
                        <td
                          style="text-align: right"
                          v-if="cpGoleadores[6].goles > 0"
                        >
                          {{ cpGoleadores[6].equipo }}
                          <img
                            :src="cpGoleadores[6].escudo"
                            width="50"
                            alt=""
                          />
                        </td>
                        <td v-if="cpGoleadores[6].goles > 0">
                          {{
                            cpGoleadores[6].nombre +
                            " " +
                            cpGoleadores[6].apellido
                          }}
                        </td>
                        <td
                          style="text-align: left"
                          v-if="cpGoleadores[6].goles > 0"
                        >
                          {{ cpGoleadores[6].goles }}
                        </td>
                      </tr>
                      <tr v-if="cpGoleadores[7] != undefinded">
                        <td
                          style="text-align: right"
                          v-if="cpGoleadores[7].goles > 0"
                        >
                          {{ cpGoleadores[7].equipo }}
                          <img
                            :src="cpGoleadores[7].escudo"
                            width="50"
                            alt=""
                          />
                        </td>
                        <td v-if="cpGoleadores[7].goles > 0">
                          {{
                            cpGoleadores[7].nombre +
                            " " +
                            cpGoleadores[7].apellido
                          }}
                        </td>
                        <td
                          style="text-align: left"
                          v-if="cpGoleadores[7].goles > 0"
                        >
                          {{ cpGoleadores[7].goles }}
                        </td>
                      </tr>
                      <tr v-if="cpGoleadores[8] != undefinded">
                        <td
                          style="text-align: right"
                          v-if="cpGoleadores[8].goles > 0"
                        >
                          {{ cpGoleadores[8].equipo }}
                          <img
                            :src="cpGoleadores[8].escudo"
                            width="50"
                            alt=""
                          />
                        </td>
                        <td v-if="cpGoleadores[8].goles > 0">
                          {{
                            cpGoleadores[8].nombre +
                            " " +
                            cpGoleadores[8].apellido
                          }}
                        </td>
                        <td
                          style="text-align: left"
                          v-if="cpGoleadores[8].goles > 0"
                        >
                          {{ cpGoleadores[8].goles }}
                        </td>
                      </tr>
                      <tr v-if="cpGoleadores[9] != undefinded">
                        <td
                          style="text-align: right"
                          v-if="cpGoleadores[9].goles > 0"
                        >
                          {{ cpGoleadores[9].equipo }}
                          <img
                            :src="cpGoleadores[9].escudo"
                            width="50"
                            alt=""
                          />
                        </td>
                        <td v-if="cpGoleadores[9].goles > 0">
                          {{
                            cpGoleadores[9].nombre +
                            " " +
                            cpGoleadores[9].apellido
                          }}
                        </td>
                        <td
                          style="text-align: left"
                          v-if="cpGoleadores[9].goles > 0"
                        >
                          {{ cpGoleadores[9].goles }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class="card card-nav-tabs" v-if="global">
            <div class="card-header card-header-primary">
              <!-- colors: "header-primary", "header-info", "header-success", "header-warning", "header-danger" -->
              <div class="nav-tabs-navigation">
                <div class="nav-tabs-wrapper"></div>
              </div>
            </div>
            <div class="card-body">
              <div class="tab-content text-center">
                <div class="tab-pane active">
                  <table class="table">
                    <thead class="thead-dark">
                      <tr>
                        <th scope="col"></th>
                        <th scope="col">Club</th>
                        <th scope="col">PJ</th>
                        <th scope="col">PG</th>
                        <th scope="col">PP</th>
                        <th scope="col">PE</th>
                        <th scope="col">G+</th>
                        <th scope="col">G-</th>
                        <th scope="col">+/-</th>
                        <th scope="col">PTS</th>
                        <th scope="col">Fair play</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr :key="dato" v-for="dato in cplstTablas">
                        <td>
                          <img :src="dato.escudo" width="50" alt="" />
                        </td>
                        <td>{{ dato.equipo }}</td>
                        <td>{{ dato.pj }}</td>
                        <td>{{ dato.pg }}</td>
                        <td>{{ dato.pp }}</td>
                        <td>{{ dato.pe }}</td>
                        <td>{{ dato.gmas }}</td>
                        <td>{{ dato.gmenos }}</td>
                        <td>{{ dato.saldo }}</td>
                        <td>{{ dato.puntos }}</td>
                        <td>{{ dato.fp }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <main role="main" v-if="clubes">
        <div class="container">
          <br />
          <h2>
            {{ titulo }}
          </h2>
          <!-- Tabs with icons on Card -->
          <div class="card card-nav-tabs">
            <div class="card-header card-header-primary">
              <!-- colors: "header-primary", "header-info", "header-success", "header-warning", "header-danger" -->
              <div class="nav-tabs-navigation">
                <div class="nav-tabs-wrapper"></div>
              </div>
            </div>
            <div class="card-body">
              <div class="tab-content text-center">
                <div class="tab-pane active">
                  <table class="table">
                    <thead class="thead-dark">
                      <tr>
                        <th scope="col">Equipo</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        :key="dato"
                        v-for="dato in lstClubes"
                        @click="fnJugadores(dato.id)"
                      >
                        <td>
                          {{ dato.enombre }}
                          <img :src="dato.eescudo" width="50" alt="" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div class="card-body" v-if="jugadores">
              <div class="tab-content text-center">
                <div class="tab-pane active">
                  <table class="table">
                    <thead class="thead-dark">
                      <tr>
                        <th scope="col">Jugadores de {{ equipo }}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr :key="dato" v-for="dato in cplstJugadores">
                        <td>
                          {{ dato.nombre + " " + dato.apellido }}
                          <i
                            class="fas fa-file"
                            style="color: rgb(207, 207, 57)"
                            v-if="dato.amarillas > 0"
                          ></i>
                          <i
                            class="fas fa-file"
                            style="color: rgb(207, 207, 57)"
                            v-if="dato.amarillas == 2"
                          ></i>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import _ from "lodash";
Object.defineProperty(Vue.prototype, "$_", { value: _ });

export default {
  data() {
    return {
      datos: [],
      menu: [],
      menuExclusivo: [],
      fotos: [],
      fechas: [],
      torneos: [],
      partidos: [],
      escudosA: [],
      escudosB: [],
      estadisticasA: [],
      estadisticasB: [],
      goleadores: [],
      lstClubes: [],
      lstTablas: [],
      lstJugadores: [],
      fechaId: "",
      partidoId: "",
      divisionalId: "",
      equipo: "",
      titulo: "",
      loader: false,
      api: "https://league33.herokuapp.com/api",
      buttonTittle: "Mostrar torneos >>",
      loader1: false,

      //Menu Elementos
      fotosresultados: false,
      tablas: false,
      puntos: false,
      general: false,
      clubes: false,
      goleador: false,
      global: false,
      mostrarTorneos: false,
      jugadores: false,
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
          if (element.divisional || ("" && element.divisional != "Exclusivo")) {
            this.menu.push({
              divisional: element.divisional,
              id: element._id,
            });
          }
        }

        for (let i = 0; i < this.datos.length; i++) {
          const element = this.datos[i];
          if (element.tdivisional == "Exclusivo") {
            this.menuExclusivo.push({
              tnombre: element.tnombre,
              id: element._id,
            });
          }
        }
      });
    },
    fnSelTorneo(id) {
      this.fechas = [];
      this.partidos = [];
      for (let i = 0; i < this.datos.length; i++) {
        const element = this.datos[i];
        if (element.ftorneo == id) {
          this.fechas.push({
            fnombre: element.fnombre,
            id: element._id,
          });
        }
      }
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
    fnFotos(id) {
      this.fotos = [];
      this.estadisticasA = [];
      this.estadisticasB = [];
      let preview = "";

      for (let i = 0; i < this.datos.length; i++) {
        const element = this.datos[i];
        if (element.title == id) {
          preview = element.imageURL;
          preview = preview.slice(0, 49) + "q_10/" + preview.slice(49);

          this.fotos.push({
            imageURL: element.imageURL,
            preview: preview,
          });
        }
      }
    },

    fnTablas(id) {
      this.fotosresultados = true;
      this.fnSelTorneo(id);
    },

    fnFotosyResultados() {
      this.torneos = [];
      this.fechas = [];
      this.fotosresultados = true;

      for (let i = 0; i < this.datos.length; i++) {
        const element = this.datos[i];
        if (element.tdivisional == this.divisionalId) {
          this.torneos.push({
            tnombre: element.tnombre,
            id: element._id,
          });
        }
      }
    },

    fnGoleadores() {
      this.goleadores = [];
      let jugadorId = "";
      let nombre = "";
      let apellido = "";
      let equipoId = "";
      let equipo = "";
      let escudo = "";
      let goles = 0;
      let chek = true;
      const jugadores = [];
      let srchEquipo = "";
      let srchJugador = "";

      if (this.goleador) {
        this.goleador = false;
      } else {
        this.goleador = true;
      }

      for (let i = 0; i < this.datos.length; i++) {
        const element = this.datos[i];
        if (element.edivision == this.divisionalId) {
          srchEquipo = element._id;
          console.log(srchEquipo);

          for (let i = 0; i < this.datos.length; i++) {
            const element = this.datos[i];
            if (element.jequipo == srchEquipo) {
              srchJugador = element._id;
              console.log(srchJugador);

              for (let i = 0; i < this.datos.length; i++) {
                const element = this.datos[i];
                if (element.ejugador == srchJugador) {
                  jugadores.push({
                    ejugador: element.ejugador,
                    egoles: element.egoles,
                  });
                }
              }
            }
          }
        }
      }

      for (let i = 0; i < jugadores.length; i++) {
        const element = jugadores[i];
        if (element.egoles > 0) {
          jugadorId = element.ejugador;
          goles = parseInt(element.egoles);
          console.log("Jugador encontrado");

          for (let i = 0; i < this.datos.length; i++) {
            const jugador = this.datos[i];
            if (jugador._id == jugadorId) {
              nombre = jugador.jnombre;
              apellido = jugador.japellido;
              equipoId = jugador.jequipo;
              console.log(
                "Jugador: " +
                  nombre +
                  " / " +
                  apellido +
                  " / " +
                  goles +
                  " / " +
                  equipoId
              );
            }
          }

          for (let i = 0; i < this.datos.length; i++) {
            const element = this.datos[i];
            if (element.enombre == equipoId) {
              equipoId = element._id;
            }
          }

          for (let i = 0; i < this.datos.length; i++) {
            const xequipo = this.datos[i];
            if (xequipo._id == equipoId) {
              equipo = xequipo.enombre;
              console.log("Equipo: " + equipo);
            }
          }

          for (let i = 0; i < this.datos.length; i++) {
            const xescudo = this.datos[i];
            if (xescudo.title == equipoId) {
              escudo = xescudo.imageURL;
              console.log("Escudo: " + escudo);
            }
          }

          for (let i = 0; i < this.goleadores.length; i++) {
            const elementg = this.goleadores[i];
            console.log("Buscando jugador");
            if (elementg.jugadorId == jugadorId && i > 0) {
              console.log("Jugador existente");
              console.log("____________________________________");
              this.goleadores[i].goles = this.goleadores[i].goles + goles;
              chek = false;
              break;
            }
          }

          if (chek) {
            console.log("No existe");
            console.log("____________________________________");
            this.goleadores.push({
              nombre: nombre,
              apellido: apellido,
              jugadorId: jugadorId,
              equipo: equipo,
              escudo: escudo,
              goles: goles,
            });
          }
          chek = true;
        }
      }
    },

    fnClubes() {
      this.lstClubes = [];
      let enombre = "";
      let equipoid = "";
      let eescudo = "";
      let srchEquipo = "";

      for (let i = 0; i < this.datos.length; i++) {
        const element = this.datos[i];
        if (element.edivision == this.divisionalId) {
          srchEquipo = element._id;
          enombre = element.enombre;
          equipoid = element._id;

          for (let i = 0; i < this.datos.length; i++) {
            const element = this.datos[i];
            if (element.title == srchEquipo) {
              eescudo = element.imageURL;

              this.lstClubes.push({
                id: equipoid,
                enombre: enombre,
                eescudo: eescudo,
              });
            }
          }
        }
      }
    },

    fnInicializar() {
      this.fotos = [];
      this.fechas = [];
      this.torneos = [];
      this.partidos = [];
      this.escudosA = [];
      this.escudosB = [];
      this.estadisticasA = [];
      this.estadisticasB = [];
      this.goleadores = [];
      this.lstClubes = [];
      this.lstTablas = [];
      this.jugadores = false;
    },

    fnMostrarTorneos() {
      this.torneos = [];

      if (this.buttonTittle == "Mostrar torneos >>") {
        this.mostrarTorneos = true;
        this.global = true;
        this.buttonTittle = "Ocultar torneos <<";
      } else {
        this.mostrarTorneos = false;
        this.global = false;
        this.buttonTittle = "Mostrar torneos >>";
      }

      for (let i = 0; i < this.datos.length; i++) {
        const element = this.datos[i];
        if (element.tdivisional == this.divisionalId) {
          this.torneos.push({
            id: element._id,
            tnombre: element.tnombre,
          });
        }
      }
    },

    fnGlobalTablas() {
      let pj = 0;
      let pg = 0;
      let pp = 0;
      let pe = 0;
      let gmas = 0;
      let gmenos = 0;
      let saldo = 0;
      let puntos = 0;
      let fp = 0;
      let equipo = "";
      let torneo = "";
      let fecha = "";
      let escudo = "";
      let srchEquipo = "";
      this.lstTablas = [];

      const partidos = [];

      for (let i = 0; i < this.torneos.length; i++) {
        torneo = this.torneos[i];
        for (let i = 0; i < this.datos.length; i++) {
          const element = this.datos[i];
          if (element.ftorneo == torneo) {
            fecha = element._id;
            for (let i = 0; i < this.datos.length; i++) {
              const element = this.datos[i];
              if (element.pfechaid == fecha) {
                partidos.push({
                  pequipoa: element.pequipoa,
                  pequipob: element.pequipob,
                  peagoles: element.peagoles,
                  pebgoles: element.pebgoles,
                  pfpa: element.pfpa,
                  pfpb: element.pfpb,
                });
              }
            }
          }
        }
      }

      for (let i = 0; i < this.datos.length; i++) {
        const element = this.datos[i];
        if (element.edivision == this.divisionalId) {
          srchEquipo = element.enombre;
          equipo = element.enombre;
          for (let i = 0; i < this.datos.length; i++) {
            const element = this.datos[i];
            if (element.title == srchEquipo) {
              escudo = element.imageURL;
            }
          }
          for (let i = 0; i < partidos.length; i++) {
            const element = partidos[i];
            if (element.pequipoa == srchEquipo) {
              if (element.peagoles >= 0) {
                pj++;
              }
              if (element.peagoles > element.pebgoles) {
                pg++;
                gmas = gmas + parseInt(element.peagoles);
                gmenos = gmenos + parseInt(element.pebgoles);
              }
              if (element.peagoles < element.pebgoles) {
                pp++;
                gmas = gmas + parseInt(element.peagoles);
                gmenos = gmenos + parseInt(element.pebgoles);
              }
              if (parseInt(element.peagoles) == parseInt(element.pebgoles)) {
                pe++;
                gmas = gmas + parseInt(element.peagoles);
                gmenos = gmenos + parseInt(element.pebgoles);
              }
              puntos = puntos + pg * 3 + pe;
              saldo = gmas - gmenos;
              fp = fp + parseInt(element.pfpa);
            }
            if (element.pequipob == srchEquipo) {
              if (element.pebgoles >= 0) {
                pj++;
              }
              if (element.peagoles < element.pebgoles) {
                pg++;
                gmas = gmas + parseInt(element.pebgoles);
                gmenos = gmenos + parseInt(element.peagoles);
              }
              if (element.peagoles > element.pebgoles) {
                pp++;
                gmas = gmas + parseInt(element.pebgoles);
                gmenos = gmenos + parseInt(element.peagoles);
              }
              if (parseInt(element.peagoles) == parseInt(element.pebgoles)) {
                pe++;
                gmas = gmas + parseInt(element.pebgoles);
                gmenos = gmenos + parseInt(element.peagoles);
              }
              puntos = puntos + pg * 3 + pe;
              saldo = gmas - gmenos;
              fp = fp + parseInt(element.pfpb);
            }
            this.lstTablas.push({
              equipo: equipo,
              escudo: escudo,
              pj: pj,
              pg: pg,
              pe: pe,
              pp: pp,
              gmas: gmas,
              gmenos: gmenos,
              fp: fp,
              saldo: saldo,
              puntos: puntos,
            });
          }
          pj = 0;
          pg = 0;
          pe = 0;
          pp = 0;
          gmenos = 0;
          gmas = 0;
          fp = 0;
          saldo = 0;
          puntos = 0;
        }
      }
    },

    fnTorneoTabla(torneo) {
      let pj = 0;
      let pg = 0;
      let pp = 0;
      let pe = 0;
      let gmas = 0;
      let gmenos = 0;
      let saldo = 0;
      let puntos = 0;
      let fp = 0;
      let equipo = "";
      let equipoId = "";
      let fecha = "";
      let escudo = "";
      let srchEquipo = "";
      this.lstTablas = [];

      const partidos = [];

      for (let i = 0; i < this.datos.length; i++) {
        const element = this.datos[i];
        if (element.ftorneo == torneo) {
          fecha = element._id;
          for (let i = 0; i < this.datos.length; i++) {
            const element = this.datos[i];
            if (element.pfechaid == fecha) {
              partidos.push({
                pequipoa: element.pequipoa,
                pequipob: element.pequipob,
                peagoles: element.peagoles,
                pebgoles: element.pebgoles,
                pfpa: element.pfpa,
                pfpb: element.pfpb,
              });
              console.log("Agregando partido...");
              console.log(partidos);
            }
          }
        }
      }

      for (let i = 0; i < this.datos.length; i++) {
        const element = this.datos[i];
        if (element.edivision == this.divisionalId) {
          srchEquipo = element.enombre;
          equipo = element.enombre;
          pj = 0;
          pg = 0;
          pe = 0;
          pp = 0;
          gmenos = 0;
          gmas = 0;
          fp = 0;
          saldo = 0;
          puntos = 0;
          for (let i = 0; i < this.datos.length; i++) {
            const element = this.datos[i];
            if (element.enombre == srchEquipo) {
              equipoId = element._id;
              for (let i = 0; i < this.datos.length; i++) {
                const element = this.datos[i];
                if (element.title == equipoId) {
                  escudo = element.imageURL;
                  break;
                }
              }
            }
          }
          for (let i = 0; i < partidos.length; i++) {
            const element = partidos[i];
            if (element.pequipoa == srchEquipo) {
              if (parseInt(element.peagoles) >= 0) {
                pj++;
              }
              if (parseInt(element.peagoles) > parseInt(element.pebgoles)) {
                pg++;
                gmas = gmas + parseInt(element.peagoles);
                gmenos = gmenos + parseInt(element.pebgoles);
              }
              if (parseInt(element.peagoles) < parseInt(element.pebgoles)) {
                pp++;
                gmas = gmas + parseInt(element.peagoles);
                gmenos = gmenos + parseInt(element.pebgoles);
              }
              if (parseInt(element.peagoles) == parseInt(element.pebgoles)) {
                pe++;
                gmas = gmas + parseInt(element.peagoles);
                gmenos = gmenos + parseInt(element.pebgoles);
              }
              saldo = gmas - gmenos;
              if (parseInt(element.pfpa) >= 0) {
                fp = fp + parseInt(element.pfpa);
              }
            }
            if (element.pequipob == srchEquipo) {
              if (parseInt(element.pebgoles) >= 0) {
                pj++;
              }
              if (parseInt(element.peagoles) < parseInt(element.pebgoles)) {
                pg++;
                gmas = gmas + parseInt(element.pebgoles);
                gmenos = gmenos + parseInt(element.peagoles);
              }
              if (parseInt(element.peagoles) > parseInt(element.pebgoles)) {
                console.log("Sumango datos " + "pp2: " + pp);
                pp++;
                gmas = gmas + parseInt(element.pebgoles);
                gmenos = gmenos + parseInt(element.peagoles);
              }
              if (parseInt(element.peagoles) == parseInt(element.pebgoles)) {
                console.log("Sumango datos " + "pe2: " + pe);
                pe++;
                gmas = gmas + parseInt(element.pebgoles);
                gmenos = gmenos + parseInt(element.peagoles);
              }
              saldo = gmas - gmenos;
              if (parseInt(element.pfpb) >= 0) {
                fp = fp + parseInt(element.pfpb);
              }
            }
          }
          if (pj > 0) {
            this.lstTablas.push({
              equipo: equipo,
              escudo: escudo,
              pj: pj,
              pg: pg,
              pe: pe,
              pp: pp,
              gmas: gmas,
              gmenos: gmenos,
              fp: fp,
              saldo: saldo,
              puntos: pg * 3 + pe,
            });
          }
        }
      }
    },

    fnJugadores(equipo) {
      this.lstJugadores = [];
      this.jugadores = true;

      console.log(equipo);

      for (let i = 0; i < this.datos.length; i++) {
        const element = this.datos[i];
        if (element._id == equipo) {
          this.equipo = element.enombre;
          break;
        }
      }

      for (let i = 0; i < this.datos.length; i++) {
        const element = this.datos[i];
        if (element.jequipo == equipo) {
          this.lstJugadores.push({
            nombre: element.jnombre,
            apellido: element.japellido,
            amarillas: element.jtarjetasam,
          });
        }
      }
    },

    fnTablaAnual() {
      if (this.global) {
        this.global = false;
      } else {
        this.global = true;
      }

      let pj = 0;
      let pg = 0;
      let pp = 0;
      let pe = 0;
      let gmas = 0;
      let gmenos = 0;
      let saldo = 0;
      let puntos = 0;
      let fp = 0;
      let equipo = "";
      let equipoId = "";
      let fecha = "";
      let escudo = "";
      let srchEquipo = "";
      this.lstTablas = [];

      const partidos = [];

      for (let i = 0; i < this.datos.length; i++) {
        const element = this.datos[i];
        if (
          element.ftorneo != "611d6e2ae9fba80015ad49e7" &&
          element.ftorneo != "6039c3fce8c5cb001508aae5"
        ) {
          fecha = element._id;
          for (let i = 0; i < this.datos.length; i++) {
            const element = this.datos[i];
            if (element.pfechaid == fecha) {
              partidos.push({
                pequipoa: element.pequipoa,
                pequipob: element.pequipob,
                peagoles: element.peagoles,
                pebgoles: element.pebgoles,
                pfpa: element.pfpa,
                pfpb: element.pfpb,
              });
              console.log("Agregando partido...");
              console.log(partidos);
            }
          }
        }
      }

      for (let i = 0; i < this.datos.length; i++) {
        const element = this.datos[i];
        if (element.edivision == this.divisionalId) {
          srchEquipo = element.enombre;
          equipo = element.enombre;
          pj = 0;
          pg = 0;
          pe = 0;
          pp = 0;
          gmenos = 0;
          gmas = 0;
          fp = 0;
          saldo = 0;
          puntos = 0;
          for (let i = 0; i < this.datos.length; i++) {
            const element = this.datos[i];
            if (element.enombre == srchEquipo) {
              equipoId = element._id;
              for (let i = 0; i < this.datos.length; i++) {
                const element = this.datos[i];
                if (element.title == equipoId) {
                  escudo = element.imageURL;
                  break;
                }
              }
            }
          }
          for (let i = 0; i < partidos.length; i++) {
            const element = partidos[i];
            if (element.pequipoa == srchEquipo) {
              if (parseInt(element.peagoles) >= 0) {
                pj++;
              }
              if (parseInt(element.peagoles) > parseInt(element.pebgoles)) {
                pg++;
                gmas = gmas + parseInt(element.peagoles);
                gmenos = gmenos + parseInt(element.pebgoles);
              }
              if (parseInt(element.peagoles) < parseInt(element.pebgoles)) {
                pp++;
                gmas = gmas + parseInt(element.peagoles);
                gmenos = gmenos + parseInt(element.pebgoles);
              }
              if (parseInt(element.peagoles) == parseInt(element.pebgoles)) {
                pe++;
                gmas = gmas + parseInt(element.peagoles);
                gmenos = gmenos + parseInt(element.pebgoles);
              }
              saldo = gmas - gmenos;
              if (parseInt(element.pfpa) >= 0) {
                fp = fp + parseInt(element.pfpa);
              }
            }
            if (element.pequipob == srchEquipo) {
              if (parseInt(element.pebgoles) >= 0) {
                pj++;
              }
              if (parseInt(element.peagoles) < parseInt(element.pebgoles)) {
                pg++;
                gmas = gmas + parseInt(element.pebgoles);
                gmenos = gmenos + parseInt(element.peagoles);
              }
              if (parseInt(element.peagoles) > parseInt(element.pebgoles)) {
                console.log("Sumango datos " + "pp2: " + pp);
                pp++;
                gmas = gmas + parseInt(element.pebgoles);
                gmenos = gmenos + parseInt(element.peagoles);
              }
              if (parseInt(element.peagoles) == parseInt(element.pebgoles)) {
                console.log("Sumango datos " + "pe2: " + pe);
                pe++;
                gmas = gmas + parseInt(element.pebgoles);
                gmenos = gmenos + parseInt(element.peagoles);
              }
              saldo = gmas - gmenos;
              if (parseInt(element.pfpb) >= 0) {
                fp = fp + parseInt(element.pfpb);
              }
            }
          }
          if (pj > 0) {
            this.lstTablas.push({
              equipo: equipo,
              escudo: escudo,
              pj: pj,
              pg: pg,
              pe: pe,
              pp: pp,
              gmas: gmas,
              gmenos: gmenos,
              fp: fp,
              saldo: saldo,
              puntos: pg * 3 + pe,
            });
            this.loader1 = false;
          }
        }
      }
    },
  },

  computed: {
    cpMenuDiv: function () {
      return _.sortBy(this.menu, ["divisional"]);
    },
    cpMenuExc: function () {
      return _.sortBy(this.menuExclusivo, ["divisional"]);
    },
    cpGoleadores: function () {
      return _.orderBy(this.goleadores, ["goles"], ["desc"]);
    },
    cplstTablas: function () {
      return _.orderBy(this.lstTablas, ["puntos", "saldo"], ["desc", "desc"]);
    },
    cplstJugadores: function () {
      return _.orderBy(this.lstJugadores, ["nombre"]);
    },
  },
};
</script>

<style scoped>
.asd {
  color: rgb(207, 207, 57);
}
</style>