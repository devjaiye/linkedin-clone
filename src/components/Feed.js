import React, {useEffect, useState} from 'react'
import './Feed.css'
import CreateIcon from '@material-ui/icons/Create'
import InputOption from './InputOption'
import ImageIcon from '@material-ui/icons/Image'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import EventNoteIcon from '@material-ui/icons/EventNote'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'
import Posts from './Posts'
import { db } from './Firestore/firebase'
import firebase from 'firebase'


const Feed = () => {
    const [posts, setPosts] = useState([])
    const [input, setInput] = useState(' ')
    
    //..fireup the app when the app loads
    useEffect(() =>{
        //..realtime listener to the db. sends and retrieve posts to firestore
       db.collection("posts").orderBy('timestamp','desc').onSnapshot(snapshot =>(
        setPosts(snapshot.docs.map(doc => (
            {
                id: doc.id,
                data: doc.data()
            }
        )))
       ))

    },[])

   
    const sendPost = (e) =>{
        e.preventDefault() //..stop page from refreshing when enter is clicked 
        
        db.collection('posts').add({
            name: "Dayo Jaiye",
            description: "Get started now",
            message: input,
            photoUrl: ' ', 
            timestamp:  firebase.firestore.FieldValue.serverTimestamp(),
        })
        //..clear input when video is sent 
        setInput('')
    }
    return (
    <div className="feed">
        <div className="feed_inputContainer">
            <div className="feed_input">
                <CreateIcon/>
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} ontype="text" />
                    <button onClick={sendPost} type="submit">Send</button>
                </form>
            </div>
            <div className="feed_inputOptions">
                <InputOption Icon={ImageIcon} title='Photo' color="#7485F9"/>
                <InputOption Icon={SubscriptionsIcon} title='Video' color="#E7A33E"/>
                <InputOption Icon={EventNoteIcon} title='Event' color="#C0C8C0"/>
                <InputOption Icon={CalendarViewDayIcon} title='Write Article' color="#7fC15E"/>
            </div>
        </div>

        {/* Posts... */}
        { posts.map(({id, data: {name, description, message,
        photoUrl}}) =>( 
            <Posts
              key={id}
              name={name}
              description={description}
              message={message}
              photoUrl={photoUrl}
            />
        ))}
        {/* <Posts  
        name='Dayo Jaiye'
        description='This is my post'
        message='Just the way it is'/> */}
    </div>
  )
}

export default Feed