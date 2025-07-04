import { Injectable } from '@nestjs/common';
import { CreateMediosPagoDto } from './dto/create-medios-pago.dto';
import { UpdateMediosPagoDto } from './dto/update-medios-pago.dto';

@Injectable()
export class MediosPagosService {
  create(createMediosPagoDto: CreateMediosPagoDto) {
    return 'This action adds a new mediosPago';
  }

  findAll() {
    return `This action returns all mediosPagos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mediosPago`;
  }

  update(id: number, updateMediosPagoDto: UpdateMediosPagoDto) {
    return `This action updates a #${id} mediosPago`;
  }

  remove(id: number) {
    return `This action removes a #${id} mediosPago`;
  }
}
