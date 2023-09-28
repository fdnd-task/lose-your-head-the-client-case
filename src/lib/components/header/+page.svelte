<script>
	// https://kit.svelte.dev/docs/assets
	import logo from '$lib/assets/vervoerregio_amsterdam_logo.svg';
	import informationIcon from '$lib/assets/information_icon.svg';
	import darkmodeIcon from '$lib/assets/dark_mode_icon.svg';
</script>

<header>
	<section class="logo-select">
		<img src={logo} alt="logo vervoerregio" />
		<select>
			<option value="">Selecteer Partner</option>
			<option value="">GVB</option>
		</select>
	</section>

	<section class="header-icons">
		<img src={informationIcon} alt="information icon" />
		<img src={darkmodeIcon} alt="darkmode icon" />
	</section>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		background-color: #202020;
		padding: 1em;
		border-bottom: 2px solid #454545;
	}

    .logo-select{
        display: flex;
        gap: 1.5em;
    }

    select{
        padding: 0.9em 0.6em;
        border-radius: 0.5em;
        font-size: 0.8em;
    }

	.header-icons {
		display: flex;
		gap: 1em;
	}
</style>
