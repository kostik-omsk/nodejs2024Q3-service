import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UserDatabaseService } from './services/user.service';
import { ArtistDatabaseService } from './services/artist.service';

@Injectable()
export class DatabaseService {
  constructor(
    @Inject(forwardRef(() => UserDatabaseService))
    public readonly usersDatabaseService: UserDatabaseService,

    @Inject(forwardRef(() => ArtistDatabaseService))
    public readonly artistDatabaseService: ArtistDatabaseService,
  ) {}
}