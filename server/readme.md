# Server
## part of series
[Simply Learn Full-Stack React & Node.js (9 Part Series)](https://dev.to/neohed/full-stack-react-nodejs-3-create-the-server-5a83)

## Bash: 
run with `nodejs` without .env  
API_URL="http://localhost" API_PORT=4011 NODE_ENV=production node index.js

## hm virker ikke, ikke korrekt syntaks:
npm run start --url="http://localhost" --port=4011 --env=production
npm run start --API_URL="http://localhost" --API_PORT=4011 --NODE_ENV=production

## CORS
[Configuring CORS](https://github.com/expressjs/cors#configuring-cors)

### COR headers on server
Set in code index.js with API_CORS_URL: https://skakscore.onrender.com
```markdown
  var corsOptions = {
    origin: process.env.API_CORS_URL ,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
```


### environment variables on server
NODE_ENV: production
API_CORS_URL: https://skakscore.onrender.com
API_URL: http://localhost (optional)
API_PORT: 10000 (optional)

