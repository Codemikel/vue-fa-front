<script>
export default {
  name: 'PropertiesIndex',
  data() {
    return {
      properties: [],
      currentPage: 1,
      totalPages: 1
    };
  },
  mounted() {
    this.fetchProperties();
  },
  methods: {
    async fetchProperties() {
      try {
        const response = await fetch(`http://localhost:8000/api/properties?page=${this.currentPage}`);
        const responseData = await response.json();

        this.properties = responseData.data;
        this.totalPages = responseData.meta.last_page;
        if (Array.isArray(responseData.data)) {
          this.properties = responseData.data.map(property => ({
            id: property.id,
            name: property.name,
            municipality: property.municipality,
            sidewalk: property.sidewalk
          }));
        } else {
          console.error('La propiedad "data" no es un array:', responseData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    goToPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
        this.fetchProperties();
      }
    },
    async deleteProperty(propertyId) {
      try {
        const response = await fetch(`http://localhost:8000/api/properties/${propertyId}`, {
          method: 'DELETE'
        });

        if (response.ok) {
          this.properties = this.properties.filter(property => property.id !== propertyId);
        } else {
          console.error('Error deleting property:', response)
        }

      } catch (error) {
        console.error('Error deleting property', error)
      }
    }
  },
};
</script>

<template>
      <div class="properties-table">
        <div class="properties-table-head-container">
          <div class="properties-table-head">
            <h2>Predios</h2>
            <router-link to="/property-create" class="px-2 py-1 rounded bg-white">Registrar predio</router-link>
          </div>
          <div class="properties-table-headers">
            <p class="text-white">Nombre del predio</p>
            <p class="text-white">Municipio</p>
            <p class="text-white">Vereda</p>
          </div>
        </div>
        <div v-for="property in properties" :key="property.id" class="px-4">
          <div class="property-container">
            <p class="text-gray-500">{{ property.name }}</p>
            <p class="text-gray-500">{{ property.municipality }}</p>
            <p class="text-gray-500 w-1/2">{{ property.sidewalk }}</p>
            <p class="property-actions">
              <a>Ver detalle</a>
              <router-link :to="{ path: '/properties/'+property.id+'/edit'}">
                <i class="fa-regular fa-pen-to-square"></i> Editar
              </router-link>
              <a @click="deleteProperty(property.id)" class="text-gray-500">
                <i class="fa-solid fa-trash" style="color: red;"></i> Eliminar
              </a>
              <a href="">
                <i class="fa-regular fa-circle-question"></i>
              </a>
            </p>
          </div>
          <hr/>
          </div>
          <div class="p-4 px-16 pagination-container">
            <a @click="goToPage(currentPage - 1)" class="text-blue-500 pagination-link" :disabled="currentPage === 1"> {{ '<< Anterior' }}</a>
            <a @click="goToPage(currentPage + 1)" class="text-blue-500 pagination-link" :disabled="currentPage === totalPages">{{ 'Siguiente >>' }}</a>
          </div>
      </div>
</template>

<style>
.properties-table{
  margin: 1rem;
  background-color: #fff;
  border-radius: 0.375rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.properties-table-head-container{
  padding-top: 0.75rem;
  width: 100%;
  background-color: #1a202c;
  border-radius: 0.375rem;
}
.properties-table-head-container h2{
  font-size: 2rem;
  color: #fff; 
  font-weight: 600;
}
.properties-table-head{
  padding: 0.6em;
  display: flex;
  justify-content: space-between;
}
.properties-table-head {
  padding: 0.6em;
  display: flex;
  justify-content: space-between;
}
.properties-table-headers{
  background-color: #63b3ed; 
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  padding: 0.5rem 1rem; 
}
.property-container{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 10px;
}
.property-actions{
  display: flex;
  justify-content: space-between;
  align-items: center; 
}
.property-actions{
  font-size: 0.8em;
}
a {
  text-decoration: none;
}

.pagination-container{
  display: flex;
  justify-content: space-between;
}

.pagination-link{
  cursor: pointer;
}
</style>