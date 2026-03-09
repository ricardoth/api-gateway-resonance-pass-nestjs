import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private config: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: config.get<string>('JWT_SECRET')!,
      issuer: config.get<string>('JWT_ISSUER')!,
      audience: config.get<string>('JWT_AUDIENCE')!,
    });
  }

  async validate(payload: any) {
    if (!payload) throw new UnauthorizedException();
    return payload;
  }
}