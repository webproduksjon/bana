# ABC Bygg AS — statisk nettsted

Dette er en ren statisk nettside laget med vanlig HTML, CSS og JavaScript. Den har ingen React-, Vite-, Node.js-, Manus- eller tredjepartsruntime-avhengighet.

## Lokal forhåndsvisning

Åpne `index.html` direkte i nettleseren, eller last opp hele mappen til et webhotell. Nettstedet er laget for vanlig statisk hosting.

## Publisering til abcbyggas.no på Domene.no

Last opp innholdet i denne mappen til dokumentroten for `abcbyggas.no`, vanligvis `public_html`. `index.html` må ligge direkte i dokumentroten. Ikke last opp selve repository-mappen som et ekstra nivå.

Mappestrukturen skal være:

```text
public_html/index.html
public_html/.htaccess
public_html/robots.txt
public_html/sitemap.xml
public_html/assets/styles.css
public_html/assets/script.js
public_html/assets/fonts/
public_html/assets/gallery/
```

Alle interne lenker og alle bilder, fonter, CSS- og JavaScript-filer bruker relative stier. De fungerer derfor fra domenets dokumentrot uten Node.js, React, Vite eller en build-prosess.

Kontaktskjemaet bruker FormSubmit.co og sender forespørsler til `renats.bogdanovs@gmail.com`. Før første bruk må mottakeren bekrefte e-postadressen via FormSubmit. Skjemaet returnerer nå til `https://abcbyggas.no/?sent=1#kontakt` etter innsending.

### DNS og HTTPS

Koble domenet `abcbyggas.no` til Domene.no-webhotellet etter Domene.no sine DNS-instruksjoner. Sørg for at både hoveddomenet og eventuell `www`-variant peker til riktig webhotell, og aktiver SSL/HTTPS i Domene.no før lansering. Når HTTPS er aktivt, skal nettstedet åpnes på `https://abcbyggas.no/`.

Filen `CNAME` er inkludert for GitHub Pages og inneholder `abcbyggas.no`. Den er ikke nødvendig på Domene.no, men kan ligge i filene uten problem. Filen `.nojekyll` sørger for at GitHub Pages behandler nettstedet som en ren statisk eksport.

## GitHub

Opprett et nytt repository, legg filene i repositoryets rot og push dem med Git. Du kan arbeide videre med filene uten noen plattformslåsing.

## Før lansering

Kontroller at `index.html` ligger direkte i `public_html`, åpne `https://abcbyggas.no/`, test menyen på mobil, test alle seksjonslenkene og send én testmelding gjennom kontaktskjemaet. Kontroller også at `https://abcbyggas.no/robots.txt` og `https://abcbyggas.no/sitemap.xml` åpner uten 404-feil.

Bytt ut eventuell eksempeltekst og kontaktinformasjon, og kontroller at bildene er dine eller lisensiert for bruk.
