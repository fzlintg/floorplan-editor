import { defineStore } from 'pinia'

export const useNetworkStore = defineStore('network', {
  state: () => ({
    routers: [] as any[],
    aps: [] as any[],
    heatmap: null as null | string,
    optimized: false,
  }),
  actions: {
    setRouters(routers: any[]) { this.routers = routers },
    setAps(aps: any[]) { this.aps = aps },
    setHeatmap(heatmap: string) { this.heatmap = heatmap },
    setOptimized(opt: boolean) { this.optimized = opt }
  }
})
