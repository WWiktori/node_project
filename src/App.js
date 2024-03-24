import { Doctor } from './components/doctor/doctors';
import contents from './content';
import Rating from './components/rating/Rating';



export default function App() {
  return(
    
    <div className='App'>
    <Rating />
      {contents.map(content => (
        <Doctor
        key = {content.id}
        image = {content.image}
        name = {content.name}
        location = {content.location}
        specialty = {content.specialty}
        ratings={content.ratings}
        time ={content.time}

        />
      ))}
    </div>
  )
};