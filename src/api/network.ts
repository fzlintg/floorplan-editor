// 实际开发可替换为http请求相关代码
export async function fetchHeatmap({ rooms, routers, aps }: { rooms: any[], routers: any[], aps: any[] }) {
  // mock: 返回Base64图片字符串
  return 'data:image/png;base64,xxxx'
}

export async function optimizeNetwork({ rooms }: { rooms: any[] }) {
  // mock: 自动生成路由器/AP和热力图结果
  return {
    routers: [{ id: 1, x: 100, y: 100, type: 'router' }],
    aps: [{ id: 2, x: 200, y: 200, type: 'ap' }],
    heatmap: 'data:image/png;base64,xxxx'
  }
}
