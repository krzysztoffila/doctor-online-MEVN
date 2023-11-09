<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#"
        ><router-link to="/" class="navbar__link navbar__logo"
          >dr Online</router-link
        ></b-navbar-brand
      >

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#"
            ><router-link to="/register-visit" class="navbar__link"
              ><b-button variant="light"
                >Zarejestruj Wizytę</b-button
              ></router-link
            ></b-nav-item
          >
        </b-navbar-nav>
        <b-navbar-nav class="ms-auto navbar__right">
          <b-nav-item href="#"
            ><router-link to="/aboutus" class="navbar__link navbar__link-about">
              O nas</router-link
            ></b-nav-item
          >
          <b-nav-item-dropdown right class="navbar__right__dropdown">
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>Panel Pacjenta</em>
            </template>
            <b-dropdown-item href="#"
              ><router-link to="/user-account" class="navbar__link"
                >Konto Pacjenta</router-link
              ></b-dropdown-item
            >
            <b-dropdown-item href="#"
              ><router-link to="/user-visits" class="navbar__link"
                >Twoje Wizyty</router-link
              ></b-dropdown-item
            >
            <b-dropdown-item href="#">Wyloguj</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style>
.navbar__link {
  text-decoration: none;
  color: #000;
}
.navbar__link-about {
  color: #fff;
  margin-right: 20px;
}
.navbar__logo {
  margin-left: 30px;
  color: #fff;
}
.navbar__right__dropdown {
  margin-right: 30px;
}
</style>
