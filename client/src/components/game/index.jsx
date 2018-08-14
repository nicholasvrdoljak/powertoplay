import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {game: ''}
        this.updatePage = this.updatePage.bind(this);
    }

    componentWillMount() {
        console.log('****willmount******', this.props.match.params.gameTitle);
        this.updatePage({game: this.props.match.params.gameTitle});
        // this.setState({game: this.props.match.params.gameTitle});

    }

    componentWillReceiveProps(nextProps) {
        console.log('*****willreceive*****', nextProps.match.params.gameTitle);
        this.updatePage({game: nextProps.match.params.gameTitle});
        // this.setState({game: nextProps.match.params.gameTitle});

    }

    updatePage({game}) {
        console.log(game);
        // use a loading thing
        // query for the game
        axios.get(`/gameQuery/${game}`).then((response) => {
            console.log('***', response)
        // check to see that this game has data in the db
        // if so, then update the state
        this.setState({game: game});
        // if not, then redirect to a page that says we haven't found any info on that game.

        }).catch((err) => {
            console.log(err);
        });
    }

    render() {
        return (
            <div>
                <p>{this.state.game}</p>
            </div>
        )
    }
}