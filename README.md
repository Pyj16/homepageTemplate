# Template za naslovnice

Uporabljene tehnologije: JS, React, TailwindCSS

# Struktura projekta

## Assets
Slike uporabljene za grafične elemente in kot primere.

## Components
Komponente uporabljene v App.jsx

### Cards
Kartice s sliko, naslovom, opisom in CTA gumbom. Vse kartice so prebrane iz mockDb.js.
-# Sedajni CTA gumb ne preusmerja uporabnika nikamor.

### Contact
Gumb namenjen za preusmerjanje uporabnika na kontaktni obrazec.
-# Sedajni gumb ne preusmerja uporabnika nikamor.

### Footer
Zadnji segment strani. Vsebuje trije segmente namenjene za logo, adreso, kontaktne podatke ter posebni paragraf za avtorske pravice.

### Header
Fiksni element na zgornji del. Vsebuje logo in opcije za preusmerjanje uporabnika. Opcije se skrijejo na manjših zasloniš za hamburger menijem. Opcije so prebrane iz mockDb.js
-# Vse sedajne linke preusmerjajo uporabnik na isto strano

### News
Karticte namenjene za novice. Vsebujejo sliko, naslov, podrobnosti in datum objave. Vse novice so prebrane iz mockDb.js.

### Subtitle
Drugi naslov ki se prikaže pod glavnim naslovom. Vsebuje dva paragrafa.

### TitleCard
Glavni naslov strani. Vsebuje element z tekstom in gumbe za spremembo slik. Slike so prebrane iz mockDb.js

## Data
Maketa podatkovne baze. Vsebuje en js dokument z podatkami.

### mockDb.js
menuOptions - Opcije za glavo strani:
- link - namenjen preusmeritev
- text - besedilo opcije

titleImgs - Slike prikazane za naslovom.

newsArticles - Podatke za novice:
- title - naslov novice
- desc - opis novice
- img - slika novice
- time - datum objave

cards - Kartice prikazane pod drugim naslovom:
- title - naslov kartice
- desc - opis kartice
- img - slika kartice