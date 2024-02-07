<script setup>
import headerContent from '../../components/header.vue'
import PropertyForm from '../../components/properties/PropertyForm.vue'
import footerContent from '../../components/footer.vue'
</script>

<template>
  <body>
    <!-- Header Inicio-->
     <!-- |- Header de la Página -| -->
     <headerContent/>
    <!-- Header Fin-->

    <!-- Body Inicio-->
    <!-- |- Contenido de la Página -| -->
    <PropertyForm/>
    <!-- Body Fin-->

    <!-- Footer Inicio-->
    <!-- |- Footer de la Página -| -->
    <footerContent/>
     <!-- Footer Fin-->
  </body>
</template>

