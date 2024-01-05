import cards_data from '../Data/cards'
const Project_card = () => {
    return ( 
        cards_data.map(card => 
            <div className={`card ${card.invert ? "dark" : null}`} >
            <div className="card-image">
              <div className="card-builtWith">{card.builtWith}</div>
              <img src={card.image} alt="Card"></img>
              <div className="card-content">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            <div className="card-actions">
              <a href={card.link} target="_blank" rel="noreferrer">Learn more</a>
            </div>
            </div>
          </div>
          )
     );
}
 
export default Project_card;