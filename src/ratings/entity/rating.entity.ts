import { ApiHideProperty } from '@nestjs/swagger';

import {
    Column,
    ManyToOne,
    Entity,
    PrimaryGeneratedColumn
} from 'typeorm';

import { TestsEntity } from 'src/tests/entity/test.entity';
import { User } from 'src/user/entities/user.entity';

@Entity('rating')
export class RatingEntity {
    
    @ApiHideProperty()
    @PrimaryGeneratedColumn()
    id: number;
    
    @ManyToOne(() => User, (user) => user.id)
    @Column()
    user: number

    @ManyToOne(() => TestsEntity, (test) => test.id)
    @Column()
    test: number

    @Column()
    rating: number

    @Column()
    comment: string
}