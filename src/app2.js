/*import React from 'react';
import logo from './logo.svg';
import './App.css';


function List({ list, index, removeList }) {
  return (
    <div className="list">
      {list.text}
      <div>
        <button onClick={() => removeList(index)}>x</button>
      </div>
    </div>
  
  );
};


function ListForm({ addList }) {
  const [value, setValue] = React.useState("");

   const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addList(value);
    setValue("");
  };


return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

/// anhajox ListEdit function

// function ListEdit ({editList}) {
//   const [value, setValue] = React.useState("");
//   const onSubmit = e => {
//     e.preventDefault();
//     this.props.editList(this.state.text); 
//     this.setState({ text: ''}); 
//   }

//   const onChange = e =>
//   this.setState({
//     [e.target.name]: e.target.value  
//   }
//   );

//     return (
//       <form onSubmit={this.onSubmit}>
//         <input
//           type="text"
//           name="title"
//           placeholder="Edit Your List"
//           value={this.state.title}
//           onChange={this.onChange}
//         />
//         <button
//           type="submit">
//           Edit
//         </button>
//       </form>
//     )
//   }

//// function App

function App() {
      const [lists, setLists] = React.useState([
        { text: "kangar 1"},
        { text: "kangar 2"},
        { text: "kangar 3" }
      ]);

const addList = text => {
  const newLists = [...lists, { text }];
  setLists(newLists);
};
  
const removeList = index => {
  const newLists = [...lists];
  newLists.splice(index, 1);
  setLists(newLists);
}; 

/// anhajox editList 

// const editList = text => {
//   const newLists = [...lists, {text}]
//   const [Edit, setEdit] = React.useState(false)
//   const handleEdit = () => {
//     setEdit(!edit)
//   }
// };

  // const editTodo = index => {
  //   const Item =  [...todos];
  //     const [edit, setEdit] = React.useState(false);
    
  //     const handleEdit = () => {
  //       setEdit(!edit);
  //     };
  // }

  return (
    <div className="app">
      <div className="list">
        {lists.map((list, index) => (
          <List
            key={index}
            index={index}
            list={list}
            removeList={removeList}
          />
        ))}
        <ListForm addList={addList} />
        <ListEdit editList = {editList}/> 
       </div>
    </div>
  );
}
export default App;*/
