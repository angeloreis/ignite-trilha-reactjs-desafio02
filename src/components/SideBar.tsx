import {Button} from '../components/Button'
import { genre } from '../services/types'

import '../styles/sidebar.scss';

interface SideBarProps {
  genres: genre[];
  eventClickButton(id: number): void;
  selectedGenreId: number;
}

export function SideBar({genres, eventClickButton, selectedGenreId}: SideBarProps) {
  return (
    <nav className="sidebar">
    <span>Watch<p>Me</p></span>

    <div className="buttons-container">
      {genres.map(genre => (
        <Button
          key={String(genre.id)}
          title={genre.title}
          iconName={genre.name}
          onClick={() => eventClickButton(genre.id)}
          selected={selectedGenreId === genre.id}
        />
      ))}
    </div>
  </nav>
  );
}

