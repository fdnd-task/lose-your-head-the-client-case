<script>
    import Header from "../lib/header/Header.svelte";
    import Tabs from '../lib/tab/tabs.svelte';
  import Mobilenav from "../lib/mobile-nav/Mobilenav.svelte";
    import Footer from '../lib/footer/Footer.svelte';
</script>


<Header/>
<Tabs />
<Mobilenav/>
<slot></slot>
<Footer/>  


