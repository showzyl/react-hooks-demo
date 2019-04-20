import React, {
  useEffect,
  useState,
} from 'react';
import './App.css';



let uid = 0;
const App = () => {

  const [text, setText] = useState('');
  const [todos, setTodo] = useState([]);

  const onChangeTxt = (e) => {
    setText(e.target.value.trim());
  }

  const onSubmitTxt = (e) => {
    let text = e.target.value.trim();
    if(!text) return;
    if (e.which === 13 && text) {
      setTodo([
        ...todos, {
          text,
          isChecked: false,
          uid: uid++
        }
      ])
      setText('')
    }
  }

  const onClickChecked = (e, todo) => {
    let res = todos.map(item => {
      if(item.uid === todo.uid) item.isChecked = !todo.isChecked;
      return item;
    })
    setTodo(res);
  }

  const onDelete = (e, todo) => {
    console.log(`todo: `, todo)
    let resArr = todos.filter(item => item.uid !== todo.uid);
    // console.log(`todos: `, todos);
    setTodo(resArr);
  }

  // 初始化执行
  useEffect(() => {

  }, [])

  console.log(`======================================================`);

  console.log(`todos: `, todos)
  return <div className={`App`}>

    <header className="header">
      <h1>TodoMVC</h1>
      <input type="text"
             value={text}
             className="new-todo"
             placeholder={`please input value...`}
             onKeyUp={(e) => onSubmitTxt(e)}
             onChange={(e) => onChangeTxt(e)}/>
    </header>

    <section className="main">
      <span>
        <input className="toggle-all" type="checkbox" readOnly="" />
        <label />
      </span>

      <ul className={`todo-list`}>
        {
          todos && todos.map(todo => {
            console.log(`todo.isChecked: `, todo.isChecked)
            return <li key={todo.uid}
                       className={todo.isChecked ? 'completed' : ''}
                       att-key={todo.uid}>
              <input type="checkbox" className={`toggle`}
                     onChange={(e) => onClickChecked(e, todo)}/>
              <label>
                {todo.text}
              </label>
              <button className={`destroy`} onClick={(e) => onDelete(e, todo)} />
            </li>
          })
        }
      </ul>
    </section>
  </div>

}


export default App;
