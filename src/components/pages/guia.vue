<template>
    <!-- Main Content -->
<MainForm/>
<main class="section main-layout flow-intern">
	<!-- End section -->
	<MainForm/>
	<aside class="aside" >
		<ul class="aside__list" style="border: 1px solid black;">
			<li class="aside__item">
				<figure>
					<img class ="img-tamaño" src="../../assets/images/plantilla-3.png" alt="logo" loading="lazy" decoding="async"/>
				</figure>
				<p>Mis Suelos</p>
			</li>
			<li class="aside__item">
				<figure>
					<img class ="img-tamaño" src="../../assets/images/imgpredial.jpg" alt="logo" loading="lazy" decoding="async"/>
				</figure>
				<p>Mi Predial</p>
			</li>
			<li class="aside__item">
				<figure>
					<img class ="img-tamaño"  src="../../assets/images/Red.jpg" alt="logo" loading="lazy" decoding="async"/>
				</figure>
				<p>Red de Conocimientos</p>
			</li>
		</ul>
	</aside>
	<!-- End Aside -->
</main>
<!-- End Main Content -->
</template>
<style scoped>
@import "@/assets/styles/components/main-layout.css";
@import "@/assets/styles/base/global.css";
@import "@/assets/styles/pages/flow-intern.css";
@import "@/assets/styles/pages/form.css";
@import "@/assets/styles/pages/input.css";
@import "@/assets/styles/pages/table.css";
/* @import "@/assets/styles/pages/button.css"; */



.border-field {
    border: 1px solid #000000;
    padding: 10px;
    position: relative;
  }

  .label {
    font-size: 0.875rem;
    font-weight: 600;
    color: grey;
  }

  .input-ajustado {
    width: 100%;
    box-sizing: border-box;
    max-width: 100%; /* Ancho máximo del textarea */
  }

  .img-tamaño {
    width: 100px;
  }

  .aside__list {
    list-style: none;
  }

  .btn-primary {
    background-color: #1b568f;
    padding: 12px;
  }

</style>
   