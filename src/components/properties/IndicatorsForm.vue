<script>
  export default {
    name: 'IndicatorsForm',
    props: {
      propertyId: {
        type: Number,
        required: true,
      },
    },
    data() {
      return {
        visualScale: [ 0, 0.5, 1, 1.5, 2],
        formData: {
          property_id: this.propertyId,
          structure: 0,
          porosity: 0,
          color: 0,
          horizon_breaking_strength: 0,
          aggregate_stability: 0,
          hardened_layers: 0,
          penetration_resistance: 0,
          infiltration_rate: 0,
          organic_material: 0,
          worms_quantity: 0,
          organisms_quantity: 0,
          root_growth: 0,
          electric_conductivity: 0,
          structure_evs: 0,
          porosity_evs: 0,
          color_evs: 0,
          horizon_breaking_strength_evs: 0,
          aggregate_stability_evs: 0,
          hardened_layers_evs: 0,
          penetration_resistance_evs: 0,
          infiltration_rate_evs: 0,
          organic_material_evs: 0,
          worms_quantity_evs: 0,
          organisms_quantity_evs: 0,
          root_growth_evs: 0,
          electric_conductivity_evs: 0
        },
        showSuccessModal: false,
      };
    },
    methods: {
      async submitForm(data) {
        if (this.updating) {
          const response = await fetch(`http://localhost:8000/api/propertiesVisualDetails/${this.$route.params.id}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.formData),
          });
          alert('Indicadores actulizados.')
        } else {
          const response = await fetch('http://localhost:8000/api/propertiesVisualDetails/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.formData),
          });
          alert('Indicadores registrados.')
        }
        this.$router.push('/guia-page')
      },
      updateEVS(fieldName) {

      },
    },
    watch: {
      propertyId(newPropertyId) {
        this.formData.property_id = newPropertyId;
      },
    },
  };
  </script>
  

<template>
    <div>
      <h2 class="text-center font-semibold text-xl my-4">Indicadores visuales</h2>
      <div class="indicators-header">
        <p>Indicadores visuales de calidad de suelo</p>
        <p>Puntuación visual</p>
        <p>Ponderación de los indicadores</p>
        <p>Clasificación EVS</p>
      </div>
      <hr>
      <FormKit type="form" @submit="submitForm" submit-label="Guardar indicadores visuales">
        <div class="indicator-input-container">
          <label class="font-semibold text-gray-900">Estructura y consistencia</label>
          <FormKit 
            input-class="my-4 p-2 bg-white border border-gray-300 rounded h-10 w-full mb-2"
            type="select"
            :options=visualScale
            v-model="formData.structure"
          />
          <p class="font-semibold text-center">x3</p>
          <FormKit 
            input-class="my-4 p-2 bg-white border border-gray-300 rounded h-10 w-full mb-2"
            type="text"
            v-model="formData.structure_evs"
          />
        </div>
        
        <div class="indicator-input-container">
          <label class="font-semibold text-gray-900">Porosidad</label>
          <FormKit 
            input-class="my-4 p-2 bg-white border border-gray-300 rounded h-10 w-full mb-2"
            type="select"
            :options=visualScale
            v-model="formData.porosity"
          />
          <p class="font-semibold text-center">x3</p>
          <FormKit 
            input-class="my-4 p-2 bg-white border border-gray-300 rounded h-10 w-full mb-2"
            type="text"
            v-model="formData.porosity_evs"
          />
        </div>

        <div class="indicator-input-container">
          <label class="font-semibold text-gray-900">Color</label>
          <FormKit 
            input-class="my-4 p-2 bg-white border border-gray-300 rounded h-10 w-full mb-2"
            type="select"
            :options=visualScale
            v-model="formData.color"
          />
          <p class="font-semibold text-center">x2</p>
          <FormKit 
            input-class="my-4 p-2 bg-white border border-gray-300 rounded h-10 w-full mb-2"
            type="text"
            v-model="formData.color_evs"
          />
        </div>

        <div class="indicator-input-container">
          <label class="font-semibold text-gray-900">Resistencia al rompimiento por horizonte</label>
          <FormKit 
            input-class="my-4 p-2 bg-white border border-gray-300 rounded h-10 w-full mb-2"
            type="select"
            :options=visualScale
            v-model="formData.horizon_breaking_strength"
          />
          <p class="font-semibold text-center">x2</p>
          <FormKit 
            input-class="my-4 p-2 bg-white border border-gray-300 rounded h-10 w-full mb-2"
            type="text"
            v-model="formData.horizon_breaking_strength_evs"
          />
        </div>

        <div class="indicator-input-container">
          <label class="font-semibold text-gray-900">Estabilidad de agregados</label>
          <FormKit 
            input-class="my-4 p-2 bg-white border border-gray-300 rounded h-10 w-full mb-2"
            type="select"
            :options=visualScale
            v-model="formData.aggregate_stability"
          />
          <p class="font-semibold text-center">x3</p>
          <FormKit 
            input-class="my-4 p-2 bg-white border border-gray-300 rounded h-10 w-full mb-2"
            type="text"
            v-model="formData.aggregate_stability_evs"
          />
        </div>

        <div class="indicator-input-container">
          <label class="font-semibold text-gray-900">Capas endurecidas</label>
          <FormKit 
            input-class="my-4 p-2 bg-white border border-gray-300 rounded h-10 w-full mb-2"
            type="select"
            :options=visualScale
            v-model="formData.hardened_layers"
          />
          <p class="font-semibold text-center">x1</p>
          <FormKit 
            input-class="my-4 p-2 bg-white border border-gray-300 rounded h-10 w-full mb-2"
            type="text"
            v-model="formData.hardened_layers_evs"
          />
        </div>

        <div class="indicator-input-container">
          <label class="font-semibold text-gray-900">Resistencia a la penetración</label>
          <FormKit 
            input-class="my-4 p-2 bg-white border border-gray-300 rounded h-10 w-full mb-2"
            type="select"
            :options=visualScale
            v-model="formData.penetration_resistance"
          />
          <p class="font-semibold text-center">x2</p>
          <FormKit 
            input-class="my-4 p-2 bg-white border border-gray-300 rounded h-10 w-full mb-2"
            type="text"
            v-model="formData.penetration_resistance_evs"
          />
        </div>

        <div class="indicator-input-container">
          <label class="font-semibold text-gray-900">Velocidad de infiltración</label>
          <FormKit 
            input-class="my-4 p-2 bg-white border border-gray-300 rounded h-10 w-full mb-2"
            type="select"
            :options=visualScale
            v-model="formData.infiltration_rate"
          />
          <p class="font-semibold text-center">x3</p>
          <FormKit 
            input-class="my-4 p-2 bg-white border border-gray-300 rounded h-10 w-full mb-2"
            type="text"
            v-model="formData.infiltration_rate_evs"
          />
        </div>

        <div class="indicator-input-container">
          <label class="font-semibold text-gray-900">Materia orgánica</label>
          <FormKit 
            input-class="my-4 p-2 bg-white border border-gray-300 rounded h-10 w-full mb-2"
            type="select"
            :options=visualScale
            v-model="formData.organic_material"
          />
          <p class="font-semibold text-center">x2</p>
          <FormKit 
            input-class="my-4 p-2 bg-white border border-gray-300 rounded h-10 w-full mb-2"
            type="text"
            v-model="formData.organic_material_evs"
          />
        </div>

        <div class="indicator-input-container">
          <label class="font-semibold text-gray-900">Cantidad de lombrices</label>
          <FormKit 
            input-class="my-4 p-2 bg-white border border-gray-300 rounded h-10 w-full mb-2"
            type="select"
            :options=visualScale
            v-model="formData.worms_quantity"
          />
          <p class="font-semibold text-center">x3</p>
          <FormKit 
            input-class="my-4 p-2 bg-white border border-gray-300 rounded h-10 w-full mb-2"
            type="text"
            v-model="formData.worms_quantity_evs"
          />
        </div>

        <div class="indicator-input-container">
          <label class="font-semibold text-gray-900">Cantidad de organismos</label>
          <FormKit 
            input-class="my-4 p-2 bg-white border border-gray-300 rounded h-10 w-full mb-2"
            type="select"
            :options=visualScale
            v-model="formData.organisms_quantity"
          />
          <p class="font-semibold text-center">x3</p>
          <FormKit 
            input-class="my-4 p-2 bg-white border border-gray-300 rounded h-10 w-full mb-2"
            type="text"
            v-model="formData.organisms_quantity_evs"
          />
        </div>

        <div class="indicator-input-container">
          <label class="font-semibold text-gray-900">Crecimiento de raíces</label>
          <FormKit 
            input-class="my-4 p-2 bg-white border border-gray-300 rounded h-10 w-full mb-2"
            type="select"
            :options=visualScale
            v-model="formData.root_growth"
          />
          <p class="font-semibold text-center">x3</p>
          <FormKit 
            input-class="my-4 p-2 bg-white border border-gray-300 rounded h-10 w-full mb-2"
            type="text"
            v-model="formData.root_growth_evs"
          />
        </div>

        <div class="indicator-input-container">
          <label class="font-semibold text-gray-900">Conductividad Eléctrica</label>
          <FormKit 
            input-class="my-4 p-2 bg-white border border-gray-300 rounded h-10 w-full mb-2"
            type="select"
            :options=visualScale
            v-model="formData.electric_conductivity"
          />
          <p class="font-semibold text-center">x2</p>
          <FormKit 
            input-class="my-4 p-2 bg-white border border-gray-300 rounded h-10 w-full mb-2"
            type="text"
            v-model="formData.electric_conductivity_evs"
          />
        </div>

      </FormKit>
    </div>
</template>
<style>
.indicators-header{
  display: grid;
  grid-template-columns: auto auto auto auto;
}
.indicator-input-container{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
}
</style>