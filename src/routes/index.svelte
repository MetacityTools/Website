<!-- Here is all you need to make a magic for now -->
<script context="module">
	export const prerender = true;
</script>

<svelte:head>
	<title>Metacity</title>
	<meta name="description" content="Metacity" />
	<script src="p5.min.js"></script>
	<script src="sketch.js"></script>
</svelte:head>

<main>
<section class="container heading">
	<h1>
		A set of <span class="emph">tools for</span> urban <span class="emph">data</span> synthesis, analysis and <span class="emph">visualization</span>.
	</h1>
	<a id="getintouch" href="mailto:hello@metacity.cc">Get in touch</a>
</section>

<div id="canvasContainer" />

<section class="container">
	<div id="about">
		<p>
			We believe urban data visualization should make the city look like
			a city, not a giant spreadsheet.
		</p>
		<p>
			Our goal is to create a new generation of open-source tools and services
			targeted at developers, urban planners and the general public.
		</p>

		<p><a href="https://demo.metacity.cc">Try it yourself →</a></p>
	</div>
	
	<div id="services">
		<div id="serviceContainer">
		<div class="serviceItem">
			<img src="assets/data_proces.svg" alt="Geo Data Processing">
			<h3>Data processing</h3>
			<p>
				Filtering and optimizing geometry, combining 2D and 3D data. All
				for your specific usecase.
			</p>
		</div>
		<div class="serviceItem">
			<img src="assets/wab_viz.svg" alt="Web visualization">
			<h3>Web visualization</h3>
			<p>
				Blazing fast data visualization that helps you easily understand
				and communicate your data.
			</p>
		</div>
		<div class="serviceItem">
			<img src="assets/app_development.svg" alt="App development">
			<h3>App development</h3>
			<p>
				If you need something bigger, we have experience in building
				complex and robust applications.
			</p>
		</div>
		</div>
	</div>

	<div id="howitworks">
		<p>
			Metacity integrates geometry and metadata files which are then
			quickly stylised and deployed as standalone visualizations.
		</p>
		<img src="assets/process-horizontal.svg" alt="diagram">
	</div>

	<div id="contacts">
		<div id="contactContainer">
			<div class="contactItem" id="startDialog">
				<span>Still not sure?</span>
				<span><a href="mailto:hello@metacity.cc">Talk to us →</a></span>
			</div>
			<div class="contactItem">
				<span class="emph">Prague</span>
				<span>hello@metacity.cc</span>
				<span class="address">Římská 12</span>
				<span>120 00 Praha 2</span>
				<span>Czech Republic</span>
			</div>
			<div class="contactItem">
				<span class="emph">Bor</span>
				<span>Přimdská 362</span>
				<span>348 02 Bor</span>
				<span>Czech Republic</span>
				<span><span class="emph">Reg</span>. No.: 051 83 731</span>
				<span><span class="emph">VAT</span>: CZ05183731</span>
			</div>
		</div>
	</div>
</section>
</main>