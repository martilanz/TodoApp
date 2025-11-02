import ListNames from "./ListNames";
import User from "./User";
import Col from "./Col";
const defaultImage = "https://via.placeholder.com/32x32.png";
function getImageOrDefaultURL(imageUrl) {
    try {
        new URL(imageUrl);
        return imageUrl;
    } catch {
        return defaultImage;
    }
}
const customStyle = {
    boxShadow: "inset -1px 0 0 rgba(0, 0, 0, 0.1)",
};

export default function Sidebar({ user: { id, name, image } }) {
    return (
        //className -> equivalente dell'attributo class in HTML
        //stye -> accetta un oggetto Javascript e non una stringa CSS.. Ogni proprietà CSS viene scritta in camelCase
        //Style è ottimo per stili dinamici, calcolati in base allo stato o alle props (Stili condizionali o dinamici)
        // <div className="col-3 p-3 bg-light vh-100 overflow-scroll" style=
        //     {customStyle}>
        <Col size={3} className="bg-light" style={customStyle}>
            <User name={name} image={image} />
            <hr></hr>
            <ListNames/>
        </Col>
        // </div>
    
        
    );
}