import { Injectable } from '@nestjs/common';
import { CreateLugarDto } from './dto/create-lugar.dto';
import { UpdateLugarDto } from './dto/update-lugar.dto';

@Injectable()
export class LugaresService {
  create(createLugareDto: CreateLugarDto) {
    return 'This action adds a new lugare';
  }

  findAll() {
    return `This action returns all lugares`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lugare`;
  }

  update(id: number, updateLugareDto: UpdateLugarDto) {
    return `This action updates a #${id} lugare`;
  }

  remove(id: number) {
    return `This action removes a #${id} lugare`;
  }
}
