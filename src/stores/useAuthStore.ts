import { defineStore } from 'pinia'
import { ref } from 'vue';

export const useAuthStore = defineStore('authStore', ()=>{
    const currentUser=ref<{name:String} | null>(null);
    const signIn = (username:String,password:String) => {
        if(username && password){
            currentUser.value = {name: 'test'}
            return true;
        }
    }

    const signOut = () => {
        currentUser.value = null;
        return true;
    }

    const isSignedIn = () => {
        return currentUser.value !== null;
    }
    return {currentUser, signIn, signOut, isSignedIn}
})