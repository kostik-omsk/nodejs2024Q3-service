import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UpdateAlbumDto } from 'src/album/dto/update-album.dto';
import { Album } from 'src/types/types';
import { TrackDatabaseService } from './track.service';

@Injectable()
export class AlbumDatabaseService {
  private albums: Album[] = [];

  constructor(
    @Inject(forwardRef(() => TrackDatabaseService))
    public readonly trackDatabaseService: TrackDatabaseService,
  ) {}

  findAll(): Album[] {
    return this.albums;
  }

  create(album: Album) {
    this.albums.push(album);
    return album;
  }

  findOne(id: string) {
    return this.albums.find((album) => album.id === id);
  }

  update(id: string, album: UpdateAlbumDto) {
    const index = this.albums.findIndex((album) => album.id === id);
    const updatedAlbum = { ...this.albums[index], ...album };
    this.albums[index] = updatedAlbum;
    return album;
  }

  remove(id: string) {
    this.albums = this.albums.filter((album) => album.id !== id);
    const tracks = this.trackDatabaseService.findAll();
    tracks.forEach((track) => {
      if (track.albumId === id) {
        this.trackDatabaseService.update(track.id, { albumId: null });
      }
    });
  }
}
