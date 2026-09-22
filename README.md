# ABC Bygg AS — statisk nettsted

Dette er en ren statisk nettside laget med vanlig HTML, CSS og JavaScript. Den har ingen React-, Vite-, Node.js-, Manus- eller tredjepartsruntime-avhengighet.

## Lokal forhåndsvisning

Åpne `index.html` direkte i nettleseren, eller last opp hele mappen til et webhotell. Nettstedet er laget for vanlig statisk hosting.

## Publisering til Domene.no

Last opp innholdet i denne pakken direkte til hostingens dokumentrot, vanligvis `public_html`. `index.html` må ligge direkte i dokumentroten. Ikke last opp selve repository-mappen som et ekstra nivå.

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

Alle interne lenker og alle bilder, fonter, CSS- og JavaScript-filer bruker relative stier. De fungerer derfor fra `abcbyggas.no`-dokumentroten uten Node.js, React, Vite eller en build-prosess.

Kontaktskjemaet bruker FormSubmit.co og sender forespørsler til `renats.bogdanovs@gmail.com`. Før første bruk må mottakeren bekrefte e-postadressen via FormSubmit. Skjemaet returnerer til `https://abcbyggas.no/?sent=1#kontakt` etter innsending.

`.htaccess` inkluderer HTTPS-redirect og grunnleggende sikkerhetsheadere for Apache/LiteSpeed-hosting. Hvis Domene.no har en egen «Force HTTPS»-innstilling, kan den også aktiveres i kontrollpanelet.

## Filer og lenker

Nettstedets offisielle adresse er `https://abcbyggas.no/`. Canonical metadata, Open Graph metadata, sitemap, robots.txt og skjemaets returadresse bruker dette domenet. Interne lenker og statiske ressurser bruker fortsatt relative stier.

## Før lansering

Kontroller at `index.html` ligger direkte i `public_html`, åpne `https://abcbyggas.no/`, test menyen på mobil, test alle seksjonslenkene og send én testmelding gjennom kontaktskjemaet. Kontroller også at `https://abcbyggas.no/robots.txt` og `https://abcbyggas.no/sitemap.xml` åpner uten 404-feil.

Bytt ut eventuell eksempeltekst og kontaktinformasjon, og kontroller at bildene er dine eller lisensiert for bruk.
