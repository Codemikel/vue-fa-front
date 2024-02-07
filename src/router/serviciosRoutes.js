// contactoRoutes.js
import Predial from '../views/pages/PredialPage.vue';
import MisCultivos from '../views/pages/MisCultivosPage.vue';
import Cultivos from '../views/pages/CultivosPage.vue';
import CreateProperty from '../components/properties/Create.vue'
import GuiaPage from '../views/pages/GuiaPage.vue'
import GuiaIndica from '../views/pages/GuiaIndicaPage.vue';
import Enviado from '../views/pages/EnviadoPage.vue';
import ServicioPlantilla from '../views/pages/ServiciosPage.vue';
import Recomendaciones from '../views/pages/RecomendacionesPage.vue';
import EditProperty from '../components/properties/Edit.vue'


const serviciosRoutes = [
  {
    path: '/predial-page',
    name: 'Predial',
    component: Predial,
  },
  {
    path: '/mis-cultivos-page',
    name: 'MisCultivos',
    component: MisCultivos,
  },
  {
    path: '/cultivos-page',
    name: 'Cultivos',
    component: Cultivos,
  },

  {
    path: '/guia-page',
    name: 'GuiaPage',
    component: GuiaPage,
  },
  {
    path: '/guia-indica-page',
    name: 'GuiaIndica',
    component: GuiaIndica,
  },
  {
    path: '/enviado-page',
    name: 'Enviado',
    component: Enviado,
  },
  {
    path: '/recomendaciones-page',
    name: 'recomendaciones',
    component: Recomendaciones,
  },
  {
    path: '/servicio-page',
    name: 'Servicio',
    component: ServicioPlantilla,
  },
  {
    path: '/property-create',
    name: 'Registrar predio',
    component: CreateProperty,
  },
  {
    path: '/properties/:id/edit',
    name: 'Editar predio',
    component: EditProperty
  }

];

export default serviciosRoutes;
