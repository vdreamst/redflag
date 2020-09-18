import { createParamDecorator, Req } from '@nestjs/common';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const CurrentUser = createParamDecorator((data,req) => {
  return req.user
  // return input.user;
});
