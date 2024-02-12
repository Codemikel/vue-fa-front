<script>
import DetailsForm from './DetailsForm.vue';

export default {
  name: 'PropertyForm',
  props: {
    updating: {
      type: Boolean,
      required: false,
      default: false
    },
    formData: {
      type: Object,
      required: true
    }
  },
  data(){
    return {
      detailsFormData: {
        property_id: this.propertyId,
        class: '',
        type: '',
        consistence: '',
        munsell_table_color: '',
        worm_quantity: '',
        organisms_quantity: '',
        no_munsell_table_color: '',
        organisms: '',
      },
      showDetailsForm: false
    }
  },
  components: {
    DetailsForm,
  },
  methods: {
    async submitForm(data) {
      if (this.updating) {
        
        await fetch(`http://localhost:8000/api/properties/${this.$route.params.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.formData),
        });
        console.log(this.$route.params)

        await fetch(`http://localhost:8000/api/propertiesTextureDetails/${this.$route.params.id}/edit`)
          .then(res => res.json())
          .then(data => {
              console.log(data);
              this.detailsFormData = data;
        })

      } else {
        const response = await fetch('http://localhost:8000/api/properties/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.formData),
        });
  
        const data = await response.json();
        console.log(data);
        this.formData.id = data.id;
      }
      
      this.propertyId = this.formData.id;
      this.showDetailsForm = true;
    }
  },
};
</script>

<template>
    <div class="my-px mx-8 pt-8 px-3 sm:p-8 m-8 bg-white rounded-md shadow-md">
      <h2 class="mb-4 text-center text-lg font-semibold">Tarjeta puntuación para evaluar la calidad del suelo</h2>
        
      <FormKit v-if="!showDetailsForm" type="form" @submit="submitForm" submit-label="Guardar Predio" form-class="property-form" >
        
        <FormKit
          v-model="formData.department"
          type="select"
          label="Departamento *"
          :options="[
            'Amazonas',
            'Antioquia',
            'Arauca',
            'Atlántico',
            'Bogotá, D. C',
            'Bolivar',
            'Boyacá',
            'Caldas',
            'Caquetá',
            'Casanare',
            'Cauca',
            'Cesar',
            'Chocó',
            'Córdoba',
            'Cundinamarca',
            'Guainía',
            'Guaviare',
            'Huila',
            'La Guajira',
            'Magdalena',
            'Meta',
            'Nariño',
            'Norte de Santander',
            'Putumayo',
            'Quindío',
            'Risaralda',
            'San Andrés y Providencia',
            'Santander',
            'Sucre',
            'Tolima',
            'Valle del Cauca',
            'Vaupés',
            'Vichada'
          ]"
          label-class="text-gray-900 font-semibold"
          input-class="my-4 p-2 bg-white border border-gray-300 rounded h-10 w-full mb-2"
          :validation-messages="{
            required: 'Departamento requerido'
          }"
        />

        <FormKit
          label-class="text-gray-900 font-semibold"
          input-class="my-4 p-2  border border-gray-300 rounded h-10 w-full mb-2"
          help-class="text-sm text-gray-400"
          label="Municipio *"
          type="text"
          help="Nombre del municipio"
          validation="required"
          v-model="formData.municipality"
          :validation-messages="{
            required: 'Nombre del municipio requerido'
          }"
        />
        
        <FormKit 
          outer-class=""
          label-class="text-gray-900 font-semibold"
          input-class="my-4 p-2  border border-gray-300 rounded h-10 w-full mb-2"
          help-class="text-sm text-gray-400"
          label="Vereda *"
          type="text"
          help="Nombre de vereda"
          validation="required"
          v-model="formData.sidewalk"
          :validation-messages="{
            required: 'Vereda requerida'
          }"
        />

        <FormKit 
          outer-class=""
          label-class="text-gray-900 font-semibold"
          input-class="my-4 p-2  border border-gray-300 rounded h-10 w-full mb-2"
          help-class="text-sm ml-3 text-gray-400"
          label="Nombre de predio *"
          type="text"
          help="Nombre de predio."
          validation="required"
          v-model="formData.name"
          :validation-messages="{
            required: 'Nombre del predio es requerido'
          }"
        />

        <FormKit 
          label-class="text-gray-900 font-semibold"
          input-class="my-4 p-2  border border-gray-300 rounded h-10 w-full mb-2"
          help-class="text-sm text-gray-400"
          label="Cultivo analizado *"
          type="text"
          help="Ej: Tomate, Papa."
          validation="required"
          v-model="formData.analyzed_crop"
          :validation-messages="{
            required: 'Cultivo analizado requerido'
          }"
        />

        <FormKit 
          label-class="text-gray-900 font-semibold"
          input-class="my-4 p-2  border border-gray-300 rounded h-10 w-full mb-2"
          help-class="text-sm text-gray-400"
          label="Clima *"
          type="text"
          help="Ej: Frío, Cálido."
          validation="required"
          v-model="formData.weather"
          :validation-messages="{
            required: 'Clima es requerido'
          }"
        />

        <FormKit 
          label-class="text-gray-900 font-semibold"
          input-class="my-4 p-2  border border-gray-300 rounded h-10 w-full mb-2"
          help-class="text-sm text-gray-400"
          label="Nombre de la cajuela *"
          type="text"
          help="Nombre de cajuela"
          validation="required"
          validation-class="text-red-700"
          v-model="formData.trunk_name"
          :validation-messages="{
            required: 'Nombre de la cajuela requerida'
          }"
        />

        <FormKit 
          label-class="text-gray-900 font-semibold"
          input-class="my-4 p-2  border border-gray-300 rounded h-10 w-full mb-2"
          help-class="text-sm text-gray-400"
          label="Área *"
          type="text"
          help="Área en metros"
          validation="required|number"
          v-model="formData.area"
          :validation-messages="{
            required: 'Área requerida',
            number: 'El campo debe ser de tipo númerico (se permite decimales con .)'
          }"
        />

        <FormKit 
          label-class="text-gray-900 font-semibold"
          input-class="my-4 p-2  border border-gray-300 rounded h-10 w-full mb-2"
          help-class="text-sm text-gray-400"
          label="Coordenadas *"
          type="text"
          help="Coordenadas del predio"
          validation="required"
          v-model="formData.coordinates"
          :validation-messages="{
            required: 'Coordenadas requeridas'
          }"
        />

      </FormKit>
  

      <DetailsForm v-if="showDetailsForm" :updating="updating" :form="detailsFormData" :propertyId="propertyId"/>
    </div>
  </template>
  
<style>

input {
  width: 100%;
}

select {
  width: 100%;
}

button {
  color: white;
  border-radius: 0.5em;
  padding: 0.5em 1em;
  border: none;
  background-color: #1068d4;
}

button:hover {
  background-color: #0a4a98;
}

label {
  color: #2b2b2b;
  font-weight: bold;
}

li {
  list-style: none;
  font-size: 0.8em;
  color: #d20d0d;
}

@media screen and (max-width: 767px) {
  form {
    display: block;
  }
  button {
    margin: 1em 0.3em;
    width: 100%;
  }
}

@media screen and (min-width: 768px) {
  .formkit-form .formkit-actions {
    align-self: end;
    justify-self: end;
  }
  .property-form.formkit-form {
    padding: 1em 8em;
    display: grid;
    grid-template-columns: auto auto;
    gap: 4em;
  }
}

</style>