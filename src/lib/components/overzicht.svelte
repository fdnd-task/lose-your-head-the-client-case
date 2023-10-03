<script>
	export let data;

	import logoPartner from '$lib/assets/gvb.png';
	import arrowRight from '$lib/assets/arrow_right.svg';
</script>

<ul>
	{#each data.websites as website}
		<li>
			<section class="logo-partner-section">
				<div>
					<img src={logoPartner} alt="logo partner" />
					<h2>{website.titel}</h2>
				</div>
				<img src={arrowRight} alt="arrow right" />
			</section>

			<section class="more-info-section">
				<span>Website: {website.homepage}</span>
				<span>Laatst bewerkt: 12 min. geleden</span>

				<div class="progress-container">
					<progress id="progress-partner" max="100" value="70" />
					<label for="progress-partner">70%</label>
				</div>
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

	.logo-partner-section {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
	}

	h2 {
		font-size: 1.5em;
		margin-top: 0.05em;
	}

	.more-info-section {
		display: flex;
		flex-direction: column;
		font-size: 0.9em;
	}

	.progress-container{
		display: flex;
		justify-content: space-between;
		gap: 1em;
		margin-top: 0.25em;
	}

	progress{
		width: 100%;
	}
</style>
