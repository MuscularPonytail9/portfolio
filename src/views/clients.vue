<template>
    <div>
      <txtimg name="Clients" source="laser.jpg"></txtimg>

    </div>
</template>

<script>
import txtimg from '@/components/txtimg'

export default {
  components: {
    txtimg,
  },
  data: () => ({
      drawer: true,
      group: null,
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
}
</script>

<style>

</style>