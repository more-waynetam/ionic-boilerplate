<template>
    <ion-header>
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-menu-button></ion-menu-button>
            </ion-buttons>
            <ion-title>mytgs</ion-title>
            <ion-label slot="end">
                
            </ion-label>
            <ion-buttons slot="end">
                <ion-button>
                    <ion-icon slot="icon-only" :icon="person"></ion-icon>
                </ion-button>
            </ion-buttons>
        </ion-toolbar>
    </ion-header>
</template>
<script setup lang="ts">
import { IonHeader,IonIcon, IonLabel,IonButton, IonToolbar, IonButtons, IonMenuButton, IonTitle } from '@ionic/vue';
import {person} from 'ionicons/icons';
</script>