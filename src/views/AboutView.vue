<template>
  <b-container class="mt-4">
    <b-row v-if={getTitle}>
      <b-col cols="3"  v-for="item in getTitle" :key="item.id">
        <card-buy :min="'3'" :title="item.title" >
        </card-buy>
      </b-col>
    </b-row>
  </b-container>
</template>
