# Lose Your Head - The Client Case

## Sprint Planning

Instructies lezen, project plannen en de briefing voorbereiden.

### Opdrachten tijdens de workshop

Jullie gaan met een nieuw team samenwerken. Om heldere afspraken te kunnen maken is het belangrijk direct serieus te beginnen en van elkaar te weten wat sterke kanten en leervragen zijn. Als dit bekend is kan het werk goed verdeeld worden en komt iedereen aan diens leervragen toe.

#### Persoonlijke leervragen (individueel)

- [ ] Formuleer twee of drie leervragen als uitgangspunt voor deze sprint.
- [ ] Vraag klas- of oud teamgenoten om hulp als je er niet uitkomt.

*Protip: Denk aan de gedragscriteria én aan technische uitdaging.*

#### Teamafspraken (als team)

- [ ] Lees de [instructies voor de leertaak](INSTRUCTIONS.md) en de sprint planning (dit bestand) allemaal zorgvuldig door
- [ ] Vul met elkaar de uitgebreide versie van het [teamcanvas](https://theteamcanvas.com/) in en zorg dat iedereen op de hoogte is van elkaars *personal goals* (leervragen)
- [ ] Maak afspraken over samenwerking, je houdt je in ieder geval aan de [FDND Code Conventies](https://docs.fdnd.nl/conventies.html).
- [ ] Leg bovenstaande zaken vast in CONTRIBUTING.md

*ProTip: Verwerk sterke kanten en jouw leervragen en maak heldere afspraken!*


### Voorgestelde aanpak squadpage
Semester 3 bereid je voor op de beroepspraktijk. Om die reden werken we serieuzer waarbij we gericht zijn op de werkwijze die je straks in je stagebedrijf of bij FDND-Agency ook gaat hanteren. Hoe meer je de voorgestelde werkwijze omarmt, hoe makkelijker je straks in een bedrijf mee kunt draaien.

#### Analyseren

1. Lees de hele leertaak goed door voor je verder gaat
2. Bekijk de repo op [FDND-Agency](https://github.com/fdnd-agency) waarin jullie gaan werken en zet zo nodig issues aan (laat de wiki en discussions uit). Koppel het automatisch opnemen van nieuwe issues in het projectboard, lees zo nodig nog eens het artikel ‘Adding items automatically’ van de GitHub documentatie (zie bronnen).
3. Bekijk alle informatie in de repository, wellicht kan je al context van het project krijgen door de bestanden die hier staan.
4. Bekijk het projectboard en eventuele bestaande issues. Verplaats eventuele bestaande issues naar de backlog en zorg dat je in ieder geval de kolommen: Backlog, Todo, In Progress, Review en Done in het board hebt opgenomen.
5. Check of alle teamleden invited zijn, spreek Joost of Justus via teams aan als dit (nog) niet het geval is.
6. Maak een issue aan in jouw repo met de titel 'Briefing/debriefing'. Hier ga je de voorbereiding, documentatie en debriefing aan toevoegen en hier noteer je zo nodig de feedback van de opdrachtgever. Voeg het issue toe aan jouw project board met de roadmap en geef het een *tijdspad*. Bereid met jouw team de briefing voor, spiek zo nodig nog even bij [de instructies van de workshop briefing/debriefing uit Sprint 2](https://github.com/fdnd-task/briefing-debriefing/blob/main/docs/INSTRUCTIONS.md).
7. Schrijf een goede debriefing, zorg dat alle teamleden de debrief gelezen (en gecontroleerd) hebben voor je deze opstuurt. Zorg dat je spellingscheck hebt uitgevoerd!
8. Doe aan de hand van het gesprek een *content inventory*, lees zo nodig nog eens het artikel ‘Content Inventory and Auditing 101’ van de Nielsen Norman Group. (zie bronnen).
6. Maak keuzes en leg deze vast door issues in te schieten. *NB: Niet een issue met alle keuzes maar losse issues per item!*
7. Werk verder aan de hand van issues door telkens een issue op te pakken en alles wat ermee te maken heeft bij deze issue vast te leggen.

#### Ontwerpen
Maak en bespreek (delen van) het ontwerp en haal daarbij breed (teamleden, peers en docenten) feedback op in de vorm van issues in GitHub.

*NB: Het is fijn als je screenshots van versies van het ontwerp opneemt in de issue-threads zodat de ontstaansgeschiedenis van het definitieve ontwerp navolgbaar wordt. Neem ook links of screenshots van inspiratiebronnen op.*

1. Leg inspiratie vast door een Pinterest board of screenshots en links in Figma op te nemen. Neem de belangrijkste elementen op in de issue-thread.
2. Schets ideeën en maak meerdere variaties voor je richting bepaalt voor de layout van de website/ het onderdeel waar je mee bezig bent. Zorg dat je ontwerpkeuzes onderbouwt met steekhoudende argumenten.
3. Werk ideeën uit in een ontwerp, bijvoorbeeld in Figma. Varieer en probeer meerdere uitwerkingen naast elkaar. Zorg dat je ontwerpkeuzes onderbouwt met steekhoudende argumenten.
4. Haal feedback op jouw ontwerp op en noteer zinvolle inzichten/opmerkingen in heldere losse issues en adresseer deze stuk voor stuk.
5. Itereer (begin weer bij stap 1)
— na een aantal iteraties —
6. Breek het ontwerp op in kleine behapbare delen en maak daar issues voor aan in het projectboard

#### Bouwen
Je werkt systematisch aan het project door middel van issues. Je doet niets zonder dat er een issue voor is. Als je iets te binnen schiet wat niet perse bij je huidige taak hoort ga je het niet snel doen maar schiet je een nieuwe issue in. Werk nooit aan te veel issues tegelijk! Je sluit alleen een issue als deze door iemand anders bekeken (reviewed!) is. *ProTip: Werk met feature-branches en pull-requests*

Door alleen issues te sluiten als er iemand naar gekeken heeft voorkom je heel veel bugs. In het bedrijfsleven kijkt er vaak een senior frontender of tech-lead naar jouw pull-requests voor ze geaccepteerd worden.

1. Pak een issue uit Todo op door deze toe te wijzen
2. Verplaats de issue naar In Progress
3. Doe onderzoek naar de mogelijke oplossing, neem bronnen en inzichten op in de issue
4. Implementeer de gevonden oplossing
5. Documenteer de stappen en belangrijkste algoritmes
6. Itereer (begin weer bij stap 2)
— na een aantal iteraties —
7. Documenteer de laatste inzichten en sluit de issue en verplaats deze naar Done.

#### Integreren
Omdat we met een framework werken kan hosting niet via GitHub pages opgelost worden. Gelukkig zijn er standaardoplossingen voor een aantal veelgebruikte hostingoplossingen, bijvoorbeeld Netlify.

1. Zet je project live door gebruik te maken Netlify (zie bronnen in de leertaak). Wellicht is de CI/CD pipeline al voor je ingericht en kan je gewoon aan de slag op de *dev* branch.

#### Testen
Voor de gebruiker is testen de belangrijkste fase uit de DLC. Dit is waar je erachter komt of jouw website lekker werkt op alle browsers en platformen en of gebruikers jouw interface snappen.

1. Test jouw project op zo veel mogelijk manieren
  - usertest (iig. op klasgenoten en je familie)
  - lighthouse test (voor automated performance en usability)
  - handmatige tests (iig. de tabtest maar ook uitschakelen van JS of CSS)
  - browsertest (chrome, safari, firefox, edge)
  - devicetest (oude en nieuwe mobieltjes, tablets, laptops)

### Bronnen
- [Workshop briefing/debriefing](https://github.com/fdnd-task/the-client-website/blob/main/docs/briefing-debriefing.md)
- [Workshop Styleguide](https://github.com/fdnd-task/look-and-feel-corporate-identity/blob/main/docs/styleguide.md)
- [Content Inventory and Auditing 101 @ Nielsen Norman Group](https://www.nngroup.com/articles/content-audits/)
- [Adding items automatically @ GitHub Docs > Projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects/automating-your-project/adding-items-automatically)
- [Interactive Tutorial @ Svelte.dev](https://svelte.dev/tutorial/kit/introducing-sveltekit)
- [Sveltekit Docs @ Svelte.dev](https://svelte.dev/docs/kit/introduction)
- [Directus API Reference @ Directus Docs](https://directus.io/docs/api) NB: Gebruik voor de connectie de methode uit de les van Dorien, blijf voorlopig weg bij de Directus SDK.
- [Code Conventies @ FDND Docs](https://docs.fdnd.nl/conventies.html)
- [Conventionele Commits @ conventionalcommits.org](https://www.conventionalcommits.org/nl/v1.0.0/)
- [SvelteKit on Netlify @ Netlify Docs](https://docs.netlify.com/build/frameworks/framework-setup-guides/sveltekit/) NB: Je hoeft je nog niet druk te maken over split of edge functies.
- [Website Testing: A Detailed Guide @ BrowserStack](https://www.browserstack.com/guide/how-to-perform-website-qa-testing)


