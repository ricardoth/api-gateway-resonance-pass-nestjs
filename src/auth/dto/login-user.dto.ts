import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class LoginUserDto {
    @ApiProperty({ description: 'Nombre de usuario', required: true })
    @IsString()
    user: string;
    @ApiProperty({ description: 'Contraseña', required: true })
    @IsString()
    password: string;
}