<template>
    <ion-page>
        <ion-content class="fullscreen-content">
            <swiper-container :pagination="true" class="fullscreen-content">
                <swiper-slide class="slide">
                    <div>
                        Welcome 1
                    </div>
                </swiper-slide>
                <swiper-slide class="slide">
                    <div>Welcome 2</div>
                </swiper-slide>
                <swiper-slide class="slide">
                    <div>Welcome 3</div>
                    <ion-button href="/auth/login">start</ion-button>
                </swiper-slide>
            </swiper-container>
        </ion-content>
    </ion-page>
</template>
<script setup lang="ts">
import { IonPage, IonGrid, IonRow, IonCol, IonContent } from '@ionic/vue';
import { register } from 'swiper/element/bundle';
register();

</script>
<style scoped lang="scss">
.fullscreen-content {
    width: 100%;
    height: 100%;
}

.slide {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 18px;
}
</style>
