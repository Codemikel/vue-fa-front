<script>
export default {
    name: 'CreateProperty',
    data() {
        return {
            formData: {
                department: '',
                municipality: '',
                sidewalk: '',
                name: '',
                analyzed_crop: '',
                weather: '',
                trunk_name: '',
                area: 0,
                coordinates: '',
            }
        };
    }
}
</script>
<script setup>
import headerContent from '../../components/header.vue'
import PropertyForm from './PropertyForm.vue'
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
    <PropertyForm :formData="formData"/>
    <!-- Body Fin-->

    <!-- Footer Inicio-->
    <!-- |- Footer de la Página -| -->
    <footerContent/>
     <!-- Footer Fin-->
  </body>
</template>
