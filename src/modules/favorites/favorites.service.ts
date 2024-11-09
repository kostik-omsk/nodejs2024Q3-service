import { Injectable } from '@nestjs/common';

import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class FavoritesService {
  constructor(private readonly db: DatabaseService) {}

  getAllFavorites() {
    return this.db.favoritesDatabaseService.getAllFavorites();
  }

  addArtist(id: string) {
    return this.db.favoritesDatabaseService.addArtist(id);
  }

  removeArtist(id: string) {
    return this.db.favoritesDatabaseService.removeArtist(id);
  }

  addAlbums(id: string) {
    return this.db.favoritesDatabaseService.addAlbum(id);
  }

  removeAlbums(id: string) {
    return this.db.favoritesDatabaseService.removeAlbum(id);
  }

  addTracks(id: string) {
    return this.db.favoritesDatabaseService.addTrack(id);
  }

  removeTracks(id: string) {
    return this.db.favoritesDatabaseService.removeTrack(id);
  }
}
