import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';
import { useAuthStore } from '@/stores/useAuthStore';

export default async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext): Promise<void> => {
  const { auth } = to.meta;
  try {
    if (auth) {
      const authStore = useAuthStore();
      if (!authStore.isSignedIn()) {
        next({ name: 'login', replace: true });
      }
    }
    next();
  } catch (error) {
    next({ name: 'login', replace: true });
  }
}