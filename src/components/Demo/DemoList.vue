<template>
    <ion-list>
        <ion-item v-for="(item,index) in demoList" :key="index">
            <ion-label>{{ item.title }}</ion-label>
        </ion-item>
    </ion-list>
</template>
<script setup lang="ts">
import { IonList, IonItem } from '@ionic/vue';
import { useDemoStore } from '@/stores/useDemoStore';
import { watchEffect,ref } from 'vue';

const demoStore=useDemoStore();
const demoList = ref<{ title: string; content: string; }[]>([]);
watchEffect(()=>{
    demoList.value=demoStore.getList()
})
</script>