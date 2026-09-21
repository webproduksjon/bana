# ABC Bygg AS — statisk nettsted

Dette er en ren statisk nettside laget med vanlig HTML, CSS og JavaScript. Den har ingen React-, Vite-, Node.js-, Manus- eller tredjepartsruntime-avhengighet.

## Lokal forhåndsvisning

Åpne `index.html` direkte i nettleseren, eller last opp hele mappen til et webhotell. Nettstedet er laget for vanlig statisk hosting.

## Publisering til Domene.no

Last opp innholdet i denne mappen til domenets dokumentrot, vanligvis `public_html`. `index.html` må ligge direkte i dokumentroten. Mappestrukturen skal være:

```text
public_html/index.html
public_html/.htaccess
public_html/assets/styles.css
public_html/assets/script.js
public_html/assets/fonts/
```

Kontaktskjemaet bruker FormSubmit.co og sender forespørsler til `renats.bogdanovs@gmail.com`. Før første bruk må mottakeren bekrefte e-postadressen via FormSubmit. Oppdater mottakeradressen og `_next`-adressen i `index.html` dersom de endres.

## GitHub

Opprett et nytt repository, legg filene i repositoryets rot og push dem med Git. Du kan arbeide videre med filene uten noen plattformslåsing.

## Før lansering

Bytt ut eksempeltekst og kontaktinformasjon, kontroller at bildene er dine eller lisensiert for bruk, og test nettstedet på mobil og desktop. Kontroller også HTTPS etter at domenet er koblet til webhotellet.
