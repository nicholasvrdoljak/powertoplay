import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '', 
            id: [], 
            platform: [], 
            image: ''
        }
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
        this.setState({
            name: '', 
            id: [], 
            platform: [], 
            image: ''
        })
        // use a loading thing
        // query for the game
        axios.get(`/gameQuery/${game}`).then((response) => {
            console.log(response);
            for(let game of response.data) {
                this.setState({name: game.name, id: [...this.state.id, game.id], platform: [...this.state.platform, game.platform], image: game.image}, console.log('***',this.state))
            }
            // check to see that this game has data in the db
            // if so, then update the state
            // if not, then redirect to a page that says we haven't found any info on that game.
            console.log(this.state);
        }).catch((err) => {
            console.log(err);
        });
    }

    render() {
        return (
            <div className='gameContent'>
                <div className='gameImage'><img src={this.state.image}/></div>

                <div className='gameDetails'>
                    Platforms: <p>{this.state.platform.map((item) => {return `${item} `})}</p>
                    Description: <p>This is a description of the game</p>
                </div>

                <div className='gameTimes'><p>HIHI HIHIHIH asd;laksdf;lakjs \n<br/>
                 kl;a jl;kasj df;lajks d;lgkj n\ \n <br/>
                as;ldkgj dslfkjghsd lfkgjhs oihe origuhwo ieuhfgds oifh 
                osidfjhgos dijfh IHIHIH IHIHIHI
                </p>
                </div>
            </div>
        )
    }
}