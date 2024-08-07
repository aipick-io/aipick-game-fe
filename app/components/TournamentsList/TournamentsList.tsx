import clsx from 'clsx';
import { Tournament } from '@api/TournamentApi';
import TournamentListCard from './TournamentListCard';
import styles from './TournamentsList.module.scss';

export interface TournamentsListProps {
  className?: string;
  tournaments: Tournament[];
  onViewTournamentDetailsClick: (tournament: Tournament) => void;
}

const TournamentsList = ({ className, tournaments, onViewTournamentDetailsClick }: TournamentsListProps) => {
  return (
    <div className={clsx(styles.tournamentsList, className)}>
      {tournaments.map((tournament) => (
        <TournamentListCard
          key={tournament.id}
          tournament={tournament}
          onViewDetailsClick={onViewTournamentDetailsClick}
        />
      ))}
    </div>
  );
};

export default TournamentsList;
