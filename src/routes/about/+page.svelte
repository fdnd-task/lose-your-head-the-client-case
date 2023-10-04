
<body>
<!-- hier komt de header -->

<section class="hero">
    <div class="hero-title">
        <h1 class="hero-heading" aria-label="About Ink">
            <div class="about-title slide-first" aria-hidden="true">
                <span>A</span>
                <span>B</span>
                <span>O</span>
                <span>U</span>
                <span>T</span>
            </div>
        </h1>
    
    </div>

    <div class="title-logo"> 

<img class="logo-about-ink" src="src/routes/about/assets/smallInkLogo 2.png">

    </div>
</section>

<div class="intro">

    <div class="intro-text-container">
        <p class="intro-text">We are dedicated to providing these children with a second chance in life,
            ensuring
            they have access to education, shelter, nutrition, and an opportunity to pursue their dreams of
            becoming
            top football players.
            <button class="intro-promise-button">PROMISE</button>
        </p>
    </div>

</div>

</body>


<!-- -----------------Hier begint de styling------------------------ -->

<style> 

/* TITLE START*/

.hero {
    display: flex;
    width: 100%;
    margin: calc(14vw + 30px) 0 0 0;
    overflow: hidden !important;
}

.hero-title {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    transform: rotate(-2deg);

}

h1 {

    font-size: 5em;
    text-transform: uppercase;
}

span {
    font-size: clamp(36px, 9vw, 128px);
    font-family: 'Kirang Haerang';
    text-transform: uppercase;
    display: flex;
    height: fit-content;
    line-height: 62%;
    color: #ffda1d;
}

.about-title {
    display: flex;
    align-items:center ;
}

/* TITLE END*/

/* INTRO START */

.intro {
    width: 100%;
    height: 75vw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 12vw 0 0 0;
    background-image: url(./src/routes/about/assets/intro-mask.svg);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
    
}

.intro-text-container p {
    display: flex;
    flex-direction: column;
    color: var(--charcoal);
    font-family: 'Jubilat';
    font-size: clamp(2vw, 4vw, 57px);
    color: black;
    padding: 0 14vw;
    line-height: 96%;
}

.intro-promise-button {
    font-family: 'Apercu';
    font-weight: 700;
    line-height: 140%;
    width: fit-content;
    border: none;
    text-decoration: none;
    outline: none;
    background-color: var(--justWhite);
    border-radius: 40px;
    padding: 10px 20px;
    margin: 2rem 0 0 0;
    transition: 0.2s;
}

.intro-about-button:hover {
    background-color: var(--pictonBlue);
    /* background-color: var(--charcoal); */
    color: white;
    cursor: pointer;
}

/* INTRO END */


</style>

 