# Floorplan Editor

本项目为户型图编辑器（AI识别+结构编辑+模板导入+数据导出），基于 Vue3 + Vite + TypeScript + Pinia + Element Plus + vue-konva。

## 功能预览

- 户型图上传
- AI自动房间结构识别（模拟接口）
- 房间结构可编辑（Konva 可视化）
- 标准户型模板选择/导入
- 结构数据导出
- 便于扩展热力图、设备拖拽等功能

## 安装依赖

```bash
npm install
```

## 本地启动

```bash
npm run dev
```

## 目录结构

- `src/` 主要业务代码
- `src/components/` 组件
- `src/views/` 页面
- `src/api/` 模拟接口
- `src/stores/` Pinia 状态管理

## 后续扩展

- 后端AI识别API对接
- 信号热力图、设备拖拽
- 更多户型模板
