import { Container, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import HistorySearch from "../components/historySearch";
import HistoryTable from '../components/historyTable';



export default function AfterSearchHistory(props) {
    let data = props.match.params;
    return (
        <Container>
            <HistorySearch stocksAll={props.stocksAll}/>
            <Row>
            <Container>Selected Symbol: {data.symbol}</Container >
            <Container>Selected Date: {data.from}</Container >
            </Row>
            <HistoryTable symbol={data.symbol} from={data.from} />
        </Container >
    );
}