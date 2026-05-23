# 微信小程序版说明

这个目录现在包含两部分：

- `miniprogram/`：原生微信小程序前端
- `backend/`：评分接口与题库接口

## 你现在得到的能力

- 按你给的截图风格重做了首页、题目页、练习页、反馈页、报告页
- 小程序录音流程已切到 `RecorderManager`
- 评分接口已拆出正式后端入口 `POST /api/evaluate-speaking`
- 评分标准明确按 `8 分以上` 目标做差距分析
- 题库接口 `GET /api/question-bank`
- 题库定时更新脚本 `backend/scripts/sync-question-bank.js`

## 真实评分怎么接

后端已经预留 `OpenAI` 评分适配器：

- 音频先转写
- 再按照 IELTS Speaking 的四个维度评分
- 结果里不仅给分，还会给 `8 分以上` 的差距建议

需要配置环境变量：

- `OPENAI_API_KEY`
- `OPENAI_EVAL_MODEL`
- `OPENAI_REPORT_MODEL`

当前代码默认：

- 转写模型：`gpt-4o-mini-transcribe`
- 报告模型：`gpt-4.1`

说明：

- 这已经是“真实模型评分”的接法，不是前端假打分
- 但真正上线后，如果你要把“发音分”做得更扎实，建议后续再补一层声学特征评分，而不只依赖转写质量

## 题库按时更新怎么做

当前项目已经有：

- 本地题库文件：`backend/data/question-bank.json`
- 更新脚本：`backend/scripts/sync-question-bank.js`

推荐生产方案：

1. 每月固定 1 次自动同步最新题库
2. 同步后进入人工审核
3. 审核通过后写入正式题库
4. 小程序打开首页时拉取最新版本

如果你用云服务器：

- 用系统 `cron` 每天或每周执行 `npm run sync:question-bank`

如果你用云函数：

- 用平台定时触发器每天检查是否有新题

## 小程序接入步骤

1. 在微信开发者工具中打开 `miniprogram/project.config.json`
2. 把 `miniprogram/app.js` 里的 `apiBaseUrl` 改成你的后端域名
3. 在小程序后台配置合法请求域名
4. 部署 `backend/`
5. 配置 `OPENAI_API_KEY`

## 现在还缺的最后一公里

这版已经把结构和关键代码搭好了，但真正上线前你还需要：

1. 准备你自己的服务器域名
2. 配置模型密钥
3. 在微信后台配置域名白名单
4. 决定题库来源是人工维护、后台录入还是自动抓取

## 我建议的下一步

如果你要的是“能真的提交审核并上线”的版本，下一步最值钱的是继续做这三件事：

1. 接入真实 TTS 题目朗读
2. 把题库从 JSON 升级成数据库
3. 把评分报告页补成可直接展示逐句改写和音频回放
