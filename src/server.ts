import 'reflect-metadata';
import '@config/env';
import app from '@/app';
import { PORT } from '@config/env';
import { logger } from './utils/logger';



// listen()이 서버 객체(http.Server)를 반환하도록 app.ts를 살짝 수정
const server = app.listen(PORT, ()=>{
  logger.info(`App is running at http://localhost:${PORT}`)
}); // PORT를 쓰려면 이렇게 전달도 가능

// Graceful Shutdown: 운영환경에서 필수!
if (server && typeof server.close === 'function') {
  ['SIGINT', 'SIGTERM'].forEach((signal) => {
    process.on(signal, () => {
      console.log(`Received ${signal}, closing server...`);
      server.close(() => {
        console.log('HTTP server closed gracefully');
        // 필요하면 DB/Redis 등 외부 자원 해제 코드 추가
        process.exit(0);
      });
    });
  });
}

export default server;
