<script>
	export let heroTitle;
</script>

<section>
	<h2>{heroTitle}</h2>
</section>

<style>
	section {
		background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
			url("images/hero-image.jpeg");
		background-size: cover;
		background-position: center;
		height: 15rem;
		color: #fff;
		padding: 1rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
</style>
