// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import { connect } from "react-redux";
// import { firestoreConnect } from "react-redux-firebase";

// import { addCounter } from "../advanced/redux/actions/authActions";

// class Home extends Component {
//   _handleClick = e => {
//     e.preventDefault();
//     this.props.addCounter();
//   };

//   render() {
//     console.log(this.props);
//     const {
//       auth: { counter }
//     } = this.props;
//     return (
//       <div>
//         <p>Home</p>
//         <Link to={"/list"}>List </Link>
//         <Link to={"/form"}>Form </Link>
//         <Link to={"/login"}>Login </Link>
//         <Link to={"/event"}>Event </Link>
//         <Link to={"/style"}>Style </Link>
//         <Link to={"/other"}>Other </Link>

//         <p>{counter}</p>
//         <button onClick={this._handleClick}>Add</button>
//         {this.props.events &&
//           this.props.events.map(x => (
//             <div key={x.id}>
//               <p>
//                 {x.title} {x.venue}
//               </p>
//               <Link to={`/event/${x.id}`}>Event </Link>
//             </div>
//           ))}
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => {
//   console.log(state);
//   return {
//     events: state.firestore.ordered.events,
//     auth: state.auth
//   };
// };

// export default connect(
//   mapStateToProps,
//   { addCounter }
// )(firestoreConnect([{ collection: "events" }])(Home));
