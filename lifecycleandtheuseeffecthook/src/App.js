// ex2
import React, { useState, useEffect } from 'react';

const PostsComponent = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPosts(data.slice(0, 10));
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {posts.map(post => (
        <div key={post.id} style={{ flex: '1 0 20%' }}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};



export default PostsComponent;

// ex1
// function App() {
//   const [time, setTime] = useState(new Date());
//   useEffect(() => {
//     const tick = () => {
//       setTime(new Date());
//     };
//     const timerID = setInterval(tick, 1000);
//     return () => {
//       clearInterval(timerID);
//     };
//   }, []); 
//   return (
//     <div>
//       <h2>It is {time.toLocaleTimeString()}.</h2>
//     </div>
//   );
// }

// export default App;

// function App() {
//   const [shouldRemove, setShouldRemove] = useState(false)

//   const clickHandler = () => {
//     setShouldRemove(true)
//   }

//   return (
//     <div>
//       <button onClick={clickHandler}>Remove</button>
//       {shouldRemove ? null : <ClickReminder />}
//     </div>
//   );
// }


// export default App;
// import getColors from './colorsService'

// function App() {
//   const [titleIndex, setTitleIndex] = useState(0)
//   const [titles, setTitles] = useState([])

//   const updateTitle = () => {
//     setTitleIndex(titleIndex + 1);
//   }

//   useEffect(() => {
//     const getData = async function (){
//       let colors = await getColors()
//       setTitles(colors)
//     }
//     getData()
//   }, [])
//   // useEffect(()=>{
//   //   getColors().then((colors)=>{
//   //     setTitles(colors)
//   //   })
//   // }, [])

//   useEffect(() => {
//     setTimeout(updateTitle, 1000)
//   }, [titleIndex])

//   return (
//     <div>
//       <div className="box">{titles[titleIndex]}</div>
//     </div>
//   );
// }