import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Person } from './entities/person.entity';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';

@Injectable()

export class PersonService {
  constructor(
    @InjectRepository(Person)
    private readonly personRepository: Repository<Person>
  ) { }
  findAll() {
    return this.personRepository.find();
  }

  findOne(id: number) {
    return this.personRepository.findOne({ where: { id } });
  }

  create(createpersonDto: CreatePersonDto) {
    const newperson = this.personRepository.create(createpersonDto);
    return this.personRepository.save(newperson);
  }

  async update(id: number, updatepersonDto: UpdatePersonDto) {
    await this.personRepository.update(id, updatepersonDto);
    return this.personRepository.findOne({ where: { id } });
  }

  async remove(id: number) {
    const person = await this.findOne(id);
    if (!person) return null;
    return this.personRepository.remove(person);
  }
}
