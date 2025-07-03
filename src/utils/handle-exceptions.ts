import { BadRequestException, InternalServerErrorException, NotFoundException } from "@nestjs/common";

export const handleExceptions = (error: any) => {
    if(error.status == 400) throw new BadRequestException(`${error}`);
    if(error.status == 404) throw new NotFoundException(`${error}`);
    throw new InternalServerErrorException(`${error}`);
}