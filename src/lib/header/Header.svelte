<script>
	import { page } from '$app/stores';
	import logo from './logo.svg';
	import { Hamburger } from 'svelte-hamburgers';
	import { fly, scale } from 'svelte/transition';
    import { quadOut } from 'svelte/easing';

	let open = false;
</script>

<header>
	<div class="logo">
		<a href="http://metacity.cc">
			<img src={logo} alt="Metacity" />
		</a>
	</div>
	
	<nav>
	

		<ul>
			<li class:active={$page.url.pathname === '/'}><a sveltekit:prefetch href="/">Home</a></li>
			<li class:active={$page.url.pathname === '/about'}><a sveltekit:prefetch href="/about">About</a></li>
			<li class:active={$page.url.pathname === '/projects'}><a sveltekit:prefetch href="/projects">Projects</a></li>
		</ul>

		
		<div class="hamburger">
		<Hamburger bind:open --padding=0 />
		</div>
	
	</nav>
</header>


{#if open}
    <div>
        {#each ['Home', 'Example', 'About', 'Contact'] as link, i}
            <p transition:fly={{ y: -15, delay: 50 * i }}>
                {link}
            </p>
        {/each}
    </div>

    <hr transition:scale={{ duration: 750, easing: quadOut, opacity: 1 }} />
{/if}



<style>
		ul {
				display: none !important;
				list-style: none;
				padding: 0;
				margin:0;
		}
		.hamburger{display:block;}
	

		/* Desktop version */
		@media (min-width: 700px) {
			ul{
				display:flex !important;
			
			}
			.hamburger{display:none;}
		}

	header {
		display: flex;
		justify-content: space-between;
		background-color:red;
		width:98% !important;
		padding:1% 1% 1% 1%;
		align-items: center;
	}

	.logo {
	
		background-color: yellow;
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


	


	

	nav li {
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
	}

	a:hover {
		color: var(--accent-color);
	}

</style>
