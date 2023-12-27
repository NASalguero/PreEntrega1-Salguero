/* eslint-disable react/prop-types */

import Item from "./Item"


const ItemList = ( {perfumes} ) => {
    console.log(perfumes)
  return (
    <div className="itemList">
        <h2 className="perfH2">Perfumes</h2>

        <div className="productos">
            { perfumes.map((perf) => <Item perfume={perf} key={perf.id}/>) }
        </div>
    </div>
  )
}

export default ItemList