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
        <img src="/static/Subtract.svg" alt="svg image">

<div class="block">
        <p class="text1"> {promisePage.promiseIntro.contentText}</p>
        <p class="text2"> {promisePage.promiseIntro.contentText2}</p>
</div>
    
        <img src="{promisePage.promiseIntro.contentImg.url}" alt="content" class="responsive">
       
    {/each}

  

    {#each data.promisePages as promisePage }

    <img src="/static/Subtract.svg" alt="svg image">
        <h2>{promisePage.promiseMain.title}</h2>
        <p class="text3"> {promisePage.promiseMain.contentText}</p>
 
        <!-- <img src="{promisePage.promiseMain.imgContent.url}" alt="content" class="responsive"> -->

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
    h1, h2{
        font-size: 5em;
        width:30em;
        padding: 1rem;
    }

   .text1, .text2, .text3{
        padding: 1em;
        font-size: 2em;
        width: 30em;
       
    }
    .block{
        background-color: var(--jungleGreen);
        clip-path: polygon(16% 0, 100% 13%, 100% 41%, 100% 83%, 0 98%, 0 25%);
        margin-top: 7em;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
       
       
       
    }
     

     .responsive{
    clip-path: polygon(19% 9%, 100% 0, 100% 41%, 100% 83%, 0 98%, 0 11%);
   
  
  
}
    .shapes{
     
        background-image:url("/static/Subtract.svg");
        z-index: 1;

        
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
    font-size: 1.5em;
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