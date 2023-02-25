> Use OpenAi Api to make a ChatGPT and use the firebase to save the conversation and auth

## How to use

### get token and keys

1. Create a file named **".env.local"** at the root dir.

```shell
GOOGLE_ID=
GOOGLE_SECRET=
NEXTAUTH_SECRET=ThisIsASuperSecretAuth
OPENAI_API_KEY=
FIREBASE_SERVICE_ACCOUNT_KEY=
```

you should follow the step to get your key

1. Firstly, you should have an OpenAi account, and get your token.(This is the **OPENAI_API_KEY**)

![image.png](https://obsidian-picgo-le.oss-cn-hangzhou.aliyuncs.com/img/20230225064458.png)

![image.png](https://obsidian-picgo-le.oss-cn-hangzhou.aliyuncs.com/img/20230225064547.png)

2. secondly, use google for auth
   1. use [Firebase](https://console.firebase.google.com) to create a project
   2. move to the **Authentication** part
   3. select Google and save
   4. get the **GOOGLE_ID** and **GOOGLE_SECRET**

![image.png](https://obsidian-picgo-le.oss-cn-hangzhou.aliyuncs.com/img/20230225070034.png)

![image.png](https://obsidian-picgo-le.oss-cn-hangzhou.aliyuncs.com/img/20230225070106.png)

![image.png](https://obsidian-picgo-le.oss-cn-hangzhou.aliyuncs.com/img/20230225070234.png)

![image.png](https://obsidian-picgo-le.oss-cn-hangzhou.aliyuncs.com/img/20230225070411.png)

3. thirdly, get your FIREBASE_SERVICE_ACCOUNT_KEY

![image.png](https://obsidian-picgo-le.oss-cn-hangzhou.aliyuncs.com/img/20230225070613.png)

![image.png](https://obsidian-picgo-le.oss-cn-hangzhou.aliyuncs.com/img/20230225071318.png)

download your secret key file and open it, then copy them, open this website [textfixer](https://www.textfixer.com/tools/remove-line-breaks.php) and remove line breaks

![image.png](https://obsidian-picgo-le.oss-cn-hangzhou.aliyuncs.com/img/20230225071638.png)

then get the new text and that is **FIREBASE_SERVICE_ACCOUNT_KEY**

### Change firebaseConfig

![image.png](https://obsidian-picgo-le.oss-cn-hangzhou.aliyuncs.com/img/20230225072021.png)

![image.png](https://obsidian-picgo-le.oss-cn-hangzhou.aliyuncs.com/img/20230225072037.png)

then create one

![image.png](https://obsidian-picgo-le.oss-cn-hangzhou.aliyuncs.com/img/20230225072247.png)

copy these code to replace **"firebase.ts"** file

### Create Firestore Database

![image.png](https://obsidian-picgo-le.oss-cn-hangzhou.aliyuncs.com/img/20230225072554.png)

### Start Project

```shell
npm install

npm run dev
```
