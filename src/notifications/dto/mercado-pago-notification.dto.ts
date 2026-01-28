import { ApiProperty } from "@nestjs/swagger";
import { NotificationDataDto } from "./notification-data.dto";
import { IsBoolean, IsNumber, IsPositive, IsString } from "class-validator";

export class MercadoPagoNotificationDto {
    @ApiProperty({ example: "Id" })
    @IsNumber()
    @IsPositive()
    id: number;
    @ApiProperty({ example: "LiveMode" })
    @IsBoolean()
    liveMode: boolean;
    @ApiProperty({ example: "Type" })
    @IsString()
    type: string;
    @ApiProperty({ example: "Date Created" })
    @IsString()
    dateCreated: Date;
    @ApiProperty({ example: "User Id" })
    @IsString()
    userId: string;
    @ApiProperty({ example: "Action" })
    @IsString()
    action: string;
    @ApiProperty({ example: "Notification Data" })
    data: NotificationDataDto;
}

