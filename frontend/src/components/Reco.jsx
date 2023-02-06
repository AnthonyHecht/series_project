import Card from "./Card"
import { CardList } from "../datas/CardList"

const Reco = () => {
    return (
        <div className="reco-list">
            {CardList.map(({ name, note, cover, description, reco }) => reco ? (
                <div>
                <Card key={name} 
                        cover={cover} name={name} note={note} description={description}/>
                </div>
            ) : null )}
        </div>
    )
}

export default Reco