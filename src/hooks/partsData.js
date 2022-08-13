import { useEffect, useState } from "react"

const PartsInfo = () => {
const [partsData, setPartsData] = useState([]);

useEffect(() => {
    fetch("http://localhost:5000/products")
    .then(res => res.json())
    .then(data => setPartsData(data))
}, [partsData, setPartsData])

return [partsData, setPartsData] 
};

export default PartsInfo;