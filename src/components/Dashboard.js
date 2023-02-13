import Graphs from './Graphs';
import TextResult from './TextResult';
import Card from './Card';

// style 
import classes from './Dashboard.module.css'

const Dashboard = ({ txtLines, rechartsData }) => {
    return (
        <Card className='my-2 p-5 shadow-sm bg-light rounded'>
            <h3 className='h3'>1. Dashboard</h3>
            <Graphs rechartsData={rechartsData} />
            <TextResult txtLines={txtLines} />
        </Card>
    )
}

export default Dashboard;