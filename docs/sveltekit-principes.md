# Lose Your Head - The Client Case

## SvelteKit principes

Over het opzetten van het raamwerk voor jouw website en het onderzoeken van principes en best-practices van het SvelteKit framework.

### Aanpak

Bij het opstarten van een website in een nieuw framework is het belangrijk zo snel mogelijk een raamwerk voor verdere ontwikkeling neer te zetten. Veel bedrijven hebben hier een standaard *boilerplate* voor (denk even terug aan de we<3web sessie met Martijn Nieuwenhuizen).

#### 1. Raamwerk voor jouw applicatie (60 min / tot 14:30u)

We gaan in 45 minuten minimaal het raamwerk voor jouw site opzetten in een uitgebreide *pair-programming* setting, een manier van werken uit de eXtreme Programming methodiek. Lees eerst de hele instructie door (5 mins) en ga daarna aan het werk.

1. Verdeel de volgende rollen in je team: lead, driver, navigator. (als er maar 2 personen zijn neemt de navigator de taken van de lead over)
2. De **lead** opent de laptop en zoekt de eerder gemaakte sitemap er bij, neemt deze snel over op het whiteboard en doet de laptop weer dicht. 
3. De **navigator** gaat met de lead in gesprek en bepaalt welke pagina’s dynamisch worden opgebouwd. (lees: de pagina’s waar data uit directus wordt gebruikt)
3. De **driver** opent de laptop, maakt op Github een feature branch genaamd `feature/raamwerk` en *pull*ed of *clone*d de laatste versie naar de lokale omgeving.
4. De **lead** bepaalt de volgorde van aanmaken van routes voor alle pagina’s in de sitemap. Eventuele `[slug]` routes bewaar je tot het laatst.
5. De **navigator** vertelt de driver wat de volgende stap is, maak de instructie zo simpel mogelijk en splits taken op in enkelvoudige handelingen, bijvoorbeeld: *Maak een map aan met de naam `about`*, wacht tot dit klaar is. Daarna *Maak een bestand aan met de naam `+page.svelte`* en wacht weer. Als het een dynamische pagina is zeg je vervolgens *Maak een bestand aan met de naam `+page.server.js`* en wacht tot het klaar is. Kijk mee op het scherm of alle stappen goed worden uitgevoerd en help bij eventuele foutjes, probeer hierbij de driver niet in de weg te zitten maar te begeleiden.
6. De **driver** volgt alle aangereikte stappen en vraagt extra uitleg als een instructie onduidelijk is. De focus is de taak die je op dit moment uitvoert, je hoeft niet na te denken over de grotere structuur van de applicatie.
7. De **lead** houdt op het whiteboard bij welke routes gemaakt zijn en welke afgerond zijn door deze in te kleuren. Ga door met stap [4/5/6] tot alle pagina’s in het raamwerk zijn opgenomen.
8. De **driver** doet een commit met een passende commit message en voert een *pull-request* naar de *dev-branch* uit.
9. De **lead** doet ondertussen de laptop open, checkt of de mappen en bestanden in het *pull-request* op de juiste manier zijn toegevoegd, accepteert het request en *merged*.

*ProTip: Als je al klaar bent met het raamwerk kan je deze oefening aan de hand van een breakdown chart op je `+layout.svelte` HTML structuur. Als dat ook al klaar is kan je in principe iedere taak uit het projectboard oppakken en op deze manier uitwerken.*

#### 2. SvelteKit principes (75 min / tot 16:15)

Bij het omarmen of eigen maken van een framework kan het ingewikkeld zijn grip te krijgen op de onderliggende principes. Vandaag ga je met je team onderzoek doen naar SvelteKit principes en best-practices. Hierbij gaan we onder andere gebruik maken van large language models (LLMs), dit zijn AI-modellen die getraind zijn op een dataset met voorbeelden met als doel waarschijnlijke antwoorden te genereren op basis van een prompt.

Het is belangrijk dat je hierbij oefent met *prompt engineering*. Een eenvoudige prompt geeft simpelweg slechte resultaten, een regel die de opleiding SMP hanteert is: *shit in, shit out*. Door het toevoegen van extra context wordt het resultaat stukken beter maar dan nog moet je dingen nalopen op feitelijke correctheid, dit doe je door voorbeelden uit te proberen, op te zoeken of te vergelijken met de officiële SvelteKit documentatie.

Bekijk deze prompt: “Maak een login systeem in SvelteKit.” Een zeer eenvoudige prompt waarbij je waarschijnlijk een simpel formulier wat niet precies doet wat je nodig hebt terug krijgt. Door het toevoegen van rol oriëntatie, context, beperkingen en acties wordt het resultaat beter.

Bekijk ter vergelijking eens de volgende prompt: “Je bent senior Frontend Developer met een passie voor toegankelijkheid en progressive enhancement. Bouw een login systeem voor SvelteKit gebaseerd op runes. Gebruik magic-link login voor authenticatie en JWT tokens als authenticatie gelukt is. Geef een leesbare opvallende foutmelding als het inloggen niet lukt. Redirect naar / op het moment dat inloggen is gelukt.”

Zie je het verschil? In het tweede voorbeeld is een rol opgenomen (senior frontend developer) met een specifieke voorkeur (passie voor toegankelijkheid en progressive enhancement). Het is specifiek (SvelteKit met runes, magic-link login, JWT tokens) en bevat concrete acties (foutmelding en redirect).

*Nota Bene: Het is belangrijk in je achterhoofd te houden dat in feite alles wat een LLM genereert hallucinatie is en dus op feitelijke waarheid gecontroleerd moet worden.*

1. Zoek op het web naar 10 SvelteKit principes of best-practices. Gebruik daarvoor in ieder geval [Le Chat van Mistral](https://chat.mistral.ai/chat), [ChatGPT van OpenAI](https://chatgpt.com/) en [Google Search](https://www.google.com/). Zoek met je team nog minstens twee andere AI-bronnen.
2. Vergelijk de resultaten met elkaar en maak een short-list van vijf belangrijke SvelteKit principes en best-practices. Deze bespreken we klassikaal.
3. Elk aanwezig teamlid kiest één van de vijf principes en best-practices en maakt een [Gist @ GitHub](https://gist.github.com) waarin je dit principe helder uitlegt met voorbeeldcode.
4. Wissel van tafel, je mag niet bij je eigen team aanschuiven. Presenteer jouw Gist en leer van je klasgenoten!

#### Extra bronnen (ProTips!)
<!-- Extra links voor documentatie en tutorials -->
- Lees meer over [pair programming](http://www.extremeprogramming.org/rules/pair.html) op een site met de [eXtreme Programming regels](http://www.extremeprogramming.org/rules.html). Waarschijnlijk herken je veel elementen uit de manier waarop we bij FDND samenwerken.
- [How to Use LLMs as a Coding Assistant (The Prompt Engineer's Way)](https://freedium.cfd/https://medium.com/design-bootcamp/how-to-use-llms-as-a-coding-assistant-the-prompt-engineers-way-f3fa8ea3aa2c)
- Leer meer over het maken van goede prompts via [Prompt Engineering Guide](https://www.promptingguide.ai/)

### ✒️ Leervragen (16:15)

Zet de antwoorden in je learning journal.

1. Welke stappen neem je om een project in SvelteKit op te starten?
2. Hoe kan je AI gebruiken om principes en best-practices van een framework te ontdekken?
3. Welke SvelteKit principes en best-practices heb je geleerd te gebruiken?
