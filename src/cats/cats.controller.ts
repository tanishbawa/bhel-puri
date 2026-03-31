import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { LoggingInterceptor } from 'src/interceptors/logging.interceptor';

@UseInterceptors(LoggingInterceptor)
@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  findAll(): Promise<Cat[]> {
    return new Promise((resolve) => resolve(this.catsService.findAll()));
  }

  //   @Get()
  //   findAll(): any {
  //     return { message: 'This action returns all cats' };
  //   }

  //   @Get()
  //   findAll(@Query('age') age: number, @Query('breed') breed: string) {
  //     return `This action returns all cats filtered by age: ${age} and breed: ${breed}`;
  //   }

  //   @Get()
  //   findAll(@Res() res: Response) {
  //     res.status(HttpStatus.OK).json([]);
  //   }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns a #${id} cat`;
  }

  @Post()
  createCat(@Body() createCatDto: CreateCatDto) {
    console.log(createCatDto);
    return 'This action adds a new cat';
  }

  //   @Post()
  //   create(): string {
  //     return 'This action creates a cat';
  //   }

  //   @Post()
  //   create(@Res() res: Response) {
  //     res.status(HttpStatus.CREATED).send('This action creates a cat');
  //   }
}
