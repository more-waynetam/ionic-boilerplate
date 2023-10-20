<template>
    <ion-page>
        <CommonTopNav title="Activity" />
        <ion-content>
            <ion-grid>
                <ion-row>
                    <ion-col>
                        <ion-segment v-model="segment">
                            <ion-segment-button value="default">
                                <ion-label>Default</ion-label>
                            </ion-segment-button>
                            <ion-segment-button value="segment">
                                <ion-label>Segment</ion-label>
                            </ion-segment-button>
                        </ion-segment>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col v-if="segment==='default'">
                        <ion-text>
                            Default content
                        </ion-text>
                    </ion-col>
                    <ion-col v-else>
                        <ion-text>
                            Segment content
                        </ion-text>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </ion-content>
    </ion-page>
</template>
<script setup lang="ts">
import { IonSegment,IonSegmentButton, IonPage, IonContent, IonGrid, IonRow, IonCol, IonItem, IonLabel, IonInput, IonButton } from '@ionic/vue';
import CommonTopNav from '@/components/common/CommonTopNav.vue';
import { ref } from 'vue';
const segment = ref('default');
</script>
