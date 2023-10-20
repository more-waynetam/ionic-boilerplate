<template>
    <ion-header>
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-back-button></ion-back-button>
            </ion-buttons>
            <ion-title>{{ props.title }}</ion-title>
        </ion-toolbar>
    </ion-header>
</template>
<script setup lang="ts">
import { IonHeader,IonBackButton, IonToolbar, IonButtons, IonTitle } from '@ionic/vue';
const props = defineProps({
    title: {
        type: String,
        default: 'mytgs'
    }
})
</script>