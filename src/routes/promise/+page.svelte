<script>
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
    // import Promise from "$lib/components/Promise.svelte";

    export let data
    // console.log(data.promisePages)
</script>

<Header />

<main>

    {#each data.promisePages as promisePage }
   
    
        <h1>{promisePage.promiseIntro.title}</h1>
        
<section class="block-text" >
<!-- <div class="block"> -->
        <p class="text1"> {promisePage.promiseIntro.contentText}</p>
        <p class="text2"> {promisePage.promiseIntro.contentText2}</p>
<!-- </div> -->
</section>

 <img src="{promisePage.promiseIntro.contentImg.url}" alt="content" class="img">
       
    {/each}

  

    {#each data.promisePages as promisePage }

   <div class="block-text-2">
        <h2>{promisePage.promiseMain.title}</h2>
        <p class="text3"> {promisePage.promiseMain.contentText}</p>
    </div>
    

    {/each}


<!-- <Promise {data}/> -->

</main>

<Footer />

<style>

*{
    box-sizing: border-box;
    line-height: 1.4;
}
    :root {
        --charcoal: #051A1A;
        --candelLight: #FFDA1D;
        --justWhite: #FFFFFF;
        --jungleGreen: #163A3A;
        --plantGreen: #179446;
        --pictonBlue: #3DBAE1;
        --copy-font: 'Apercu pro', sans-serif;
        --paragraph-font: 'Jubilat', serif;
        --header-font: 'Kirang Haerang', sans-serif;
        --link-hover-color: #FFDA1D;
        --button-hover-color: #FFFFFF;
        --top-nav-sponsor-button-hover-color: #051A1A;
    }


    /*mobile first*/
    h1{
        font-size: 3em;
        /* width:30em; */
        padding: 1rem;
    }
    h2{
        font-size: 2em;;
    }

   .text1, .text2, .text3{
        padding: 1em;
        font-size: 1em;
        /* width: 30em; */
        align-items: center;
       
    }
    section{
        /* background-color: var(--jungleGreen);
        clip-path: polygon(16% 0, 100% 13%, 100% 41%, 100% 83%, 0 98%, 0 25%);
        margin-top: 7em;
        background: #163A3A;
        border: 23px  solid #0D2323; */
        display:grid;
	grid-template-rows:auto 8em auto;
    grid-row-start:1;
	grid-row-end:3;
	grid-column-start:1;
    background-color: var(--jungleGreen);
    clip-path:
		polygon(
			0% 4em,
			30% 0,
			100% 4.5em,
			100% calc(100% - 5em),
			0% 100%,
			0% 4em
		);
	z-index:10;
    margin:0;
	padding:5em 2em;

    }
     .img{
    /* clip-path: polygon(19% 9%, 100% 0, 100% 41%, 100% 83%, 0 98%, 0 11%); */
    max-width:100%;
    width:100%;
	grid-row-start:2;
	grid-row-end:4;
	grid-column-start:1;
    clip-path:
		polygon(
			0% 10%,
			100% 0%,
			100% 30%,
			100% 100%,
			20% 100%,
			0% 100%
    );

}

.block-text-2 {
    background-image: url("/substract.png");
}


   @media only screen and (min-width: 1200px) {
    .responsive {
   width:100%;
   height:auto;
   clip-path: polygon(19% 9%, 100% 0, 100% 41%, 100% 83%, 0 98%, 0 11%);
}
   


  .text1, .text2, .text3{
    margin: 0 auto;
    width:30em;
    font-size: 2em;
  }


  h1{
    margin: 0 auto;
  }
   
  
   .block{
    padding-bottom: 50px;
        padding-top:30px;
       

   }

   }

</style>