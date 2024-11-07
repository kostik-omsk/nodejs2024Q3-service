import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { UserDatabaseService } from './services/user.service';
import { ArtistDatabaseService } from './services/artist.service';

@Module({
  providers: [DatabaseService, UserDatabaseService, ArtistDatabaseService],
  exports: [DatabaseService, UserDatabaseService, ArtistDatabaseService],
})
export class DataBaseModule {}
