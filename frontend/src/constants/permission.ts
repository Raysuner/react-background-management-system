// 角色相关权限
const USER_PERMISSION = {
  ROLE_VIEW: 'role:view',
  ROLE_CREATE: 'role:create',
  ROLE_EDIT: 'role:edit',
  ROLE_DELETE: 'role:delete',
};
// 用户相关权限
const ADMIN_PERMISSION = {
  ...USER_PERMISSION,
  USER_VIEW: 'user:view',
  USER_CREATE: 'user:create',
  USER_EDIT: 'user:edit',
  USER_DELETE: 'user:delete',
};

export const USER = {
  label: '普通用户',
  value: 'user',
  permissionList: Object.values(USER_PERMISSION),
};

export const ADMIN = {
  label: '管理员',
  value: 'admin',
  permissionList: Object.values(ADMIN_PERMISSION),
};
