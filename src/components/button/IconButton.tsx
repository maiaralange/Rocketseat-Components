import { StyledButton } from './styles';

interface ButtonProps {
  icon: string;
  action: () => void;
}

const IconButton = ({ icon, action }: ButtonProps) => {
  return (
    <StyledButton type="button" onClick={action}>
      <img src={icon} />
    </StyledButton>
  );
};

export default IconButton;
