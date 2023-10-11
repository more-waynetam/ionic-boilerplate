<template>
    <ion-page>
        <ion-content>
            <ion-grid>
                <ion-row>
                    <ion-col size="12">
                        <ion-item>
                            <ion-label position="floating">Email</ion-label>
                            <ion-input type="email" v-model="email"></ion-input>
                        </ion-item>
                    </ion-col>
                    <ion-col size="12">
                        <ion-item>
                            <ion-label position="floating">Password</ion-label>
                            <ion-input type="password" v-model="password"></ion-input>
                        </ion-item>
                    </ion-col>
                    <ion-col size="12">
                        <ion-button expand="block" @click="login">Login</ion-button>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </ion-content>
    </ion-page>
</template>
<script setup lang="ts">
import { IonPage, IonContent, IonGrid, IonRow, IonCol, IonItem, IonLabel, IonInput, IonButton } from '@ionic/vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import { useAuthStore } from '@/stores/useAuthStore';
const authStore = useAuthStore();
const email = ref('');
const password = ref('');
const router=useRouter();
const login = () => {
    authStore.signIn(email.value, password.value);
    //redirect to home
    router.push('/tabs/tab1');
}
</script>