import { defineStore } from 'pinia'

export const useFloorplanStore = defineStore('floorplan', {
  state: () => ({
    rooms: [] as any[],
    backgroundImage: '',
  }),
  actions: {
    setRooms(rooms: any[]) {
      this.rooms = rooms
    },
    setBackgroundImage(url: string) {
      this.backgroundImage = url
    }
  }
})
