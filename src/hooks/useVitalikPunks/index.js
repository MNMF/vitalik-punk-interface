import { useMemo } from "react";
import { useWeb3React } from "@web3-react/core";
import vitalikPunksArtifact from "../../config/web3/artifacts/vitalikPunks";

const {address , abi } = vitalikPunksArtifact;

const useVitalikPunks = () => {

    const { active, library, chainId} = useWeb3React();

    const vitalikPunks = useMemo(() => {
        if (active) return new library.eth.Contract(abi, address[chainId]);
    }, [active, chainId, library?.eth?.Contract]);
  
    
    return vitalikPunks
};

export default useVitalikPunks;