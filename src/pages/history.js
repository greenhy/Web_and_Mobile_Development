import { Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import HistorySearch from "../components/historySearch";


export default function History(props) {
    return (
        <Container>
            <HistorySearch stocksAll={props.stocksAll}/>
        </Container >
    );
}
