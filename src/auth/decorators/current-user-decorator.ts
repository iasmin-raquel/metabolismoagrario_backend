import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from '@/types/index';

export const CurrentUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user as User
  },
);