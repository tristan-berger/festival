

export interface ElArtistProps {
  name:string;
  style:string;
  timetable:string;
  image: string;
}

export default function ElArtist({name,style,timetable,image}: ElArtistProps) { return (

    <div className="el_artist">
      <h2>{name}</h2>
      <h3>{style}</h3>
      <h2>{timetable}</h2>
    </div>

)}
