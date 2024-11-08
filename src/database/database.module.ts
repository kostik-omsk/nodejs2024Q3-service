import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { UserDatabaseService } from './services/user.service';
import { ArtistDatabaseService } from './services/artist.service';
import { TrackDatabaseService } from './services/track.service';

@Module({
  providers: [
    DatabaseService,
    UserDatabaseService,
    ArtistDatabaseService,
    TrackDatabaseService,
  ],
  exports: [DatabaseService],
})
export class DataBaseModule {}
