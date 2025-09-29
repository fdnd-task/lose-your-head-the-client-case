# Lose Your Head - The Client Case

## Styleguide en kleur

Een styleguide is essentieel voor het begrijpen en toepassen van een huisstijl. Een styleguide geeft voorbeelden en uitleg over hoe iets eruit moet zien. Een styleguide helpt bij het ontwerpen en bouwen van een website, zodat de verschillende elementen consistent worden toegepast.

### Aanpak
Voor het maken van een styleguide breng je eerst de verschillende onderdelen van de huisstijl in kaart, zoals typografie, beeldgebruikt, formulierelementen en navigatie. Dit doe je met een _Interface inventory_. Lees in de workshop [styleguide](https://github.com/fdnd-task/look-and-feel-corporate-identity/blob/main/docs/styleguide.md) uit sprint 4 hoe je dat doet

In deze workshop ga je met je team een kleurenpalet samenstellen om te gebruiken voor de styleguide van jouw opdracht. Daarna ga je bedenken hoe je dit slim in code kan opzetten.

## Kleurenpalet
Een kleurenpalet bestaat uit verschillende kleuren die gebruikt kunnen worden in een ontwerp. Als je de kleuren voor een ontwerp goed vastlegt in de styleguide kan je met je team goede afspraken maken en zorg je ervoor dat het ontwerp consistent kan worden toegepast.

In styleguides zie je soms dat een kleurenpalet bestaat uit een paar kleuren. Maar een goed webdesign kan je niet met 5 kleuren maken. er zijn veel meer kleuren nodig voor een goed ontwerp. 
<img src="styleguide-you-need-more-colors-than-you-think.jpg"><br>
_Een goed ontwerp heeft veel meer kleuren nodig - [Refactoring Ul](https://www.refactoringui.com) van Adam Wathan & Steve Schoger_

### Kleurenpalet samenstellen
Een tip voor een goed bruikbaar kleurenpalet is: bepaal meerdere donkeren en lichte varianten per kleur. Zo kan je in een ontwerp meer kleuren gebruiken dan alleen de volle kleuren.

<img src="styleguide-color-palet-with-shades.jpg"><br>

Een kleurenpalet bestaat meestal uit een primaire kleur, secundaire kleur (of contrast kleur), accent kleuren en een neutrale kleur voor achtergronden, lijnen, teksten of iconen. Per kleur heb je 5-10 lichtere en donkere varianten nodig waar je uit kan kiezen.

#### Opdracht kleuren bepalen
Alle teamleden maken in Figma dezelfde pagina met verschillende kleuren en/of kleurvariaties. Zorg dat je minimaal 3 verschillende versies hebt.

Bespreek de verschillende versies en stel 1 ontwerp samen op basis van jullie beste ideeen en uitwerkingen. (Bewaar je variaties)

#### Opdracht kleurvariaties bepalen
Maak een overzicht van alle kleuren die jullie in het ontwerp hebben gebruikt.  

Bepaal de primaire kleur, secundaire kleur, accent kleuren en neutrale kleur in `HSL()` waarden in Figma. Maak daarna 3 donkere varianten per kleur, en 3 lichte varianten per kleur. Zo krijg je een kleurenpalet met 7 variaties per kleur.

💡 Je kan donkere en lichte variatie maken door de _lightness_ in `HSL()` te veranderen, maar het kan mooier zijn om de _hue_ aan te passen, zodat je een warme, rijke kleurvariatie krijgt.

<img src="styleguide-lightness-of-hue-variaties.jpg"><br>
_Soms is het mooier om niet de lightness te veranderen maar de hue aan te passen - [Refactoring Ul](https://www.refactoringui.com) van Adam Wathan & Steve Schoge_

#### Opdracht light/darkmode
Ontwerp allemaal een dark-mode versie (of light-mode als je al een donkere versie hebt). Alle teamleden maken in Figma dezelfde pagina met dark-mode kleuren. Zorg dat je minimaal 3 verschillende versies hebt, bespreek de verschillende versies en stel 1 ontwerp samen op basis van jullie beste ideeen en uitwerkingen. (Bewaar je variaties)

💡 Let op dat wit op zwart een te hoog contrast kan hebben. Vooral als een gebruiker het scherm heel fel heeft staan. Probeer eens donker grijs op de achtergrond. En hoe ziet dit eruit met hele licht grijze teksten?

<img src="styleguide-avoid-pure-black.jpg"><br>
_Zwart heeft 0% brightness en wit 100%, dit contrast kan onprettig zijn om naar te kijken, heel donker grijs zorgt voor een nette contrast - [Practical UI](https://www.practical-ui.com) van Adham Dannaway_

💡 Let op dat de leesbaarheid van teksten in dark mode kan veranderen. Witte tekst op een donkere achtergrond heeft meer line-height nodig dan donkere tekst op een witte achtergrond. Probeer dit maar eens uit in jullie Figma ontwerp. 

<img src="styleguide-color-and-leading.jpg">

<!-- 
Ik weet deze bron niet meer. Dit is de bijhorende tekst: 

6. Know the connection between color and leading
Contrast and color are extremely important when choosing line heights, and distance between letters. On darker backgrounds, most professional designers will recommend using more leading than on a lighter background. 

Dark colors can add weight to a design, like tight leading. Try to avoid jumping between different leading options from one part of your webpage to the next. 

Using the same amount of leading throughout your page will help to create a sense of balance. Remember, the contrast between your background and text colors should be high to support better readability. Although, if you’re using two colors closer together in shade, a greater amount of leading may improve legibility. 
-->

#### Bronnen

[Refactoring Ul](https://www.refactoringui.com) van Adam Wathan & Steve Schoge

[Practical UI](https://www.practical-ui.com) van Adham Dannaway

[6 Mistakes to Avoid in Dark UI Design](https://supercharge.design/articles/6-mistakes-to-avoid-in-dark-ui-design)


<!--
## Color in CSS

CSS code voor de styleguide

Kleur in CSS

### andere kleuren paletten/...
Vibrant colors 

### HSL()

Code voorbeeld met custom properties

HSL color wheel
https://codepen.io/websanity/pres/QWNMRq

On Switching from HEX & RGB to HSL
https://www.sarasoueidan.com/blog/hex-rgb-to-hsl/




### light-dark shorthand
Color scheme?




### Relative color syntax



### Fallback
Paar vragen neerleggen voor studenten om over na te denken en strategie uit te zetten:

Hoe zit het met de comma's in RGB(,,) of in HSL?
en browsers?





-->


<!--

## CSS Color
Over CSS color
Op verschillende mogelijkheden wijzen. 
HSL
NIeuwe kleuren ... hoe heet dat eigenlijk? 

Ontwikkeling van kleur in CSS
Komma's. 
Maar wat met fallback?


Ditch RGB for HSL


### HSL
Color wheel. 

Code voorbeeld met custom properties. 



### Nieuwe kleuren


### Darkmode

Color-scheme
Fall back?

Dark color toegankelijkheid

Relative color


### Fallback



### Toegankelijkheid





-->
