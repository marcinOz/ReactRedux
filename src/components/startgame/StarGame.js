import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import './StarGame.css';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
    fastar: {
        margin: '0.5em',
        fontSize: '24'
    },
    span: {
        display: 'inline-block',
        margin: '0.5em',
        textAlign: 'center',
        backgroundColor: '#ccc',
        width: '24px',
        borderRadius: '50%',
        cursor: 'pointer'
    },
    selected: {
        backgroundColor: '#eee',
        color: '#ddd',
        cursor: 'not-allowed'
    },
    used: {
        backgroundColor: '#aaddaa',
        color: '#99bb99',
        cursor: 'not-allowed'
    }
});

let possibleCombinationSum = function(arr, n) {
    if (arr.indexOf(n) >= 0) { return true; }
    if (arr[0] > n) { return false; }
    if (arr[arr.length - 1] > n) {
      arr.pop();
      return possibleCombinationSum(arr, n);
    }
    let listSize = arr.length, combinationsCount = (1 << listSize);
    for (let i = 1; i < combinationsCount ; i++ ) {
        let combinationSum = 0;
      for (let j=0 ; j < listSize ; j++) {
        if (i & (1 << j)) { combinationSum += arr[j]; }
      }
      if (n === combinationSum) { return true; }
    }
    return false;
};

const Stars = (props) => {
    let stars = [];
    for (let i=0; i<props.numberOfStars; i++) {
        stars.push(<i key={i} className="fa fa-star"></i>);
    }
    return (
        <div className="col-5">
            {stars}
        </div>
    );
};

const Button = (props) => {
    let button;
    switch(props.answerIsCorrect) {
        case true:
            button = <button className="btn btn-success"
                            onClick={props.accpetAnswer}>
                        <i className="fa fa-check"></i>
                    </button>;
            break;
        case false:
            button = <button className="btn btn-danger">
                        <i className="fa fa-times"></i>
                    </button>;
            break;
        default:
            button = <button className="btn" 
                        onClick={props.checkAnswer}
                        disabled={props.selectdNumbers.length === 0}>
                        =
                    </button>;
            break;
    }
    return (
        <div className="col-2 text-center" style={{padding: 5}}>
            {button}
            <br /><br />
            <button className="btn btn-warning btn-sm"
                    disabled={props.redraws === 0}
                    onClick={props.redraw}>
                <i className="fa fa-refresh"></i> {props.redraws}
            </button>
        </div>
    );
};

const Answer = (props) => {
    return (
        <div className="col-5">
            {props.selectdNumbers.map((number, i) => 
                <span key={i} onClick={() => props.unselectNumber(number)}>{number}</span>
            )}
        </div>
    );
};

const Numbers = (props) => {
    const numberClassName = (number) => {
        if (props.usedNumbers.indexOf(number) >= 0) {
            return 'used';
        }
        if (props.selectdNumbers.indexOf(number) >= 0) {
            return 'selected';
        }
    };
    return (
        <div className="card text-center">
            <div>
                {Numbers.list.map((number, i) =>
                    <span key={i} className={numberClassName(number)}
                        onClick={() => props.selectNumber(number)}>
                        {number}
                    </span>
                )}
            </div>
        </div>
    );
};
Numbers.list = [1,2,3,4,5,6,7,8,9];

const DoneFrame = (props) => {
    return (
        <div className="text-center">
            <h2>{props.doneStatus}</h2>
            <button className="btn btn-secondary"
                    onClick={props.resetGame}>
                Play Again
            </button>
        </div>
    );
};

class Game extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = Game.initialState();

        this.resetGame = this.resetGame.bind(this);
        this.selectNumber = this.selectNumber.bind(this);
        this.unselectNumber = this.unselectNumber.bind(this);
        this.checkAnswer = this.checkAnswer.bind(this);
        this.accpetAnswer = this.accpetAnswer.bind(this);
        this.redraw = this.redraw.bind(this);
        this.possibleSolutions = this.possibleSolutions.bind(this);
        this.updateDoneStatus = this.updateDoneStatus.bind(this);
    }
    static randomNumber() { return 1 + Math.floor(Math.random()*9); }
    static initialState() {
        return {
            selectdNumbers: [],
            numberOfStars: Game.randomNumber(),
            answerIsCorrect: null,
            usedNumbers: [],
            redraws: 5,
            doneStatus: null
        };
    }
    resetGame() { this.setState(Game.initialState()); }
    selectNumber(clickedNumber) {
        if (this.state.selectdNumbers.indexOf(clickedNumber) >= 0 ||
            this.state.usedNumbers.indexOf(clickedNumber) >= 0) {return;}
        this.setState(prevState => ({
            answerIsCorrect: null,
            selectdNumbers: prevState.selectdNumbers.concat(clickedNumber)
        }));
    }
    unselectNumber(clickedNumber) {
        this.setState(prevState => ({
            answerIsCorrect: null,
            selectdNumbers: prevState.selectdNumbers.filter(number => number !== clickedNumber)
        }));
    }
    checkAnswer() {
        this.setState(prevState => ({
            answerIsCorrect: prevState.numberOfStars ===
                prevState.selectdNumbers.reduce((acc, n) => acc+n, 0)
        }));
    }
    accpetAnswer() {
        this.setState(prevState => ({
            usedNumbers: prevState.usedNumbers.concat(prevState.selectdNumbers),
            selectdNumbers: [],
            answerIsCorrect: null,
            numberOfStars: Game.randomNumber()
        }), this.updateDoneStatus);
    }
    redraw() {
        if (this.state.redraws === 0) {return;}
        this.setState(prevState => ({
            numberOfStars: Game.randomNumber(),
            selectdNumbers: [],
            answerIsCorrect: null,
            redraws: prevState.redraws - 1
        }), this.updateDoneStatus);
    }
    possibleSolutions({numberOfStars, usedNumbers}) {
        const possibleNumbers = Numbers.list.filter(number => 
            usedNumbers.indexOf(number) === -1
        );
        return possibleCombinationSum(possibleNumbers, numberOfStars);
    }
    updateDoneStatus() {
        this.setState(prevState => {
            if (prevState.usedNumbers.length === 9) {
                return { doneStatus: 'Done. Nice!' };
            }
            if (prevState.redraws === 0 && !this.possibleSolutions(prevState)) {
                return { doneStatus: 'Game Over!' };
            }
        });
    }

    render() {
        const { 
            selectdNumbers, 
            numberOfStars, 
            answerIsCorrect,
            usedNumbers,
            redraws,
            doneStatus
        } = this.state;
        const { classes } = this.props;
        return (
          <div className="container">
            <h3>Play Nine</h3>
            <hr />
            <div className="row">
                <Stars numberOfStars={numberOfStars}/>
                <Button selectdNumbers={selectdNumbers}
                        redraws={redraws}
                        checkAnswer={this.checkAnswer}
                        accpetAnswer={this.accpetAnswer}
                        redraw={this.redraw}
                        answerIsCorrect={answerIsCorrect} />
                <Answer selectdNumbers={selectdNumbers} 
                        unselectNumber={this.unselectNumber} />
            </div>
            <br />
            {doneStatus ?
                <DoneFrame doneStatus={doneStatus} 
                    resetGame={this.resetGame}/> :
                <Numbers selectdNumbers={selectdNumbers}
                    selectNumber={this.selectNumber}
                    usedNumbers={usedNumbers} />
            }
          </div>
        );
    }
}

class StarGame extends React.Component {
    render() {
        const props = this.props;
      return (
          <div>
            <Game {...props}/>
          </div>
      );
    }
}

StarGame.propTypes = {
    classes: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
    };
}
export default connect(mapStateToProps)(withStyles(styles)(StarGame));