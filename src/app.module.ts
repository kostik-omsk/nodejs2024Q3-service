import { Module } from '@nestjs/common';
import { DataBaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { ArtistModule } from './artist/artist.module';

@Module({
  imports: [DataBaseModule, UserModule, ArtistModule],
})
export class AppModule {}
