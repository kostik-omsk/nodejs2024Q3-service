import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpCode,
  UsePipes,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import CreateUserDto from './dto/create-user.dto';
import UpdateUserPasswordDto from './dto/update-user.dto';
import { validationPipe } from '../../pipes/validation.pipe';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import ResponseUserDto from './dto/respons-user.dto';
@ApiTags('Users')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UsersService) {}

  @ApiOperation({ summary: 'Get a list of all users' })
  @ApiResponse({
    status: 200,
    description: 'List of all users',
    type: [ResponseUserDto],
    example: [
      {
        id: '123e4567-e89b-12d3-a456-426614174000',
        login: 'Vasia',
        version: 1,
        createdAt: 1672531199000,
        updatedAt: 1672531299000,
      },
    ],
  })
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a user by ID' })
  @ApiParam({
    name: 'id',
    description: 'UUID user',
    format: 'uuid',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @ApiResponse({
    status: 200,
    description: 'The user has been found',
    type: ResponseUserDto,
    example: {
      id: '123e4567-e89b-12d3-a456-426614174000',
      login: 'Vasia',
      version: 1,
      createdAt: 1672531199000,
      updatedAt: 1672531299000,
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Validation Error',
  })
  @ApiResponse({
    status: 404,
    description: 'The user was not found',
  })
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new user' })
  @ApiBody({ type: CreateUserDto })
  @ApiResponse({
    status: 201,
    description: 'The user has been successfully created',
    type: ResponseUserDto,
    example: {
      id: '123e4567-e89b-12d3-a456-426614174000',
      login: 'Vasia',
      version: 1,
      createdAt: 1672531199000,
      updatedAt: 1672531299000,
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Validation Error',
  })
  @UsePipes(validationPipe)
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Put(':id')
  @ApiOperation({ summary: "Update the user's password" })
  @ApiParam({
    name: 'id',
    description: 'UUID user',
    format: 'uuid',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @ApiBody({ type: UpdateUserPasswordDto })
  @ApiResponse({
    status: 200,
    description: "The user's password has been successfully updated",
    type: ResponseUserDto,
    example: {
      id: '123e4567-e89b-12d3-a456-426614174000',
      login: 'Vasia',
      version: 1,
      createdAt: 1672531199000,
      updatedAt: 1672531299000,
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Validation error',
  })
  @ApiResponse({
    status: 404,
    description: 'The user was not found',
  })
  @UsePipes(validationPipe)
  update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserPasswordDto,
  ) {
    return this.userService.updatePassword(id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a user by ID' })
  @ApiParam({
    name: 'id',
    description: 'UUID user',
    format: 'uuid',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @ApiResponse({
    status: 204,
    description: 'The user has been successfully deleted',
  })
  @ApiResponse({
    status: 404,
    description: 'The user was not found',
  })
  @HttpCode(204)
  remove(@Param('id') id: string) {
    return this.userService.delete(id);
  }
}
