import { Injectable } from '@nestjs/common';
import { UpdateTrackDto } from 'src/track/dto/update-track.dto';
import { Track } from 'src/types/types';

@Injectable()
export class TrackDatabaseService {
  private tracks: Track[] = [];

  findAll(): Track[] {
    return this.tracks;
  }

  create(track: Track) {
    this.tracks.push(track);
    return track;
  }

  findOne(id: string) {
    return this.tracks.find((track) => track.id === id);
  }

  update(id: string, track: UpdateTrackDto) {
    const index = this.tracks.findIndex((t) => t.id === id);
    const updatedTrack = { ...this.tracks[index], ...track };
    this.tracks[index] = updatedTrack;
    return track;
  }

  remove(id: string) {
    this.tracks = this.tracks.filter((track) => track.id !== id);
  }
}
