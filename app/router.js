'use strict'
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app
  router.get('/', controller.home.index)
  // 角色
  router.post('/api/role', controller.role.add)
  router.delete('/api/role/:id', controller.role.remove)
  router.delete('/api/role', controller.role.removeAll)
  router.put('/api/role/:id', controller.role.update)
  router.get('/api/role/:id', controller.role.fetch)
  router.get('/api/role', controller.role.fetchAll)
  // 用户
  router.post('/api/user', controller.user.add)
  router.get('/api/user/:id', controller.user.fetch)
  router.get('/api/user', app.oAuth2Server.authenticate(), controller.user.fetchAll)
  router.put('/api/user/:id', controller.user.update)

  // oauth
  router.all('/user/token', app.oAuth2Server.token())
  router.get('/oauth', controller.oauth.revoke)
  // app.get('/user/authenticate', app.oAuth2Server.authenticate(), 'user.authenticate')

  // upload
  router.post('/api/upload', controller.upload.add)
  router.delete('/api/upload/:id', controller.upload.remove)
  router.delete('/api/uploads', controller.upload.removeAll)
  router.post('/api/uploads', controller.upload.multiple)
  router.put('/api/upload/:id', controller.upload.update)
  router.get('/api/upload/:id', controller.upload.fetch)
  router.get('/api/upload', controller.upload.fetchAll)
}