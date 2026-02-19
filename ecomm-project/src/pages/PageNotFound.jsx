import { Header } from '../components/Header';
import './pageNotFound.css'
export function PageNotFound(){
    return(
        <>
        <Header />
        <div className="page-not-found-cont">
            <h1 className="page-not-found-text">Page Not Found 404</h1>
        </div>
        </>
    );
}