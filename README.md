# 🎶 Mediahuis radiogids
<img width="1771" alt="Scherm­afbeelding 2024-10-25 om 19 00 05" src="https://github.com/user-attachments/assets/240fca23-b6c1-431e-8154-9732e71eda66">

## 🔗 Link naar de website
<a href="https://lose-your-head-the-client-case-5q6r.vercel.app/" alt="link naar de website">Bekijk hier de website</a>

## 📄 Inhoudsopgave
* [✏️ Beschrijving](#-beschrijving)
* [💻 Gebruik](#-gebruik)
* [👨‍💻 Wat heb ik gedaan in dit project?](#-wat-heb-ik-gedaan-in-dit-project)
* [✅ Waar ben ik trots op](#-waar-ben-ik-trots-op)
* [❌ Waar liep ik tegen aan en hoe heb ik dit opgelost?](#-waar-liep-ik-tegen-aan-en-hoe-heb-ik-dit-opgelost)
* [📡 Technieken](#-technieken)
* [🧰 Tools](#-tools)
* [📊 Projectboard](#-projectboard)
* [🔧 Installatie](#-installatie)
* [📚 Bronnen](#-bronnen)

## ✏️ Beschrijving
We hebben een radiogids gebouwd voor mediahuis, op deze gids kun je een dag selecteren, op de gekozen dag zie je alle tijdstippen van de radioshows en alle radio dj's die draaien tijdens de show.

## 💻 Gebruik
### User story
Als gebruiker wil ik kunnen zien wanneer alle radioshows spelen en welke dj er draait.

### Gebruik van de radiogids
Door op de dagen te klikken kun je het overzicht van de radioshows die op die dag spelen ophalen.

### Ontwerp
We hebben een ontwerp van Triple gekregen de desktop view hebben we in een horizontale lijn gezet zodat er meer radiostations in een keer te bekijken zijn.

### Features

#### Responsive page
Doormiddel van media queries is de pagina responsive en te gebruiken op elk scherm formaat!

#### Image optimalisatie (layout shifting)
De images hebben een standaard width en height, zodat dit layout shifting voorkomt.

## 👨‍💻 Wat heb ik gedaan in dit project?

- Een weekselectie maken die de huidige datum op haalt en deze markeerd
- Herbruikbare link component
- Mede verantwoordelijk voor een kleine redesign (Horizontale view inplaats van verticale view)

## ✅ Waar ben ik trots op

### Week selectie
Ik ben erg trots op de week selectie. Ik heb hiervoor een javascript functie gebouwd die de huidige maand ophaalt en de huidige dag markeerd, zodat je weet welke dag het is. Dit was een grote uitdaging maar ben hier uiteindelijk wel uitgekomen!

### Link component
Ik heb een link component gemaakt ik ben hier trots op omdat dit een van mijn eerste keren is dat ik werk met svelte en uberhaupt components. Ik heb doormiddel van variabelen en css classes ervoor gezorgd dat de link over het hele project te gebruiken is.

## ❌ Waar liep ik tegen aan en hoe heb ik dit opgelost?

### Week selectie
#### javascript functie
Ik wist niet goed hoe ik de maand moest gaan ophalen en de huidige dag moest tonen. Om dit aantepakken ben ik op internet gaan lezen over datetime. Na heel veel lezen en wat hulp gevraagd te hebben aan docenten heb ik het uiteindelijk voor elkaar gekregen om de functie werkend te krijgen.

#### Fade effect
Ik heb aan de zijkanten een fade effect gemaakt. Ik liep er tegen aan dat ik niet goed wist hoe ik dit kon maken zonder dat het de toegankelijkheid aanttast. Uiteindelijk heb ik dit opgelost met before's. Deze heb ik een witte shadow gegeven waardoor het lijkt alsof de content vervaagd, dit maakt het scrollen duidelijker.

#### Scrollen met buttons
Ik wist niet hoe ik de weekselectie moest laten scrollen doormiddel van buttons. Ik heb eerst de stappen gevolgd die ik wel kende zoals het toevoegen van een eventlistener, etc. Alleen nu moest ik nog de functie schrijven. Ik heb op google gezocht naar artikelen en oplossingen. Uiteindelijk vond ik een klasgenoot die een soort gelijke functie had gemaakt en heb ik met hem gekeken hoe het moet. Daarna heb ik nog extra comments bij de code gezet zodat ik de code nog beter onthoudt.

## 📡 Technieken
- HTML
- CSS
- JS
- Svelte

## 🧰 Tools
- Visual studio code (code editor)
- Vercel (hosting)
- Figma (Design tool)

## 📊 Projectboard
In ons projectboard kun je precies volgen hoe we aan het project hebben gewerkt en wat er wel en niet af is. Ons projectboard vind je <a href="https://github.com/users/Daan645/projects/8">hier</a>

## 🔧 Installatie
1. Clone deze repository
2. Open de repository met een code editor naar keuze
3. Open het terminal in de code editor
4. Typ **npm install** in om alle benodigdheden voor het project te installeren in de terminal
5. Om het project te kunnen typ: `npm run dev` om de server op te starten
5. Gebruik de link <a href="http://localhost:5173/">localhost</a> om het project lokaal te bekijken
6. Mocht je het project online bekijken dan kan dat via <a href="https://lose-your-head-the-client-case-5q6r.vercel.app/" alt="link naar de website">deze link</a>

## 📚 Bronnen
- <a href="https://www.shecodes.io/athena/73295-how-to-display-the-current-day-of-the-week-and-time-using-javascript#:~:text=%2F%2F%20create%20a%20new%20Date,current%20time%20const%20time%20%3D%20now.">Show current date in JS</a>

- <a href="https://www.shecodes.io/athena/38917-how-to-display-the-current-date-and-time-in-javascript#:~:text=To%20display%20the%20current%20date%20and%20time%20in%20JavaScript%2C%20you,()%20object%20and%20its%20methods.&text=In%20the%20code%20above%2C%20we,the%20current%20date%20and%20time.">Display date and time in JS</a>


