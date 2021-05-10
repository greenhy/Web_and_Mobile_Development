import { Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import HistorySearch from "../components/historySearch";
import HistoryTable from '../components/historyTable';



export default function SymbolHistory(props) {
    let data = props.match.params;

    return (
        <Container>
            <HistorySearch stocksAll={props.stocksAll}/>
            <Container>Selected Symbol: {data.symbol}</Container >
            <HistoryTable symbol={data.symbol} from="none"/>
        </Container >
    );
}