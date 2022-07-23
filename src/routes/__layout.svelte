<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>


<main>
	<Header />

	<slot />
</main>

<footer>
	<a href="https://codepen.io/croce/pen/nVRwLG"><div class="banana"></div></a>
	<p>not (c) 2022 - Banana Group / Dancing Banana by <a href="https://codepen.io/croce/pen/nVRwLG">Ramiro</a></p>

</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}


	.banana {
    position: relative;;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    width: 198px;
    height: 210px;
    background-image: url("https://i.cloudup.com/q3ZLPB9kVH.png");
    
    -webkit-animation: play .8s steps(8) infinite;
       -moz-animation: play .8s steps(8) infinite;
        -ms-animation: play .8s steps(8) infinite;
         -o-animation: play .8s steps(8) infinite;
            animation: play .8s steps(8) infinite;
}

@-webkit-keyframes play {
   from { background-position:    0px; }
     to { background-position: -1584px; }
}

@-moz-keyframes play {
   from { background-position:    0px; }
     to { background-position: -1584px; }
}

@-ms-keyframes play {
   from { background-position:    0px; }
     to { background-position: -1584px; }
}

@-o-keyframes play {
   from { background-position:    0px; }
     to { background-position: -1584px; }
}

@keyframes play {
   from { background-position:    0px; }
     to { background-position: -1584px; }
}

</style>
