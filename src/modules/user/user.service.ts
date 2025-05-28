import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepo: Repository<User>,
  ) {}

  async create(userData: CreateUserDto) {
    const existingUser = await this.usersRepo.findOne({
      where: { email: userData.email, username: userData.username },
    });

    if (existingUser) {
      throw new NotFoundException('User with this email already exists');
    }

    const user = this.usersRepo.create(userData);
    return this.usersRepo.save(user);
  }

  findAll() {
    return this.usersRepo.find({
      select: ['id', 'username', 'email', 'password'],
      relations: ['tasks'],
    });
  }

  async findOne(id: number) {
    const user = await this.usersRepo.findOne({
      where: { id },
      select: ['id', 'username', 'email', 'password'],
      relations: ['tasks'],
    });

    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    return user;
  }

  async update(id: number, updateData: UpdateUserDto) {
    const existingUser = await this.usersRepo.findOne({
      where: { id },
    });

    if (!existingUser) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    await this.usersRepo.update(id, updateData);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.usersRepo.delete(id);
  }
}
