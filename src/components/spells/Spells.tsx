import React from "react";
import {Table } from 'react-bootstrap';
import {SpellData} from '../../types';

interface SpellsState {
    isLoaded: boolean;
    data: SpellData[];
    error: string;
}

export default class Spells extends React.Component<{}, SpellsState>  {
    constructor(props: {}) {
        super(props);
        this.state = {
          isLoaded: false,
          data: [],
          error : ''
        };
      }

      componentDidMount() {
        fetch("http://localhost:8080/spells")
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
            <div className="spells-Container">
            <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>About</th>
                            </tr>
                        </thead>
                        <tbody>
              {this.state.data.map(spell => {
                return(
                    
                            <tr>
                                <td>{spell.key}</td>
                                <td>{spell.value}</td>
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