import { useState } from 'react';

const Dashboard = () => {
    const [name, setName] = useState('Anonymous');

    return (
      <div className='text-center' id='main-content'>
        <h1>Welcome, {name} to fasType</h1>
        <p><h4>Type as fast as you can think</h4></p>
      </div>
    );
};

export default Dashboard;