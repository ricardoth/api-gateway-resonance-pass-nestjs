import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsOptional, IsString } from "class-validator";

export class UsuarioQueryFilterDto {
  @ApiProperty({ description: 'Número de resultados por página' })
  @IsInt()
  pageSize: number;
  @ApiProperty({ description: 'Número de página' })
  @IsInt()
  pageNumber: number;
  @ApiProperty({ description: 'Consulta de búsqueda', required: false })
  @IsString()
  @IsOptional()
  query?: string;
} 