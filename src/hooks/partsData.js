import { useEffect, useState } from "react"

const PartsInfo = () => {
const [partsData, setPartsData] = useState([]);

useEffect(() => {
    fetch("https://sheltered-garden-04106.herokuapp.com/products")
    .then(res => res.json())
    .then(data => setPartsData(data))
}, [])

return [partsData, setPartsData] 
};

export default PartsInfo;