import ElArtist, { type ElArtistProps } from "../elements/artist"


interface ListArtist {
  artists : ElArtistProps[];
}

/*-----------------< List of artists by day>-----------------*/
const list_artists_day_1: ElArtistProps[] = [
  { name: 'Air', style: 'French Touch / Indietronica', timetable: '18:30 - 19:30', image: 'none' },
  { name: 'Phoenix', style: 'Indie Rock / Synth-pop', timetable: '20:00 - 21:15', image: 'none' },
  { name: 'Stromae', style: 'Electro Pop / Chanson', timetable: '21:45 - 23:00', image: 'none' },
  { name: 'Justice', style: 'Electro Rock', timetable: '23:30 - 00:45', image: 'none' },
  { name: 'Daft Punk', style: 'French Touch / Electro', timetable: '01:15 - 02:45', image: 'none' },
  { name: 'Kavinsky', style: 'Synthwave', timetable: '03:00 - 04:00', image: 'none' },
];

const list_artists_day_2: ElArtistProps[] = [
  { name: 'Petit Biscuit', style: 'Chill Synth-pop', timetable: '18:00 - 19:00', image: 'none' },
  { name: 'Polo & Pan', style: 'Tropical House / Electro', timetable: '19:30 - 20:45', image: 'none' },
  { name: 'Angèle', style: 'Pop / Chanson', timetable: '21:15 - 22:30', image: 'none' },
  { name: 'Orelsan', style: 'Rap / Pop', timetable: '23:00 - 00:15', image: 'none' },
  { name: 'The Blaze', style: 'Ambient House / Electro', timetable: '00:45 - 02:00', image: 'none' },
  { name: 'David Guetta', style: 'EDM / Dance', timetable: '02:15 - 03:45', image: 'none' },
];

const list_artists_day_3: ElArtistProps[] = [
  { name: 'L\'Impératrice', style: 'Nu-Disco / Pop', timetable: '18:30 - 19:30', image: 'none' },
  { name: 'Bon Entendeur', style: 'Electro / Disco', timetable: '20:00 - 21:15', image: 'none' },
  { name: 'Fakear', style: 'Electro Chill', timetable: '21:45 - 22:45', image: 'none' },
  { name: 'M83', style: 'Synth-pop / Shoegaze', timetable: '23:15 - 00:30', image: 'none' },
  { name: 'Gesaffelstein', style: 'Dark Techno / Industrial', timetable: '01:00 - 02:15', image: 'none' },
  { name: 'Kungs', style: 'Deep House / Party Electro', timetable: '02:30 - 03:45', image: 'none' },
];

function PageProgramme() { return (


    <div id='page_programme' className="page">
      {/* Day 1 */}
      <div className="line">
        {list_artists_day_1.map((artist) => (
          <ElArtist name = {artist.name} style={artist.style} timetable={artist.timetable} image={artist.image}/>
        ))}
      </div>
      {/* Day 2 */}
      <div className="line">
        {list_artists_day_2.map((artist) => (
          <ElArtist name = {artist.name} style={artist.style} timetable={artist.timetable} image={artist.image}/>
        ))}
      </div>
      {/* Day 3 */}
      <div className="line">
        {list_artists_day_3.map((artist) => (
          <ElArtist name = {artist.name} style={artist.style} timetable={artist.timetable} image={artist.image}/>
        ))}
      </div>
    </div>

)}

export default PageProgramme