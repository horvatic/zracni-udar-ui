<script>
  import { getServiceHealth } from '../store/projectStore'

  export default {
    props: {
      healthUri: String,
    },
    async setup(props) {
      return {
        serviceHealth: await getServiceHealth(props.healthUri),
      }
    }
  }
</script>

<template>
  <div v-if="serviceHealth.heatlh === 'healthy'">
    <span class="displayclicktext">HEALTHY</span>
  </div>
  <div v-else-if="serviceHealth.heatlh === 'unhealthy'">
    <span class="displayclicktext">UNHEALTHY</span>
  </div>
  <div v-else-if="serviceHealth.heatlh === 'unknown'">
    <span class="displayclicktext">UNKNOWN</span>
  </div>
</template>
