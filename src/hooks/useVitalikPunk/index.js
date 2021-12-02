import {useMemo} from "react";
import {useWeb3React} from "@web3-react/core"

const useVitalikPunks = () => {
    const  {active, library, chainId } = useWeb3React();

    const vitalikPunks = useMemo (() => new library.eth.Contract(
        '<<ADDRESS>>', abi),[active, chainId, library?.eth?.Contract]
        );
};

export default useVitalikPunks;