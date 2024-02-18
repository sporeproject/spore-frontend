import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import {
    avalanche,
    bsc
} from 'wagmi/chains';
import { http } from 'wagmi'

export const wagmiConfig = getDefaultConfig({
    appName: 'pore.earth',
    projectId: 'YOUR_PROJECT_ID',
    chains: [avalanche, bsc],
    transports: {
        [avalanche.id]: http(),
        [bsc.id]: http(),
    },
})
