<template>
    <ion-page>
        <CommonTopNav title="Settings"/>
        <ion-content>
            <ion-grid>
                <ion-row>
                    <ion-col>
                        <h1>Settings</h1>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </ion-content>
    </ion-page>
</template>
<script setup lang="ts">
import { IonPage, IonContent, IonGrid, IonRow, IonCol, IonItem, IonLabel, IonInput, IonButton } from '@ionic/vue';
import CommonTopNav from '@/components/common/CommonTopNav.vue';
</script>
