<script>
	import { page } from '$app/stores';
	import { Hamburger } from 'svelte-hamburgers';
	import { fly, scale } from 'svelte/transition';
    import { quadOut } from 'svelte/easing';

	let open = false;
</script>
<header>
	<div class="logo">
		<a href="http://metacity.cc">
			<img src="/logo.svg" alt="Metacity" />
		</a>
	</div>
	<!-- <nav>
		<ul>
			<li class:active={$page.url.pathname === '/'}><a sveltekit:prefetch href="/">Home</a></li>
			<li class:active={$page.url.pathname === '/about'}><a sveltekit:prefetch href="/about">About</a></li>
			<li class:active={$page.url.pathname === '/projects'}><a sveltekit:prefetch href="/projects">Projects</a></li>
		</ul>
		<div class="hamburger">
		<Hamburger bind:open --padding=0 />
		</div>
	</nav> -->
	<!-- <div class="break"></div> -->
    {#if open}
    <div class="mobile-menu">
        {#each ['Home', 'Example', 'About', 'Contact'] as link, i}
            <p transition:fly={{ y: -15, delay: 50 * i }}>
                {link}
            </p>
        {/each}
    </div>
	{/if} 
</header>

<style>
	ul {
		display: none !important;
		list-style: none;
		padding: 0;
		margin:0;
	}

	/* .hamburger{display:block;} */
	
	/* Desktop version */
	 @media (min-width: 700px) {


			ul{ display:flex !important;}
			.hamburger{display:none;}

	
		}

	header {
		display: flex;
		flex-direction:row;
		justify-content: space-between;
		width:96% !important;
		padding:2% 1% 1% 2%; 
		/* Is this good way or static pixel or REM are better? So many doubts. */
		align-items: center;
		position: relative;
		background-color: rgb(255,255,255,0.5);
		backdrop-filter: blur(5px);
		position:fixed;
	}

	.mobile-menu{
		background-color: blue;	
	}

	.break {
		flex-basis: 100%;
		height: 0;
	}

	.logo {	
		display:flex;
		align-items: center;
	}
	
	.logo a{
		display: flex;
	}
	
	.logo img{
		max-width: 100%;
	}
	
	nav {
		display: flex;
	}

	/*  Hamburger menu example */
	p{
        cursor: pointer;
        width: max-content;
        margin: 1rem auto;
    }
    p:hover {text-decoration: underline;}

	/* nav li {
		display: flex;
		height: 100%;
		padding: 0 1em;
		height: 100%;
		font-weight: 700;
		font-size: 1rem;
		letter-spacing: 0.1em;
		align-items: center;	
	}

	nav a {
		text-decoration: none;
	} */

	a:hover {
		color: var(--accent-color);
	}

</style>
