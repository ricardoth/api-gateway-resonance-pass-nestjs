import { Injectable } from '@nestjs/common';

@Injectable()
export class EventosService {
  

  findAll() {
    return `This action returns all eventos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} evento`;
  }

 

  remove(id: number) {
    return `This action removes a #${id} evento`;
  }
}
