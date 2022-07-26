<!-- Here is all you need to make a magic for now -->
<script context="module">
	export const prerender = true;
</script>

<script>
	import projects from '../data/projects.json';
	import partners from '../data/partners.json';
</script>

<svelte:head>
	<title>MTCT</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<div class="motto">A set of tools for urban data synthesis, analysis and visualition.</div>
</section>

<section class="projects">
	<h2>Projects</h2>
	<hr />
	<div class="container">
		<!-- Show all projects -->
		{#each projects as p}
			<article>
				<img src={p.img_src} alt="placeholder" />
			</article>
		{/each}
	</div>
</section>

<section class="goal">
	<p>
		Our goal is to create a new generation of open-source tools and services targeted at developers,
		urban planners and the general public.
	</p>
</section>

<section class="about">
	<h2>About</h2>
	<hr />

	<div class="motto">
		We belive that urban data visuation should make the city look like a city, not a giant
		spreadsheet.
	</div>
</section>

<section class="partners">
	<h2>Partners</h2>
	<hr />
	<div class="container">
		<!-- Show all projects -->
		{#each partners as p}
			<a href=""><img src={p.img_src} alt="placeholder" /></a>
		{/each}
	</div>
</section>

<section class="contact">
	<h2>Contact</h2>
	<hr />
	<p>Still not sure what we can do for your?</p>
	<p style="font-weight:800">Get in touch! <a href="mailto:hi@stdio.cz">hi@stdio.cz</a></p>
	<address>
		<!-- Adress one TODO -->
	</address>
	<address>
		<!-- Adress two TODO -->
	</address>
</section>

<style>
	.welcome {
		width: 100%;
		height: 40vh !important;
		background-image: url('cool-background.png');
	}

	h1 {
		width: 100%;
	}

	h2 {
		font-size: 4.5rem;
		padding: 0 0 0 0;
		margin: 0 0 0 0;
	}

	hr {
		border-top: 2px solid black;
	}

	section {
		padding-left: 2em;
		padding-right: 2em;
	}

	.goal {
		font-size: 3rem;
		background-image: url('cool-background.png');
		line-height: 6rem;
	}

	.motto {
		font-size: 3.5rem;
		width: 100%;
		/* background-color: grey; */
		padding: 1em 0 0.5em 0em;
		margin: 0;
		line-height: 6rem;
	}

	.container {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	.container article img {
		max-width: 100%;
		width: 100%;
		height: auto;
	}

	.container article h3 {
		font-size: 2.5rem;
		text-decoration: underline;
		padding-bottom: 0.1rem;
	}

	.container article p {
		font-size: 1.3rem;
		max-width: 80%;
		padding-top: 0 !important;
		margin-top: 0 !important;
	}

	.about {
		/* height:80vh !important; */
	}

	.about p {
		max-width: 100%;
		font-size: 1.3rem;
		line-height: 1.5rem;
	}

	.button {
		border: 3px solid black;
		padding: 20px;
		text-align: center;
		background-color: transparent;
		border-radius: 30px;
		font-size: 2rem;
		margin-bottom: 1em;
	}

	/* Desktop version. Mobile first Britney Bitch. */
	@media screen and (min-width: 800px) {
		/* only for desktop */
		.container article {
			/* background-color: #FFBC4F; */
			width: 30.3%;
		}
		.motto {
			font-size: 4.5rem;
			width: 50%;
		}
		.goal {
			display: flex;
			justify-content: center; /* align horizontal */
			align-items: center; /* align vertical */
			font-size: 4rem;
			text-align: center;
			background-image: url('cool-background.png');
			height: 100vh !important;
			line-height: 6rem;
		}

		.about p {
			max-width: 100%;
			font-size: 1.3rem;
			line-height: 1.5rem;
		}

		.partners {
			height: 80vh;
		}

		.partners .container {
			display: flex;
			justify-content: flex-start;
			flex-wrap: wrap;
		}

		.partners a {
			min-width: 20%;

			border: 1px solid white;
		}

		.contact p {
			max-width: 50%;
			font-size: 2.7rem;
			line-height: 1.5rem;
		}
	}
</style>
