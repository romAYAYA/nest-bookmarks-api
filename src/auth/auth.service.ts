import { Injectable } from '@nestjs/common'

@Injectable({})
export class AuthService {
  signup() {
    return { msg: 'I signed up' }
  }

  signin() {
    return { msg: 'I signed in' }
  }
}
