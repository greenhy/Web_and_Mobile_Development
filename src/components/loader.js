
import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/components.css';

export default function Loader() {
    return (

        <Spinner
            className="loader"
            variant="danger"
            animation="border"
            role="status">
            <span className="sr-only">Loading...</span>
        </Spinner>
    );

}