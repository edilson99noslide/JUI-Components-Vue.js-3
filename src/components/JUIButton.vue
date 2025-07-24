<script setup lang="ts">
  import { computed } from 'vue';

  const props = defineProps<{
    label: string;
    bgColor?: 'primary' | 'secondary' | 'tertiary';
  }>();

  const classBgColor = computed(() => {
    switch (props.bgColor) {
      case 'primary':
        return 'bg-primary';
      case 'secondary':
        return 'bg-secondary';
      case 'tertiary':
        return 'bg-tertiary';
      default:
        return 'bg-primary';
    }
  });
</script>

<template>
  <button :class="[classBgColor, 'button-component']">
    {{ label }}
  </button>
</template>

<style scoped>
.button-component {
  padding: 10px;
  font-size: 16px;

  min-width: 100px;

  color: #FFF;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button-component:hover {
  opacity: 0.8;
}
</style>