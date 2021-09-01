// JWT 策略

import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: (configService: ConfigService) => configService.get('JWT_CONFIG').secret,
    });
  }
  
  async validate(payload: any) {
    return { 
      id: payload.id,
      mobile: payload.mobile,
      nickname: payload.nickname,
    };
  }
}