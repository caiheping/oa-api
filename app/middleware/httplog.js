'use strict';


module.exports = () => {
  return async (ctx, next) => {
    if (ctx.method.toLowerCase() !== 'get' && ctx.state.user) {
      const query = {
        method: ctx.request.method,
        url: ctx.request.url,
        ip: ctx.request.ip,
        data: JSON.stringify(ctx.request.body),
      };
      console.log(query);
      query.createdAt = new Date();
      query.createdBy = ctx.state.user.userName;
      await ctx.model.Logs.create(query);
    }
    await next();
  };
};
