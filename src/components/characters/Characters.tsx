import React from "react";
import {Card, Button } from 'react-bootstrap';
import {CharactersData} from '../../types';
import './character.css'

interface CharactersState {
    isLoaded: boolean;
    data: CharactersData[];
    error: string;
}

export default class Characters extends React.Component<{}, CharactersState>  {
    constructor(props: {}) {
        super(props);
        this.state = {
          isLoaded: false,
          data: [],
          error : ''
        };
      }

      componentDidMount() {
        fetch("http://localhost:8080/characters")
          .then((res) => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                data: result,
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error,
              });
            }
          );
      }

    render() {
        return (
            <>
            <div className="character-Container">
              {this.state.data.map(character => {
                return(
                    <Card>
                            <Card.Img variant="top" src={character.image} />
                            <Card.Body>
                            <Card.Title>{character.name}</Card.Title>
                            <Card.Text>Birthday: {character.dateOfBirth}</Card.Text>
                            <Button variant="primary">More Info</Button>
                        </Card.Body>
                    </Card>
                )
            })}
            </div>
            </>
        )
    }
}