# 应用下载中心

独立开发者 [陈信成 (cxcboss)](https://github.com/cxcboss) 的应用下载中心网站，展示和分发开源应用，支持深色/浅色主题。

**在线访问**：https://cxcboss.github.io/home/

## 收录应用

| 应用 | 平台 | 仓库 |
|------|------|------|
| 搬运蚁 AntBot（视频自动化工作台） | macOS / Windows | [AntBot-releases](https://github.com/cxcboss/AntBot-releases) |
| 视频发布助手（Chrome 扩展） | Chrome | [video-publish-extension](https://github.com/cxcboss/video-publish-extension) |
| 行为录制精灵（鼠标宏） | macOS | [MacroRecorder](https://github.com/cxcboss/MacroRecorder) |
| ClipboardTool（剪贴板管理） | macOS | [ClipboardTool](https://github.com/cxcboss/ClipboardTool) |
| 图缩 Zipic（图片压缩） | macOS | [Zipic](https://github.com/cxcboss/Zipic) |
| OPPO 主题工具（解包/打包） | macOS | [OPPOthemetool](https://github.com/cxcboss/OPPOthemetool) |
| OPPO 主题打包 | macOS | [OPPOthemezip](https://github.com/cxcboss/OPPOthemezip) |
| 图标包名提取器 | Android | [iconsname](https://github.com/cxcboss/iconsname) |
| 晕车检测器 | Web | [motion-sickness-detector](https://github.com/cxcboss/motion-sickness-detector)（[在线版](https://onebugmanai.online/)） |

## 技术栈

纯静态站点（HTML / CSS / 原生 JavaScript），无需构建，推送到 `main` 分支即自动通过 GitHub Pages 部署。

### 如何新增应用

编辑 `script.js` 顶部的 `apps` 数组，按现有条目格式添加：名称、版本、更新日期、图标与横幅素材（`img/` 目录）、描述、下载链接（指向 GitHub Releases 资产）、仓库地址与功能标签。页面上的统计、筛选和搜索会自动生效。

## 许可证

MIT
