import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function MyTopicsPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  // history = useHistory();
  const mytopics = useSelector((store) => store.mytopics);
  console.log("heres my topics", mytopics)

  useEffect(() => {
      dispatch({ type: 'FETCH_MY_TOPICS' });
  }, []);
  return (
  //   <div>
  //     <div className="container">
  //       <h2>Welcome, {user.username}!</h2>
  //       <p>Your ID is: {user.id}</p>
  //       <LogOutButton className="btn" />
  //     </div>
  
      <main>
  <h1>Topics</h1>
  <section className="mytopics">
    {mytopics.map((topic) => {
      return (
        <div key={topic.id}>

          <h1>{topic.topic_name}</h1>
          <p>{topic.topic_description}</p>
          {/* <p>User ID: {topic.user_id}</p> */}
        </div>
      );
    })}
  </section>
</main>
   
  );
}
export default MyTopicsPage;