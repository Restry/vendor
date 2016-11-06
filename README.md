# **vendor** site ( wechat,game,apple store)

## 项目表结构
- **Needs**(外包数据)
  - title
  - category (wechat,game,appleStore)
  - notes
  - process
  - states
  - vendor        (供应商，正在开发的人)
  - order
  - creator 
  - created
  - modifed
  - completeTime
  - acceptTime
  - 


- **Users**(用户数据)
  `
  "email": {type: String, required: true, unique: true },
  "password": {type: String, required: true, select: false },
	"admin": Boolean,
  "prefix":String,
  "acceptCount":Number,
  "needsCount":Number,
  "nickname":String,
  "residence":Array,
  "phone":String,
  "captcha":String,
  "agreement":Boolean
  `

## 项目包含及支持以下功能

- mongodb
- JWT 身份认证
- docker hot reload
- debug source map
- build html
- in control webpack config
- with pulgins
