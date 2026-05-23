# 真实评分进阶版部署指南

这份说明默认你是小白，不需要先会命令行。

目标很简单：

1. 把项目传到 GitHub
2. 在 Render 上点几下部署
3. 填入 OpenAI API Key
4. 拿到一个网页网址
5. 手机上打开并收藏成书签

---

## 先确认你已经具备

- GitHub 账号
- OpenAI API Key

如果这两样你已经有了，就可以继续。

---

## 第一步：把项目上传到 GitHub

最简单的方法：

1. 打开 GitHub
2. 新建一个仓库
3. 仓库名建议写：`talkaa-web`
4. 设成 `Private` 也可以
5. 创建完成后，上传当前这个文件夹里的所有文件

你要上传的就是这个目录里的内容，不需要自己删文件。

已经帮你加好了：

- [.gitignore](/Users/six/Documents/Codex/2026-05-21/files-mentioned-by-the-user-3e0f0b5c36ce1d37dee42a600895b76d/.gitignore)

它会避免你把密钥和依赖缓存误传上去。

注意：

- 不要上传你自己真实的 `.env`
- `backend/.env.example` 可以保留，它只是示例

---

## 第二步：去 Render 部署

打开：

- [Render](https://render.com/)

然后按这个顺序：

1. 用 GitHub 登录 Render
2. 点击 `New +`
3. 选择 `Blueprint`
4. 连接你刚刚创建的 GitHub 仓库
5. Render 会自动识别项目里的 [render.yaml](/Users/six/Documents/Codex/2026-05-21/files-mentioned-by-the-user-3e0f0b5c36ce1d37dee42a600895b76d/render.yaml)
6. 继续下一步

---

## 第三步：填写环境变量

Render 部署时，最关键的是填这个：

- `OPENAI_API_KEY`

你直接把自己的 OpenAI Key 粘进去。

其他两个变量项目里已经给了默认值：

- `OPENAI_EVAL_MODEL=gpt-4o-mini-transcribe`
- `OPENAI_REPORT_MODEL=gpt-4.1`

如果 Render 页面里显示了这些默认值，一般不用改。

---

## 第四步：开始部署

Render 开始部署后：

1. 等几分钟
2. 如果成功，你会看到一个网址
3. 网址通常会像：`https://xxxx.onrender.com`

这个网址就是你以后每天练口语要打开的入口。

---

## 第五步：手机使用

### iPhone

1. 用 Safari 打开 Render 给你的网址
2. 点底部分享按钮
3. 选择 `添加到主屏幕`

### Android

1. 用 Chrome 打开网址
2. 点右上角菜单
3. 选择 `添加到主屏幕`

或者你也可以直接收藏成书签。

以后你就可以像你之前的写作/口语签到工具一样，点一下就打开。

---

## 第六步：第一次自测

部署成功后，建议你先做这几个检查：

1. 首页能正常打开
2. 能进入练习页
3. 浏览器允许麦克风权限
4. 录音后能返回评分结果
5. 报告页能显示润色答案和成长反馈

如果第 1 到 3 步正常，但第 4 步失败，最常见原因通常是：

- OpenAI API Key 填错了
- Render 还没部署完成
- 免费服务刚启动，第一次响应会慢一点

---

## 你最需要小心的 3 件事

1. 不要把真实 API Key 写进代码文件
2. API Key 只填在 Render 的环境变量页面
3. 如果你后面更换 Key，只改 Render，不用重新改代码

---

## 题库更新怎么用

你现在这版已经有题库文件和更新脚本：

- [backend/data/question-bank.json](/Users/six/Documents/Codex/2026-05-21/files-mentioned-by-the-user-3e0f0b5c36ce1d37dee42a600895b76d/backend/data/question-bank.json)
- [backend/scripts/sync-question-bank.js](/Users/six/Documents/Codex/2026-05-21/files-mentioned-by-the-user-3e0f0b5c36ce1d37dee42a600895b76d/backend/scripts/sync-question-bank.js)

现阶段你先不用管自动化。

最简单的做法是：

1. 以后我帮你更新题库内容
2. 你把更新后的代码再传到 GitHub
3. Render 重新部署

这对小白来说最稳。

---

## 如果你卡住了，最有可能卡在哪

通常只会卡在这两个地方：

1. GitHub 仓库怎么上传
2. Render 环境变量怎么填

如果你卡在任意一步，不用自己猜，直接把你看到的页面发给我，我会按页面一步一步告诉你点哪里。
