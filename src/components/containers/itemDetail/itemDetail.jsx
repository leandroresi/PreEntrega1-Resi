import ItemDetailContainer from "../itemdetailcontainer/itemDetailContainer";
import { useState, useEffect } from "react";
import billeteras from '../../billeteras/billeteras';

const itemDetail = () => {
     return <ItemDetailContainer billeteras={billeteras} />
};

export default itemDetail