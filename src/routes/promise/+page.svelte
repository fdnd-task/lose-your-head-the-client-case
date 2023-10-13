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
        font-size: 2em;
        padding: 3em;
    }
    h2{
        font-size: 2em;;
        padding:1em;
        max-width:30em;
    
    }

   .text1, .text2{
        padding: 1em 1em;
        font-size: 1em;
        max-width: 30em;
        align-items: center;
       
    }
    section{
    display:grid;
	grid-template-rows:auto 10em auto;
    grid-row-start:1;
	grid-row-end:3;
	grid-column-start:1;
    background-color: var(--jungleGreen);
    clip-path:
		polygon(
			0% 4em,
			30% 0,
			100% 4.5em,
			100% calc(100% - 2em),
			0% 100%,
			0% 4em
		);
	z-index:10;
    margin:0;
	padding:5em 3em;
    

    }
     .img{
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

   
  }
  


  h1{
    margin: 0 auto;
    font-size: 4em;
    
  }
   h2{
    margin: 0 auto;
  
   
   }
  
   .block{
    padding-bottom: 50px;
        padding-top:30px;
        width:100%;
        /* clip-path: polygon(19% 9%, 100% 0, 100% 41%, 100% 83%, 0 98%, 0 15%); */
        clip-path: 
        polygon(
			0% 4em,
			30% 0,
			100% 4.5em,
			100% calc(100% - 2em),
			0% 100%,
			0% 4em
		);
   
   }
   .grid-block{
       margin: 0 auto;
   }

   /* .block-text-2{
    padding-bottom: 30px;
        padding-top:30px;

   } */
   }

}


   @media only screen and (min-width: 768px) and (max-width: 1200px) {
    .responsive {
   width:100%;
   height:auto;
   clip-path: polygon(19% 9%, 100% 0, 100% 41%, 100% 83%, 0 98%, 0 11%);
}
   


  .text1, .text2, .text3{
    margin: 0 auto;
    font-size: 1em;
  }


  h1{
    margin: 0 auto;
    align-items:center;
  }
   h2{
    margin: 0 auto;
    align-items:center;
   }
  
   .block{
    padding-bottom: 50px;
        padding-top:30px;
       

   }

   .block-text-2{
    padding-bottom: 50px;
        padding-top:30px;

   }
   }

</style>