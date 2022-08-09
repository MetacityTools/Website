<header>
	<div class="logo">
		<a href="http://metacity.cc">
			<img src="logo.svg" alt="Metacity" />
		</a>
	</div>
</header>

<style>
	/* Desktop version */

	header {
		display: flex;
		flex-direction:row;
		justify-content: space-between;
		align-items: flex-start;
		padding: 1rem;
		box-sizing: border-box;
		position: absolute;
		overflow: hidden;
		top: 0;
		height: 50rem;
		background: linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(248, 233, 161, 0.2) 80.21%);
		width: 100%;
		z-index: -1;
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
		width: 8rem;
	}
</style>
