<script>
	export let data;

	import logoPartner from '$lib/assets/gvb.png';
</script>

<ul>
	{#each data.websites as website}
		<li>
			<section>
				<img src={logoPartner} alt="logo partner" />
				<h2>{website.titel}</h2>
			</section>

			<section class="more-info-section">
				<span>Website: {website.homepage}</span>
				<span>Laatst bewerkt: 12min. geleden</span>
			</section>
		</li>
	{/each}
</ul>

<style>
	ul {
		list-style-type: none;
		display: flex;
		flex-wrap: wrap;
		gap: 0.75em;
	}

	li {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 2.25em;

		background-color: var(--c-container);
		padding: 1em;
		border-radius: 0.5em;
		border: solid 1px var(--c-container-stroke);
		min-width: 20em;
	}

	h2 {
		font-size: 1.5em;
        margin-top: 0.05em;
	}

    .more-info-section{
        display: flex;
        flex-direction: column;
        font-size: 0.9em;
    }
</style>
