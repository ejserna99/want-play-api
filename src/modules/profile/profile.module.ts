import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Follower,
  FollowerSchema,
  Following,
  FollowingSchema,
  Profile,
  ProfileSchema,
} from './schemas';
import { PostsModule } from '@modules/posts';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Profile.name, schema: ProfileSchema },
      { name: Follower.name, schema: FollowerSchema },
      { name: Following.name, schema: FollowingSchema },
    ]),
    PostsModule,
  ],
  controllers: [ProfileController],
  providers: [ProfileService],
  exports: [ProfileService],
})
export class ProfileModule {}
