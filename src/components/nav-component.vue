<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand class="navbar-logo" href="#">dr Online</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Zarejestruj wizytę</b-nav-item>
          <b-nav-item href="#">Twoje Wizyty</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ms-auto navbar__right">
          <b-nav-item-dropdown right class="navbar__right__dropdown">
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>Pacjent</em>
            </template>
            <b-dropdown-item href="#">Konto Pacjenta</b-dropdown-item>
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
.navbar-logo {
  margin-left: 20px;
}

.navbar__right__dropdown {
  /* width: 50px; */
  margin-right: 100px;
}
</style>
