import React, {useState} from 'react';
import './styles/App.css';
import P0stList from "./components/P0stList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";


function App() {// eslint-disable-next-line
    const [posts, setPosts] = useState([
        {id: 1, title:"javascript", body: "Description"},
        {id: 2, title:"javascript", body: "Description"},
        {id: 3, title:"javascript", body: "Description"},
        {id: 4, title:"javascript", body: "Description"},
        {id: 5, title:"javascript", body: "Description"},
    ]);

    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (e) => {
        e.preventDefault();
        setPosts([...posts, {...post, id: Date.now()}]) ;
        setPost ({title: '', body: ''})
    }

	return (
    <div className="App">
        <form>
            <MyInput value={post.title}
                     onChange={e => setPost({...post, title: e.target.value})}
                     type="text"
                     placeholder="Название поста"/>
            <MyInput value={post.body}
                    onChange={e => setPost({...post, body: e.target.value})}
                    type="text"
                    placeholder="Описание поста"/>
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
        <P0stList posts={posts} title="Посты про js"/>
    </div>
  );
}

export default App;
