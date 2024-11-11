import { ApiProperty } from '@nestjs/swagger';

class ResponseUserDto {
  @ApiProperty({ format: 'uuid', description: 'Unique user ID' })
  id: string;
  @ApiProperty({ description: "User's login" })
  login: string;
  @ApiProperty({ description: 'version' })
  version: number;
  @ApiProperty({ description: 'Date the record was created' })
  createdAt: number;
  @ApiProperty({ description: 'The date of the last update of the record' })
  updatedAt: number;
}

export default ResponseUserDto;
