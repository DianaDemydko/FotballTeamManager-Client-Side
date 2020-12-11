
import React from 'react';
import './index.css';
import Badge from 'react-bootstrap/Badge';

function PlayersGridRow({player}){
    return(
        <tr>
            <td>{player.id}</td>
            <td>{player.name} {player.surname}</td>
            <td>{player.role.name}</td>
            <td>{player.tShirtSize ? <Badge variant="success" pill>{player.tShirtSize}</Badge> : <Badge variant="secondary" pill>Not Selected</Badge>}</td>
        </tr>
    );
}

export default PlayersGridRow;