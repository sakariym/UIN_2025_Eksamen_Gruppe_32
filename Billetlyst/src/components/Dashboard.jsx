import Nav from './Nav';

function Dashboard (){
    return (
       <div>
       <Nav />
 <h1>Dashboard</h1>
 <h2>Logg Inn</h2>
 <form>
    Email:
    <label>
        <input type="text" name="email" />
    </label>
    <br></br>
    <br></br>
    Passord:
    <label>
        <input type="text" name="passord" />
    </label>
 </form>
 </div>   
    
    );
 }
 
 export default Dashboard;
 
 