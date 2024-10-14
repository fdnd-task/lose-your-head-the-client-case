<script>
  // maak een functie die het jaar en maand meeneemt
  const loadMonthDays = (year, month) => {
    // Maak een array met daarin de weekdagen
    const daysOfWeek = [
      "zondag",
      "maandag",
      "dinsdag",
      "woensdag",
      "donderdag",
      "vrijdag",
      "zaterdag",
    ];
    // Aantal dagen in de maand
    let daysInMonth = new Date(year, month + 1, 0).getDate();
    // Maak een lege array waarin de maanddagen komen
    let monthDays = [];

    // Loop door alle dagen van de maand
    for (let day = 1; day <= daysInMonth; day++) {
      // voor elke dag in de loop wordt een date gemaakt die het jaar, de dag en de maand bevat
      let date = new Date(year, month, day);
      // met date.getDay haal je de dagnaam op aan de hand van een nummer in de array
      let dayOfWeek = daysOfWeek[date.getDay()];
      // Voeg de naam van de dag in de monthDays array
      monthDays.push({ dayOfWeek, day });
    }
    // Geef de waarde van monthday array terug
    return monthDays;
  };
  // Haal de tijd en datum van vandaag op
  let dateAndTime = new Date();
  //  haal het huidige jaar op
  let year = dateAndTime.getFullYear();
  // Haal de huidige maand op
  let month = dateAndTime.getMonth();
  // Haal de dagen en de maand van het huidige jaar op en stop deze in de variabele daysMonth
  let daysInMonth = loadMonthDays(year, month);
  // Maak de variabele carousel aan
  let carousel;

  // Scroll naar links
  const scrollLeft = () => {
    if (carousel) {
      carousel.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  // Scroll naar rechts
  const scrollRight = () => {
    if (carousel) {
      carousel.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  // haal de huidige dag op
   let currentDayNumber = dateAndTime.getDate();
</script>

<!-- HTML -->

<section>
  <button
    class="navigation-buttons"
    on:click={scrollLeft}
    aria-label="Scroll naar links"
  >
    <svg
      width="7"
      height="12"
      viewBox="0 0 7 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.86317 11.5298C6.12271 11.2703 6.12285 10.8496 5.86349 10.5898L2.17915 6.90044C1.78908 6.50984 1.7893 5.87705 2.17963 5.48671L5.86287 1.80347C6.12252 1.54382 6.12252 1.12285 5.86287 0.863198V0.863198C5.60333 0.603655 5.18257 0.603534 4.92287 0.862928L0.294261 5.48623C-0.0966467 5.87669 -0.0968283 6.51016 0.293855 6.90085L4.92285 11.5298C5.18251 11.7895 5.60351 11.7895 5.86317 11.5298V11.5298Z"
        fill="white"
      />
    </svg>
  </button>
  <!-- Koppel het variabele carousel aan de ol -->
  <ol bind:this={carousel}>
    <!-- Ga de daysinmonth array af en geef de uitkomsten weer als dayofweek en day -->
    {#each daysInMonth as { dayOfWeek, day }}
      <li>
        <!-- als de dag gelijk is aan de nummer van de huidige dag krijgt de button de active class -->
        <button class={day === currentDayNumber ? "button-active" : ""}>
          <!-- Weergeef de dag in een string-->
          <span>{dayOfWeek}</span>
          <!-- Weergeef de dag als een nummer -->
          <span>{day}</span>
        </button>
      </li>
    {/each}
  </ol>

  <button
    class="navigation-buttons"
    on:click={scrollRight}
    aria-label="Scroll naar rechts"
  >
    <svg
      width="7"
      height="12"
      viewBox="0 0 7 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.13683 0.470161C0.877294 0.729698 0.87715 1.15045 1.13651 1.41016L4.82085 5.09956C5.21092 5.49016 5.2107 6.12295 4.82037 6.51329L1.13713 10.1965C0.877479 10.4562 0.877479 10.8772 1.13713 11.1368V11.1368C1.39667 11.3963 1.81743 11.3965 2.07713 11.1371L6.70574 6.51377C7.09665 6.12331 7.09683 5.48984 6.70615 5.09915L2.07715 0.470162C1.81749 0.210499 1.39649 0.210498 1.13683 0.470161V0.470161Z"
        fill="white"
      />
    </svg>
  </button>
</section>

<style>
  section {

    position: relative;
    display: flex;
    width: 90vw;
    margin: 0 auto;
    overflow: hidden; /* Verberg inhoud die buiten het zicht valt */
    @media screen and (min-width: 960px) {
      max-width: 50vw;
      font-size: 1.5em;
    }
  }

  ol {
    display: flex;
    overflow-x: scroll;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
    margin: 0;
    padding: 0;
    position: relative;
  }

  button.navigation-buttons {
    position: relative;
    z-index: 2; /* Zorg dat de knoppen boven de blur-elementen staan */
  }

  section::before,
  section::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 3em; /* Breedte van de blur aan beide kanten */
    pointer-events: none; /* Laat klikken door naar de knoppen */
    z-index: 1; /* Plaats de blur onder de knoppen */
  }

  section::before {
    left: 1em; /* Plaats de blur naast de eerste knop */
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0)
    ); /* Linker blur */
  }

  section::after {
    right: 1em; /* Plaats de blur naast de laatste knop */
    background: linear-gradient(
      to left,
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0)
    ); /* Rechter blur */
  }

  li button {
    border-radius: 5px;
  }

  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: rgb(239, 239, 239);
    font-family: var(--font-family);
    padding: 1em;
    font-size: 0.9em;
    cursor: pointer;
    transition: 0.2s ease-in;
    font-weight: bold;
  }

  .button-active {
    background-color: var(--primary-color);
    color: var(--light);
  }

  button:hover {
    background-color: var(--primary-color);
    color: var(--light);
    scale: 0.9;
  }

  .navigation-buttons {
    background-color: var(--primary-color);
    padding: 0.5em;
  }

  .navigation-buttons:hover {
    background-color: var(--hover-secondary);
  }
  .navigation-buttons:first-of-type {
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
  }

  .navigation-buttons:last-of-type {
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
  }
</style>
