import { Song } from '../../App';
import forwardImg from '../../assets/forward.svg';
import playImg from '../../assets/play.svg';
import rollbackImg from '../../assets/rollback.svg';
import IconButton from '../button/IconButton';
import { Container, Content, Player, WhatsPlaying } from './styles';

interface MusicPlayerProps {
  song: Song;
}

const MusicPlayer = ({ song }: MusicPlayerProps) => {
  return (
    <Container>
      <Content>
        <WhatsPlaying>
          <img src={song.albumCover} />
          <div>
            <h2>{song.title}</h2>
            <h3>{song.artist}</h3>
          </div>
        </WhatsPlaying>
        <Player>
          <IconButton icon={rollbackImg} action={() => {}} />
          <IconButton icon={playImg} action={() => {}} />
          <IconButton icon={forwardImg} action={() => {}} />
        </Player>
      </Content>
    </Container>
  );
};

export default MusicPlayer;
