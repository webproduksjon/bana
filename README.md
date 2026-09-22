# ABC Bygg AS — statisk nettsted

Dette er en ren statisk nettside laget med vanlig HTML, CSS og JavaScript. Den har ingen React-, Vite-, Node.js-, Manus- eller tredjepartsruntime-avhengighet.

## Lokal forhåndsvisning

Åpne `index.html` direkte i nettleseren, eller last opp hele mappen til et webhotell. Nettstedet er laget for vanlig statisk hosting.

## Publisering til GitHub Pages

Legg filene i repositoryets rot og aktiver GitHub Pages fra branch `main` og mappen `/ (root)`. Nettstedet publiseres på `https://webproduksjon.github.io/bana/`.

Mappestrukturen skal være:

```text
index.html
robots.txt
sitemap.xml
assets/styles.css
assets/script.js
assets/fonts/
assets/gallery/
```

Alle interne lenker og alle bilder, fonter, CSS- og JavaScript-filer bruker relative stier. De fungerer derfor fra domenets dokumentrot uten Node.js, React, Vite eller en build-prosess.

Kontaktskjemaet bruker FormSubmit.co og sender forespørsler til `renats.bogdanovs@gmail.com`. Før første bruk må mottakeren bekrefte e-postadressen via FormSubmit. Skjemaet returnerer nå til `https://webproduksjon.github.io/bana/?sent=1#kontakt` etter innsending.

GitHub Pages leverer nettstedet over HTTPS. Filen `.nojekyll` sørger for at GitHub Pages behandler nettstedet som en ren statisk eksport.

## GitHub

Repositoryet publiseres som et prosjektnettsted på `https://webproduksjon.github.io/bana/`. Alle interne lenker, bilder, fonter, CSS- og JavaScript-filer bruker relative stier og fungerer derfor under `/bana/`.

## Før lansering

Kontroller at `index.html` ligger direkte i repositoryets rot, åpne `https://webproduksjon.github.io/bana/`, test menyen på mobil, test alle seksjonslenkene og send én testmelding gjennom kontaktskjemaet. Kontroller også at `https://webproduksjon.github.io/bana/robots.txt` og `https://webproduksjon.github.io/bana/sitemap.xml` åpner uten 404-feil.

Bytt ut eventuell eksempeltekst og kontaktinformasjon, og kontroller at bildene er dine eller lisensiert for bruk.
