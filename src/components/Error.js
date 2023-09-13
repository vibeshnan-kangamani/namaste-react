import { useRouteError } from "react-router-dom";

const ErrorComponent = () => {

    const err = useRouteError();
    return (
        <div>
            <h1>OOPS......!</h1>
            <h1>Something Went Wrong!!!</h1>
            <h2>{err.statusText}</h2>
        </div>
    );
}


export default ErrorComponent;