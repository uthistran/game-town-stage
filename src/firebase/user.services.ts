import { getFirestore, collection, doc, setDoc, getDocs, query, where } from "firebase/firestore";

const firestore = getFirestore();
const usersCollection = collection(firestore,"users");

const addUser = async (user: any) => {
    const documentReference = doc(usersCollection);

    setDoc(documentReference, user)
        .then(()=>{
            console.log("Document successfully written");
        })
        .catch((error)=> {
            console.log(`Error on adding user - ${error}`);
        });
}

const getUser = async (userId : string) => {
    const querySnapshot = await getDocs(query(usersCollection, where("userId", "==", userId)));
    querySnapshot.forEach((doc) => {
        const userData = doc.data();
        console.log("User info:", userData);
      });
}

export { addUser };