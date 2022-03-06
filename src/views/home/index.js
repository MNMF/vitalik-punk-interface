import { useWeb3React } from "@web3-react/core";
import { useCallback, useEffect, useState } from "react";
import useVitalikPunks from "../../hooks/useVitalikPunks";


const Home = () => {
  const { active } = useWeb3React();
  const [maxSupply, setMaxSupply ] = useState();

  const vitalikPunks = useVitalikPunks();

  const getMaxSupply = useCallback(async () =>  {
    if (vitalikPunks) {
      const result = await vitalikPunks.methods.maxSupply().call(); setMaxSupply(result) ;
    }

  }, [vitalikPunks]);

  useEffect (() => {
    getMaxSupply();
  }, [getMaxSupply]);


  if(!active) return "conecta tu wallet";

    return (
      <>
        <p>max Supply: {maxSupply}</p>
      </>
    );
  };
  
  export default Home;
  