import { Injectable } from '@nestjs/common';
import { UpdateArtistDto } from 'src/artist/dto/update-artist.dto';
import { Artist } from 'src/types/types';

@Injectable()
export class ArtistDatabaseService {
  private artists: Artist[] = [];

  findAll() {
    return this.artists;
  }

  findOne(id: string) {
    return this.artists.find((artist) => artist.id === id);
  }

  create(artist: Artist) {
    this.artists.push(artist);
    return artist;
  }

  update(id: string, artist: UpdateArtistDto) {
    const index = this.artists.findIndex((artist) => artist.id === id);
    const updatedArtist = { ...this.artists[index], ...artist };
    this.artists[index] = updatedArtist;
    return artist;
  }

  remove(id: string) {
    this.artists = this.artists.filter((artist) => artist.id !== id);
  }
}
