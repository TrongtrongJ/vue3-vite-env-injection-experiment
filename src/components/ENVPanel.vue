<script setup lang="ts">
import { envsMap } from "../utils/env.util";

const envKeys = Object.keys(envsMap) as (keyof typeof envsMap)[];

function formatEnvValueText(envValue: string | number | undefined) {
  return envValue != null ? envValue : "not found !!";
}
</script>

<template>
  <div class="env-panel-container">
    <ul>
      <li v-for="envkey of envKeys">
        {{ envkey }} : {{ formatEnvValueText(envsMap[envkey]) }}
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.env-panel-container {
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  justify-content: center;

  li {
    font-size: 120%;
    margin: 0.5rem 0;
    text-transform: capitalize;
  }
}
</style>
