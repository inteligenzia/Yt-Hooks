import React, { useState } from 'react';

const SearchBar = ({ onTermSubmit }) => {
  const [term, setTerm] = useState('');

  return (
    <div className="search-bar ui segment">
      <form
        onSubmit={(e) => {
          e.preventDefault();

          onTermSubmit(term);
        }}
        className="ui form"
      >
        <div className="field">
          <label>Search Video</label>
          <input
            onChange={(e) => {
              setTerm(e.target.value);
            }}
            type="text"
            value={term}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;

// export class SearchBar extends React.Component {
//   state = { term: "" };

//   render() {
//     return (
//       <div className="search-bar ui segment">
//         <form
//           onSubmit={(e) => {
//             e.preventDefault();

//             this.props.onTermSubmit(this.state.term);
//           }}
//           className="ui form"
//         >
//           <div className="field">
//             <label>Search Video</label>
//             <input
//               onChange={(e) => {
//                 this.setState({ term: e.target.value });
//               }}
//               type="text"
//               value={this.state.term}
//             />
//           </div>
//         </form>
//       </div>
//     );
//   }
// }
