import { Module } from '@nestjs/common'
import { SwipeService } from './swipe.service'
import { SwipeResolver } from './swipe.resolver'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Swipe } from './entities/swipe.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Swipe])],
  providers: [SwipeResolver, SwipeService],
})
export class SwipeModule {}
