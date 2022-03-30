import { FaGithub } from 'react-icons/fa';
import { InputStyled } from '../InputStyled';
import {
Container
} from './styles';

export function Box(){
  return (
    <Container>
        <InputStyled />

        <h3>Input style with Styled Components</h3>
        <p>used in ReactJS, CSS and TypeScript.</p>
        <p className="icon"><FaGithub/></p>
    </Container>
  );
}