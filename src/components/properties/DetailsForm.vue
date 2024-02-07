<script>
import { FormKit } from '@formkit/vue';
import IndicatorsForm from './IndicatorsForm.vue';

export default {
  name: 'DetailsForm',
  components: {
    IndicatorsForm,
    FormKit
  },
  props: {
    propertyId: {
      type: Number,
      required: true
    },
    form: {
      type: Object,
      required: true
    },
    updating: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    if (this.updating) {
      return {
        formData: {
          property_id: this.propertyId,
          class: this.form.class,
          type: this.form.type,
          consistence: this.form.consistence,
          munsell_table_color: this.form.munsell_table_color,
          worm_quantity: this.form.worm_quantity,
          organisms_quantity: this.form.organisms_quantity,
          no_munsell_table_color: this.form.no_munsell_table_color,
          organisms: this.form.organisms,
        },
        visualFormData: {
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
        showIndicatorsForm: false,
      }
    } else {
      return {
        formData: {
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
        visualFormData: {
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
        showIndicatorsForm: false,
      }
    };
  },
  methods: {
    async submitForm(data) {
      if (this.updating) {
        const response = await fetch(`http://localhost:8000/api/propertiesTextureDetails/${this.$route.params.property_id}/edit`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.formData),
        });

        await fetch(`http://localhost:8000/api/propertiesVisualDetails/${this.$route.params.id}/edit`)
          .then(res => res.json())
          .then(data => {
              console.log(data.data);
              this.visualFormData = data.data;
        });

      } else {
        const response = await fetch('http://localhost:8000/api/propertiesTextureDetails/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.formData),
        });
        const data = await response.json();
      }

      this.showIndicatorsForm = true;
    }
  },
  watch: {
    propertyId(newPropertyId) {
      this.formData.property_id = newPropertyId;
    },
  },
};
</script>
<script setup> 
</script>

<template>
  <FormKit v-if="!showIndicatorsForm" type="form" @submit="submitForm" submit-label="Guardar detalles" submit-class="p-4 text-blue-200 bg-blue-900" form-class="details-form">
    <h2 class="my-4 text-center text-xl font-semibold">Detalles del predio</h2>
    <div class="formkit-container">
      <FormKit 
          label-class="text-gray-900"
          help-class="text-sm text-gray-400"
          label="Clase textural"
          type="radio"
          :options="[
            'Arenoso',
            'Limoso',
            'Franco',
            'Arcilloso',
            'Otro'
          ]"
          validation="required"
          v-model="formData.class"

      />

      <FormKit 
          label-class="text-gray-900"
          help-class="text-sm text-gray-400"
          label="Tipo de estructura"
          type="radio"
          :options="[
            'Prismáticas',
            'Granulares',
            'Laminar',
            'Columnar',
            'Bloque'
          ]"
          validation="required"
          v-model="formData.type"
      />

      <FormKit 
          label-class="text-gray-900"
          help-class="text-sm text-gray-400"
          label="Tipo de estructura"
          type="radio"
          :options="[
            'Suelto',
            'Firme',
            'Fríable',
            'Extremadamente firme'
          ]"
          validation="required"
          v-model="formData.consistence"
      />
    </div>
    <div class="details-text-container">
        <FormKit 
          label-class="text-gray-900 font-semibold"
          input-class="my-4 p-2 border border-gray-300 rounded h-10 w-full mb-2"
          help-class="text-sm text-gray-400"
          label="Color tabla Munsell"
          type="text"
          validation="required"
          v-model="formData.munsell_table_color"
          :validation-messages="{
            required: 'Color de tabla munsell requerido'
          }"
        />

        <FormKit 
          label-class="text-gray-900 font-semibold"
          input-class="my-4 p-2 border border-gray-300 rounded h-10 w-full mb-2"
          help-class="text-sm text-gray-400"
          label="Color sin tabla Munsell"
          type="text"
          validation="required"
          v-model="formData.no_munsell_table_color"
          :validation-messages="{
            required: 'Color sin tabla munsell requerido'
          }"
        />

        <FormKit 
          label-class="text-gray-900 font-semibold"
          input-class="my-4 p-2 border border-gray-300 rounded h-full w-full mb-2"
          help-class="text-sm text-gray-400"
          label="Cantidad de lombrices"
          type="text"
          validation="required|number"
          v-model="formData.worm_quantity"
          :validation-messages="{
            required: 'Cantidad de lombrices requerida',
            number: 'El dato debe ser de tipo numérico'
          }"
        />

        <FormKit 
          outer-class="row-start-2 row-end-4 col-start-2 col-end-3 h-full w-full"
          label-class="text-gray-900 font-semibold"
          input-class="my-4 p-2 border border-gray-300 rounded h-32 w-full mb-2"
          help-class="text-sm text-gray-400"
          label="¿Cuáles son los organismos que evidencia?"
          type="text"
          validation="required"
          v-model="formData.organisms"
          :validation-messages="{
            required: 'Organismos que se ven son requeridos'
          }"
        />

        <FormKit 
          label-class="text-gray-900 font-semibold"
          input-class="my-4 p-2 border border-gray-300 rounded h-10 w-full mb-2"
          help-class="text-sm text-gray-400"
          label="Cantidad de organismos"
          type="text"
          validation="required|number"
          v-model="formData.organisms_quantity"
          :validation-messages="{
            required: 'Cantidad de gusanos requerida',
            number: 'El dato debe ser de tipo numérico'
          }"
        />

    </div>
  </FormKit>
  <IndicatorsForm v-if="showIndicatorsForm" :propertyId="propertyId" :form="visualFormData"/>
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
  .details-form.formkit-form .formkit-container{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  .formkit-form .formkit-actions {
    align-self: end;
    justify-self: end;
  }
  .details-form .details-text-container{
    display: grid;
    grid-template-columns: auto auto;
    gap: 20px;
  }
  .details-form .formkit-actions {
    display: flex;
    justify-content: flex-end;
    margin-top: -40px;
  }

  .details-form .formkit-container .formkit-option .formkit-wrapper {
    display: flex;
    align-items: center;
    gap: 10px;
  }

}
</style>