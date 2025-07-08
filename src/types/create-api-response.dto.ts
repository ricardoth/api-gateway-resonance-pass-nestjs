import { Type } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";

export function createApiResponseListDto<T>(type: Type<T>) {
    class CreateApiResponseListDto {
        @ApiProperty({ type, isArray: true })
        data: T[];
        @ApiProperty()
        meta: any;
    }

    return CreateApiResponseListDto;
}

export function createApiResponseDto<T>(type: Type<T>) {
    class CreateApiResponseDto {
        @ApiProperty({ type })
        data: T;
        @ApiProperty()
        meta: any;
    }

    return CreateApiResponseDto;
}