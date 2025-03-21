import { ApiTags } from '@nestjs/swagger';

import {
    Get,
    Post,
    Body,
    Controller 
} from '@nestjs/common';
import { TagsService } from './tags.service';
import { CreateTagDto } from './dto/create-tag.dto';

@Controller('tags')
@ApiTags('tags')
export class TagsController {
    constructor(private readonly SubjectsService: TagsService) {}

    @Get()
    getTags(){
        return this.SubjectsService.getTags();
    }

    @Post()
    createTag(@Body() dto: CreateTagDto){
        return this.SubjectsService.createTag(dto);
    }

}

