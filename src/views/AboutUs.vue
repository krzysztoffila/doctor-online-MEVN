<template>
  <div class="m-5">
    <div class="mt-4 aboutus__container">
      <h4 class="aboutus__header">Dlaczego Wybrać Naszą Usługę?</h4>
      <b-card
        img-src="https://images.unsplash.com/photo-1649433391719-2e784576d044?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        img-width="300"
        img-height="300"
        img-alt="Card image"
        img-left
        class="mb-3"
      >
        <b-card
          header="✓ Szybkie Rezerwacje"
          header-text-variant="white"
          header-tag="header"
          header-bg-variant="info"
        >
          <b-card-text>
            Nie tracisz czasu na oczekiwanie w kolejkach. Wybierz dogodny termin
            i zarezerwuj wizytę w kilka sekund.
          </b-card-text>
        </b-card>
      </b-card>

      <b-card
        img-src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        img-height="300"
        img-alt="Card image"
        img-right
        class="mb-3"
      >
        <b-card
          class="aboutus__text-to-right"
          header="✓ Lekarze Wielu Specjalizacji"
          header-text-variant="white"
          header-tag="header"
          header-bg-variant="info"
        >
          <b-card-text>
            Nasza baza zawiera lekarzy różnych specjalizacji, gotowych służyć Ci
            fachową pomocą.
          </b-card-text>
        </b-card>
      </b-card>
      <b-card
        img-src="https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?q=80&w=1983&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        img-width="300"
        img-height="300"
        img-alt="Card image"
        img-left
        class="mb-3"
      >
        <b-card
          header="✓ Bezpieczne i Prywatne"
          header-text-variant="white"
          header-tag="header"
          header-bg-variant="info"
        >
          <b-card-text>
            Twoje dane są u nas bezpieczne. Rozmawiaj z lekarzem w komfortowym
            otoczeniu, niezależnie od miejsca, w którym się znajdujesz.
          </b-card-text>
        </b-card>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.aboutus__container {
  width: 80%;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
}
.aboutus__header {
  text-align: center;
}

.aboutus__text-to-right {
  text-align: right;
}
</style>
