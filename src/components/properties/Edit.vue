<script>
export default {
    name: 'EditProperty',
    data() {
        return {
            formData: {
                id: this.$route.params.id,
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
    },
    mounted() {
        this.getPropertyData(this.formData.id)
    },
    methods: {
        getPropertyData(propertyId){
            fetch(`http://localhost:8000/api/properties/${propertyId}/edit`)
                .then(res => res.json())
                .then(data => {
                    console.log(this.$route.params.id)
                    console.log(data);
                    this.formData = data;
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
        }
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
    <PropertyForm :updating="true" :formData="formData"/>
    <!-- Body Fin-->

    <!-- Footer Inicio-->
    <!-- |- Footer de la Página -| -->
    <footerContent/>
     <!-- Footer Fin-->
  </body>
</template>
