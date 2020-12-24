import React from "react";
import {Table } from 'react-bootstrap';
import {PotionsData} from '../../types';
import './Potions.css'

interface PotionsState {
    isLoaded: boolean;
    data: PotionsData[];
    error: string;
}


export default class Potions extends React.Component<{}, PotionsState>  {
    constructor(props: {}) {
        super(props);
        this.state = {
          isLoaded: false,
          data: [],
          error : ''
        };
      }

      componentDidMount() {
        fetch("http://localhost:8080/potions")
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
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Characteristics</th>
                                <th>Ingredients</th>
                                <th>Difficulty Level</th>
                                <th>Effect</th>
                            </tr>
                        </thead>
                        <tbody>
              {this.state.data.map(potion => {
                return(
                    
                            <tr>
                                <td>{potion.Name}</td>
                                <td>{potion.Characteristics}</td>
                                <td>{potion.Ingredients}</td>
                                <td>{potion.DifficultyLevel}</td>
                                <td>{potion.Effect}</td>
                            </tr>
                
                )
                })}
                </tbody>
                </Table>
                </div>
            </>
        )
    }
}