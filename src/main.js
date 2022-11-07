import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import { getQuery } from "./api";

getQuery().then(data => {
    console.log(data);
}
);
