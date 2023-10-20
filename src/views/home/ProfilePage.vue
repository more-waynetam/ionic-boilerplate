<template>
    <ion-page>
        <ion-content>
            <ion-grid>
                <ion-row>
                    <ion-col>
                        <h1>Profile</h1>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col>
                        <ion-card>
                            <ion-card-content>
                                <ion-list lines="full">
                                    <ion-item :detail="true" @click="$router.push({'name':'profile-activity'})">
                                        <ion-label>Activity</ion-label>
                                    </ion-item>
                                    <ion-item :detail="true" @click="$router.push({'name':'profile-settings'})">
                                        <ion-label>Settings</ion-label>
                                    </ion-item>
                                </ion-list>
                            </ion-card-content>
                        </ion-card>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </ion-content>
    </ion-page>
</template>
<script setup lang="ts">
import { IonPage,IonCard,IonList,IonCardContent, IonContent, IonGrid, IonRow, IonCol, IonItem, IonLabel, IonInput, IonButton } from '@ionic/vue';
</script>