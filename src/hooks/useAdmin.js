// import { useEffect, useState } from "react";


// const useAdmin = user => {
//     const [admin, setAdmin] = useState(false);
//     useEffect(() => {
//         const email = user?.email;
//         if(email){
//          fetch(`https://sheltered-garden-04106.herokuapp.com/admin/${email}`, {
//              method: 'GET',
//              headers: {
//                  'content-type': 'application/json',
//                  'authorization': `Bearer ${localStorage.getItem('accessToken')}`
//              }
//          })
//          .then(res => res.json())
//          .then(data => {
//             console.log('data insite save ', data)
//              setAdmin(data.admin);
//          })
//         }
//      } ,[user, admin])

//     return [admin]
// }

// export default useAdmin



import { useEffect, useState } from "react"

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);
    useEffect( () =>{
        const email = user?.email;
        if(email){
            fetch(`https://sheltered-garden-04106.herokuapp.com/admin/${email}`, {
                method:'GET',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res=> res.json())
            .then(data => {
                console.log('form usr admin', data)
                setAdmin(data.admin);
                setAdminLoading(false);
            })
        }
    }, [user])

    return [admin, adminLoading]
}

export default useAdmin;

