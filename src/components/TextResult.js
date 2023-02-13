import Card from './Card';
import Badge from 'react-bootstrap/Badge';

const TextResult = ({ txtLines }) => {

    return (
        <Card className="text-start">
            <h3 className='h3'>2. Entities hits overview</h3>
            <ul className='text-align-left list-unstyled'>
                {txtLines && txtLines.map((line, index) => (
                    <li key={index}>
                        {
                        <>
                          <Badge bg="secondary" className='m-2'>{index}</Badge>{line}
                        </>
                        }

                        
                    </li>
                ))}
            </ul>

        </Card>
    )
}

export default TextResult;