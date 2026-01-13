import { create } from "zustand";

/**
 * Mission Store = uygulamanın "global state" merkezi.
 * Buraya mission ile ilgili ortak verileri koyacağız:
 * - position (UAV konumu)
 * - follow (kamera takip modu)
 *
 * create(...) bize bir hook döndürür: useMissionStore
 * Component içinde çağırıp state okuyup güncelleyebiliriz.
 */
export const useMissionStore = create((set) => ({
  position: [39.9334, 32.8597],
  follow: true,

  setPosition: (nextPosition) => set({ position: nextPosition }),
  toggleFollow: () => set((state) => ({ follow: !state.follow })),
}));
