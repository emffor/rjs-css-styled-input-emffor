import {
Container
} from './styles';

export function InputStyled(){
  return (
    <Container>
        <label>
            Name
            <span> * </span>
        </label>
        
        <input type="text" required/>

    </Container>
  );
}