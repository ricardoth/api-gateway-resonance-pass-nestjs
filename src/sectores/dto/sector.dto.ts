import { Expose } from 'class-transformer';
import { BaseDto } from 'src/types/base.dto';

export class SectorDto extends BaseDto {
  @Expose()
  idSector: number;

  @Expose()
  idEvento: number;

  @Expose()
  nombreSector: string;

  @Expose()
  capacidadDisponible: number;

  @Expose()
  capacidadActual: number;

  @Expose()
  capacidadTotal: number;

  @Expose()
  precio: number;

  @Expose()
  cargo: number;

  @Expose()
  total: number;

  @Expose()
  colorHexa: string;
}
