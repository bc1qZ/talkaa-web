# Talkaa Lite

这是一个手机优先的口语练习网页原型，参考了你提供的截图，已经包含：

- 首页任务卡片
- Part 1 / Part 2 题目页
- 计时练习页
- 自动点评页
- 报告页
- 润色答案播放与复制
- 后端真实评分接口骨架
- 微信小程序版本骨架
- 7.5 日常养成训练面板
- 个人错误本
- 立刻重答机制

## 文件

- `index.html`
- `styles.css`
- `app.js`
- `manifest.webmanifest`
- `sw.js`
- `backend/`
- `miniprogram/`
- `Dockerfile`
- `render.yaml`

## 怎么打开

直接打开 `index.html` 就能看界面。

如果要在手机上真正使用录音和真实评分，最省事的方式不是先做小程序，而是把网页和后端一起部署成一个可访问链接，然后直接用手机浏览器打开。这样麦克风权限更稳定，也更容易快速上线。

## 一键部署

我已经补了 Render 的一键部署配置：

- [render.yaml](/Users/six/Documents/Codex/2026-05-21/files-mentioned-by-the-user-3e0f0b5c36ce1d37dee42a600895b76d/render.yaml)
- [Dockerfile](/Users/six/Documents/Codex/2026-05-21/files-mentioned-by-the-user-3e0f0b5c36ce1d37dee42a600895b76d/Dockerfile)
- [DEPLOY_RENDER.md](/Users/six/Documents/Codex/2026-05-21/files-mentioned-by-the-user-3e0f0b5c36ce1d37dee42a600895b76d/DEPLOY_RENDER.md)

这意味着后面把项目放到 GitHub 后，可以直接用 Render 的 Deploy Button 或 Blueprint 部署，平台会给你一个现成的 `onrender.com` 网址，不一定要自己买域名。

## 当前实现说明

- 录音：使用浏览器麦克风权限
- 识别：优先调用浏览器内置语音识别
- 点评：如果没有配置后端密钥，会使用演示评分；如果配置了 `backend/.env.example` 里的环境变量，就会走真实模型评分
- 播放：使用浏览器自带语音合成
- 训练逻辑：优先服务“日常稳定提分到 7.5”，不是只做一次性模考

## 下一步可继续做

- 接 OpenAI 或其它语音评分接口，做更真实的发音评分
- 加题库管理和自定义题目
- 改成微信小程序 / Flutter / React Native 真正上手机
