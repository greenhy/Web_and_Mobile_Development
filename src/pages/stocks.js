import { Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import StockTable from "../components/stockTable";

export default function Stocks(props) {
    return (
        <Container>
            <StockTable stocksAll={props.stocksAll}/>
        </Container>
    );
}