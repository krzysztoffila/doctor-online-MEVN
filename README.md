# Dr Online - Platforma Rejestracji Wizyt Medycznych

# In Progress - WALCZĘ Z BACKENDEM....

## Opis

**Dr Online** to kompleksowa platforma umożliwiająca pacjentom łatwe i wygodne zarządzanie swoimi wizytami medycznymi online. Projekt został stworzony z myślą o ułatwieniu procesu rejestracji na wizyty oraz śledzenia historii wizyt pacjentów. Platforma zapewnia szybki dostęp do informacji o dostępności terminów, a także umożliwia łatwą komunikację z zarejestrowanymi lekarzami.

## Technologie

- **Frontend:** Vue.js, BootstrapVue
- **Backend:** Node.js, Express.js
- **Baza Danych:** MongoDB
- **Autentykacja:** JSON Web Tokens (JWT)
- **Komunikacja API:** Axios

## Funkcje

1. **Rejestracja i Logowanie:** Pacjenci mogą utworzyć konto, logować się i zarządzać swoimi danymi.
2. **Rejestracja na Wizyty:** Intuicyjny interfejs umożliwia łatwe przeglądanie dostępnych terminów i rejestrację na wizyty u lekarzy.
3. **Historia Wizyt:** Pacjenci mają dostęp do historii swoich wizyt, w tym dat, lekarzy i diagnoz.
4. **Wygodna Nawigacja:** Prosta i intuicyjna nawigacja po platformie zapewnia użytkownikom łatwe korzystanie z usług.

## Wyzwania

Projekt obejmował implementację funkcji rejestracji i logowania, autoryzację przy użyciu JWT, integrację z bazą danych MongoDB oraz stworzenie responsywnego interfejsu użytkownika z wykorzystaniem Vue.js i BootstrapVue. Dodatkowo, zaimplementowano mechanizm wylogowywania, który wymagał uwierzytelnienia przy użyciu tokena JWT.

## Podsumowanie

**Dr Online** to projekt, który pozwala pacjentom skorzystać z nowoczesnych rozwiązań technologicznych, aby z łatwością zarządzać swoimi wizytami medycznymi. W trakcie realizacji zdobyłem doświadczenie w pracy z frameworkiem Vue.js, obsłudze żądań API przy użyciu Express.js oraz integracji z bazą danych MongoDB. Projekt nie tylko poprawia dostępność do usług medycznych, ale także oferuje intuicyjny interfejs, który wpływa pozytywnie na doświadczenie użytkownika.


## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
cd server
node server.js
```

### Compiles and minifies for production

```
npm run build
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
