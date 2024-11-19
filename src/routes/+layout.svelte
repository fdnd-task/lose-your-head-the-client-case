<script>
    import Header from "../lib/organism/Header.svelte";
    import Tabs from '../lib/molecules/tabs.svelte';
    import Mobilenav from "../lib/organism/Mobilenav.svelte";
    import Footer from '../lib/organism/Footer.svelte';
</script>

<Header/>
<Tabs />
<Mobilenav/>
<slot></slot>
<Footer/>  


