<script>
	export let heroTitle;
</script>

<section>
	<div>
		<h2>{heroTitle}</h2>
	</div>
</section>

<style>
	section {
		background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
			url("images/hero-image.jpeg");
		background-size: cover;
		background-position: center;
		height: 15rem;
		color: var(--color-white);
		padding: 1rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	h2 {
		max-width: 45rem;
		text-align: center;
	}

	@media (min-width: 60rem) {
		section {
			height: 25rem;
			padding: 0 3rem;
		}

		h2 {
			font-size: 3rem;
			text-align: left;
		}
	}
</style>
