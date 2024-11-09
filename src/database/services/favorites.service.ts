import {
  BadRequestException,
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { Album, Artist, Track } from 'src/types/types';
import { ArtistDatabaseService } from './artist.service';
import { TrackDatabaseService } from './track.service';
import { AlbumDatabaseService } from './album.service';
import { isUUID } from 'class-validator';

@Injectable()
export class FavoritesDatabaseService {
  private favoriteTracks: Track[] = [];
  private favoriteAlbums: Album[] = [];
  private favoriteArtists: Artist[] = [];

  constructor(
    @Inject(forwardRef(() => ArtistDatabaseService))
    public readonly artistDatabaseService: ArtistDatabaseService,

    @Inject(forwardRef(() => TrackDatabaseService))
    public readonly trackDatabaseService: TrackDatabaseService,

    @Inject(forwardRef(() => AlbumDatabaseService))
    public readonly albumDatabaseService: AlbumDatabaseService,
  ) {}

  getAllFavorites() {
    return {
      artists: this.favoriteArtists,
      albums: this.favoriteAlbums,
      tracks: this.favoriteTracks,
    };
  }

  addArtist(id: string) {
    if (!isUUID(id)) {
      throw new BadRequestException(
        'Bad request. artistId is invalid (not uuid)',
      );
    }
    const artist = this.artistDatabaseService.findOne(id);
    if (!artist) {
      throw new UnprocessableEntityException('Artist not found');
    }

    if (!this.favoriteArtists.includes(artist)) {
      this.favoriteArtists.push(artist);
    }
    return artist;
  }

  removeArtist(id: string) {
    this.favoriteArtists = this.favoriteArtists.filter((a) => a.id !== id);
  }

  addAlbum(id: string) {
    if (!isUUID(id)) {
      throw new BadRequestException(
        'Bad request. albumId is invalid (not uuid)',
      );
    }
    const album = this.albumDatabaseService.findOne(id);
    if (!album) {
      throw new UnprocessableEntityException(`Album not found`);
    }

    if (!this.favoriteAlbums.includes(album)) {
      this.favoriteAlbums.push(album);
    }

    return album;
  }

  removeAlbum(id: string) {
    this.favoriteAlbums = this.favoriteAlbums.filter((a) => a.id !== id);
  }

  addTrack(id: string) {
    if (!isUUID(id)) {
      throw new BadRequestException(
        'Bad request. trackId is invalid (not uuid)',
      );
    }
    const track = this.trackDatabaseService.findOne(id);
    if (!track) {
      throw new UnprocessableEntityException('Track not found');
    }

    if (!this.favoriteTracks.includes(track)) {
      this.favoriteTracks.push(track);
    }
    return track;
  }

  removeTrack(id: string) {
    this.favoriteTracks = this.favoriteTracks.filter((t) => t.id !== id);
  }
}
