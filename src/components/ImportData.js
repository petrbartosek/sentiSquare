import Card from './Card';
import Form from 'react-bootstrap/Form';

const ImportData = ({ loadFileHandler, txtLines }) => {

    return (
        <Card>
            <Form.Group controlId="formFile" className="bg-light w-50 text-center">
                
                <Form.Control type="file" onChange={loadFileHandler}/>
            </Form.Group>
        </Card>
    )
}

export default ImportData;