// 如果要使用@别名导入，需要在tsconfig.json中也配置paths
// import request from '@/utils/request';

import request from '@/utils/request';

export function register(params: { username: string; password: string }) {
  return request.post('/user/create', params);
}

export function login(params: { username: string; password: string }) {
  return request.post('/login', params);
}

export function getCurrentUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        code: 200,
        data: {
          name: 'Tqing',
          avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
          permissionList: ['user:view', 'user:create', 'user:update', 'user:delete'],
        },
        message: 'success',
      });
    }, 500);
  });
}
