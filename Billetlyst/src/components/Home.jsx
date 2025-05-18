import { Link } from "react-router";
function Home (){
   return (
      <div>
<h1>Billettlyst</h1>

<h2><Link to="/EventPage">Event</Link>
</h2>
</div>
   );
}

export default Home;