<script>
    import Header from "../lib/header/Header.svelte";
    import Tabs from '../lib/tab/tabs.svelte';
  import Mobilenav from "../lib/mobile-nav/Mobilenav.svelte";
    import Footer from '../lib/footer/Footer.svelte';
</script>

<Tabs />
<Header/>
<Mobilenav/>
<Footer/>  

<slot></slot>
