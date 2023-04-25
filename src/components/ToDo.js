import React, {useState} from "react";
import List from "./List"
import "../customStyle.css"

function ToDo (){
    const [currentItem, setCurrentItem] = useState(null);
    const [itemList, updateItemList] = useState([]);
    
    const onChangeHAndler = (e) => {
        console.log("Current Item:", e.target.value);
        setCurrentItem(e.target.value);
    };
    
    const addItemToList = () => {
        updateItemList([...itemList, {item: currentItem, key: Date.now()}]);
        setCurrentItem("");
    };
    
    return(
        <div className="wrapper">
            <h2>To Do List</h2>
            <div className="input-wrapper">
                <input
                  type="text"
                  value={currentItem}
                  placeholder="Enter item here..."
                  onChange={onChangeHAndler}
                />
                <button onClick={addItemToList}>+</button>
            </div>
            <List itemList={itemList} updateItemList={updateItemList}/>
        </div>
    );
}

export default ToDo;