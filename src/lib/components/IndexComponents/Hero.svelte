<script>
	export let heroTitle;
</script>

<section>
	<span>1.0</span>

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
		padding: 1rem 3rem;
		display: flex;
		align-items: center;
	}

	h2 {
		font-size: 2rem;
	}

	span {
		font-size: 6rem;
		margin-right: 1rem;
		font-weight: 600;
	}

	p {
		color: var(--color-white);
	}
</style>
