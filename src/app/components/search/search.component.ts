import { Component } from '@angular/core'
import { SpotifyService } from '../../service/spotify.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  artists = [];

  loading!: boolean

  constructor(private spotify: SpotifyService) {}
  search(term: string): void {
    this.loading = true
    this.spotify.getArtists(term).subscribe((data) => {
      this.artists = data
      this.loading = false
    })
  }
}
