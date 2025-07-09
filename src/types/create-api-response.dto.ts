import { Type } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";

export function createApiResponseListDto<T>(type: Type<T>, name: string = 'CreateApiResponseListDto') {
    class CreateApiResponseListDto {
        @ApiProperty({ type, isArray: true })
        data: T[];
        @ApiProperty()
        meta: any;
    }
    Object.defineProperty(CreateApiResponseListDto, 'name', { value: name });
    return CreateApiResponseListDto;
}

export function createApiResponseDto<T>(type: Type<T>, name: string = 'CreateApiResponseDto') {
    class CreateApiResponseDto {
        @ApiProperty({ type })
        data: T;
        @ApiProperty()
        meta: any;
    }
    Object.defineProperty(CreateApiResponseDto, 'name', { value: name });
    return CreateApiResponseDto;
}