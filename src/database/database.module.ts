import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { UserDatabaseService } from './services/user.service';
import { ArtistDatabaseService } from './services/artist.service';
import { TrackDatabaseService } from './services/track.service';
import { AlbumDatabaseService } from './services/album.service';

@Module({
  providers: [
    DatabaseService,
    UserDatabaseService,
    ArtistDatabaseService,
    TrackDatabaseService,
    AlbumDatabaseService,
  ],
  exports: [DatabaseService],
})
export class DataBaseModule {}
