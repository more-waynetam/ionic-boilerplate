<template>
  <ion-page>
    <HomeTopNav />
    <ion-content id="home-page">
      <ion-tabs>
        <ion-router-outlet></ion-router-outlet>
        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="home" href="/home/dashboard">
            <ion-icon aria-hidden="true" :icon="triangle" />
            <ion-label>home</ion-label>
          </ion-tab-button>
          <ion-tab-button tab="my-channels" href="/home/my-channels">
            <ion-icon aria-hidden="true" :icon="ellipse" />
            <ion-label>My channels</ion-label>
          </ion-tab-button>
          <ion-tab-button tab="tgs-channels" href="/home/tgs-channels">
            <ion-icon aria-hidden="true" :icon="ellipse" />
            <ion-label>TGS channels</ion-label>
          </ion-tab-button>
          <ion-tab-button tab="profile" href="/home/profile">
            <ion-icon aria-hidden="true" :icon="square" />
            <ion-label>Profile</ion-label>
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    </ion-content>
    <HomeMenu content-id="home-page" />
  </ion-page>  
  
</template>

<script setup lang="ts">
import { IonContent, IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { ellipse, square, triangle } from 'ionicons/icons';
import HomeTopNav from '@/components/home/HomeTopNav.vue';
import HomeMenu from '@/components/home/HomeMenu.vue';
</script>
