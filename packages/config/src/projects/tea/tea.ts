import { EthereumAddress, UnixTime } from '@l2beat/shared-pure'

import { DERIVATION, REASON_FOR_BEING_OTHER } from '../../common'
import { ProjectDiscovery } from '../../discovery/ProjectDiscovery'
import type { ScalingProject } from '../../internalTypes'
import { opStackL2 } from '../../templates/opStack'

const discovery = new ProjectDiscovery('tea')

// TODO: Update with actual block 0 timestamp once RPC is live
// Contracts deployed 2026-05-25. Query: GET https://scout.tea.xyz/api/v2/blocks/0
const genesisTimestamp = UnixTime(1779667200) // 2026-05-25T00:00:00Z placeholder

export const tea: ScalingProject = opStackL2({
  addedAt: UnixTime(1748131200), // 2026-05-25T00:00:00Z
  discovery,
  reasonsForBeingOther: [REASON_FOR_BEING_OTHER.CLOSED_PROOFS],
  display: {
    name: 'Tea',
    slug: 'tea',
    description:
      'Tea is an OP Stack Optimistic Rollup built to reward and sustainably fund open-source software. It serves as the trust and provenance layer for open-source contributions, enabling cryptographic attribution and economic incentives for OSS developers.',
    links: {
      websites: ['https://tea.xyz'],
      documentation: ['https://docs.tea.xyz'],
      explorers: ['https://scout.tea.xyz'],
      repositories: ['https://github.com/teaxyz'],
      socialMedia: [
        'https://x.com/teaprotocol',
        'https://t.me/teaprotocol',
        'https://discord.tea.xyz',
      ],
    },
  },
  associatedTokens: ['TEA'],
  chainConfig: {
    name: 'tea',
    chainId: 6122,
    explorerUrl: 'https://scout.tea.xyz',
    explorerApi: {
      url: 'https://scout.tea.xyz/api',
      type: 'blockscout',
    },
    sinceTimestamp: genesisTimestamp,
    multicallContracts: [
      {
        address: EthereumAddress(
          '0xcA11bde05977b3631167028862bE2a173976CA11',
        ),
        batchSize: 150,
        sinceBlock: 0,
        version: '3',
      },
    ],
    apis: [
      { type: 'rpc', url: 'https://rpc.tea.xyz', callsPerMinute: 300 },
      { type: 'blockscout', url: 'https://scout.tea.xyz/api' },
    ],
  },
  genesisTimestamp,
  stateDerivation: DERIVATION.OPSTACK('TEA'),
  isNodeAvailable: true,
  milestones: [
    {
      title: 'Tea Mainnet Launch',
      url: 'https://tea.xyz',
      date: '2026-06-04T00:00:00Z',
      description: 'Tea Mainnet goes live with TGE on Aerodrome.',
      type: 'general',
    },
  ],
})
