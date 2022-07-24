<script context="module">
	export const prerender = true;
</script>

<script>
	import { onMount } from 'svelte';

	import Counter from '$lib/header/Counter.svelte';
	import { attribute_to_object } from 'svelte/internal';
	import projects from '../data/projects.json';
	import partners from '../data/partners.json';
	import DylanIpsum from "dylan-ipsum";
	
	import GameLife from 'game-life';
	let canvas;


	// https://www.npmjs.com/package/game-life
	onMount(() => {
		// const ctx = canvas.getContext("2d");
		const game = GameLife(canvas, {
			graphics: {
				board: {width: 1000, height: 100},
				colors: {background: 'blue', grid: 'transparent'},
				cells: {size: 30}
			},
			game: {delay: 1000}
		});

		game.bornCell({x: 10, t: 10}) // Spawn cell

		
	
		

	})

	const bob = new DylanIpsum();
	import Project from "../components/project.svelte";

	let posts = [{title: "Post 1", description: "Short description 1", url: "/post1"},
     {title: "Post 2", description: "Short description 2", url: "/post2"}]

</script>

<svelte:head>
	<title>MTCT</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<canvas  bind:this={canvas}></canvas>
<!-- Welcome section page -->
<section>
	<div class="motto">
	A set of tools for urban data synthesis, analysis and visualition.
	</div>
	<button class="button">Start using Metacity for free</button>	
</section>


<section class="projects">
	<h2>Projects</h2>
	<hr>

	<div class="container">
<!-- Show all projects -->
	{#each projects as p}
	<article>
		<img src="{p.img_src}" alt="placeholder" />
		<h3>{p.name}</h3>
		<p>{p.desc} {bob.paragraphs(1)}</p>	
		<button src="{p.id}" class="button">Learn more</button>
	</article>
	{/each}
	</div>
</section>

<section class="goal">			
	<p>Our goal is to create a new generation of open-source tools and services targeted at developers, urban planners and the general public. </p>
</section>

	<section class="about">
	<h2>About</h2>
	<hr>	

	<div class="motto">
		We belive that urban data visuation should make the city look like a city, not a giant spreadsheet.
	</div>

	<p>{bob.paragraphs(1)}</p>


	</section>

	<section class="partners">
			
	<h2>Partners</h2>
	<hr>
		<div class="container">
			<!-- Show all projects -->
			{#each partners as p}
			<a href=""><img src="{p.img_src}" alt="placeholder" /></a>	
			{/each}
		</div>
	</section>


	<section class="contact">
		<h2>Contact</h2>
		<hr>
		<p >Still not sure what we can do for your?</p>
		<p style="font-weight:800">Get in touch! Touch the Banana Men!</p>
			<address>
				<!-- Adress one TODO -->
			</address>
			<address>
					<!-- Adress two TODO -->
			</address>
	</section>
	
	<!-- https://www.programonaut.com/how-to-create-a-blog-with-svelte-step-by-step/ -->


	{#each posts as post}
		<Project {...post}/>
	{/each}
	

<style>

	canvas{
	
	}

	h1 {
		width: 100%;
	}

	h2{
		font-size:4.5rem;
		padding: 0 0 0 0;
		margin: 0 0 0 0;
	}

	hr{
		border-top: 2px solid black;
	}

	section{
		padding-left:2em;
		padding-right:2em;
	}

	.partners{
		height:80vh;
	}

	.partners .container {
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
	}

	.partners a{
		min-width:20%;
		background-color: grey;
		border:1px solid white;
	}

	.welcome {
		width: 100%;
		height: 25vh !important;
	}

	.welcome img {
		width: 100%;
		max-height: 100%;
	}

	.goal {
		display: flex;
		justify-content: center; /* align horizontal */
		align-items: center; /* align vertical */
		font-size:4rem;
		text-align: center;
		background-color:grey;
		height: 100vh !important;
		line-height: 6rem;
	}


	.motto{
		font-size:4.5rem;
		width: 50%;
		/* background-color: grey; */
		padding:1em 0 0.5em 0em;
		margin:0;
		line-height: 6rem;
	}


	section .projects {
		background-color:goldenrod;
	
	}

	.container{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}


	@media screen and (min-width: 800px) {
    	/* only for desktop */
		.container article{
			/* background-color: #FFBC4F; */
			width: 30.3%; 
		}
	}


	 .container article img{
		max-width: 100%;
		width:100%;
		height: auto;
	}

	 .container article h3 {
		font-size: 3rem;

		text-decoration: underline;
	}

	 .container article p{
		font-size: 1.5rem;
		max-width: 80%;
	}

	.about {
		/* height:80vh !important; */
	}
	
	.about p {
		max-width: 50%;
		font-size: 1.3rem;
		line-height: 1.5rem;
	}

	 .contact p{
		max-width: 50%;
		font-size: 2.7rem;
		line-height: 1.5rem;
	}

	.button {
		border:3px solid black ;
		padding: 20px;
		text-align: center;
		background-color: transparent;
		border-radius: 30px;
		font-size:2rem;
		margin-bottom: 1em;
	  }

</style>
