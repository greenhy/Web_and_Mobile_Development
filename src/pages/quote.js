import { Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import QuoteTable from "../components/quoteTable";


export default function Quote(props) {

    return (
        <Container>
           <QuoteTable stocksAll={props.stocksAll}/>
        </Container>

    );
}