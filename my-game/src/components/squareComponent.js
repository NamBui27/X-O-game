import React from 'react';
// class SquareComponent extends React.Component {
//     // constructor(props) {
//     //     super(props);
//     //     this.state = {
//     //         value: null,
//     //     }

//     // }

//     render() {
//         return (
//             <button 
//                 className="square"
//                 onClick={() => this.props.onClick()}
//             >
//                 {this.props.value}
//             </button>
//         );
//     }
// }

function SquareComponent(props) {
    return (
        <button
            className="square"
            onClick={props.onClick}
        >
            {props.value}
        </button>
    )
}

export default SquareComponent;