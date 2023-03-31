import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const itemDetail = ({billeteras}) => {

     const { id } = useParams();

  const [products, setProducts] = useState([]);
  console.log(products);
  useEffect(() => {
    const db = getFirestore();

    const billeterRef = doc(db, "billetera", `${id}`);

    getDoc(billeterRef).then((snapshot) => {
      if (snapshot.exists()) {
        setProducts(snapshot.data());
      } else {
        console.log("No existe el documento!");
      }
    });
  }, []);

  const billeteraFilter = billeteras.filter((billetera) => billetera.id == id);

  return (
    <>
      {billeteraFilter.map((billetera) => (
        
        <div>
          <img src="{billetera.imagen} " alt="{billetera.nombre} " />
          <div>
            <h2> {billetera.nombre} </h2>
            <p>{billetera.descripcion} </p>
            <p>{billetera.precio} </p>
            <button> Agregar al carrito</button>
          </div>
        </div>

      /*  <div key={billetera.id}>
          <Center p="1rem">
            <Card className="prod-detail">
              <CardBody>
                <Image borderRadius="lg" src={billetera.imagen} />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{billetera.nombre}</Heading>
                  <Text color="blue.800" fontSize="l">
                    Descripcion: {billetera.descripcion}
                  </Text>
          
                  <Text color="green.400" fontSize="xl">
                    Precio: ${billetera.precio}
                  </Text>
                </Stack>
              </CardBody>
            </Card>
          </Center>
        </div>
      */ ))}
    </>
  );
};

     


export default itemDetail