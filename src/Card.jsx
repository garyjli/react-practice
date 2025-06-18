import tecca from './assets/solo.jpg'

function Card() {
    return (
        <div className="card">
            {/* Card components typically contain an image, title, and text element */}
            <img className="card-image" src={tecca} alt="profile picture"></img>
            <h2 className="card-title">Lil Tecca</h2>
            <p className="card-text">Nonchalant rap artist.</p>
        </div>
    );
}

export default Card