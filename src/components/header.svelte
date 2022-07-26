<header>
	<div class="logo">
		<a href="http://metacity.cc">
			<img src="/logo.svg" alt="Metacity" />
		</a>
	</div>
</header>

<style>
	ul {
		display: none !important;
		list-style: none;
		padding: 0;
		margin:0;
	}
	
	/* Desktop version */


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

</style>
