//Entry point dell'applicazione
import ReactDOM from "react-dom/client"; //Ci permette di mostrarei nostri componenti React all'interno del DOM. Package separato da React perché contiene le funzionalità di rendering specifiche per il client
import App from "./App";//Importa il component App definito in App.jsx
import "bootstrap/dist/css/bootstrap.css"; //carica il file CSS di bootstrap dalla cartella bootstrap/dist/css/bootstrap.cssin cui è stato installato e lo include nella pagina HTML in cui è eseguita l'applicazione React

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
