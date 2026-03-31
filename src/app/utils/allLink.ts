import { ENV } from "@/env";

// const use = "https://docs-stage.aro.network";
const BASE_ENV: { [key: string]: string } ={
  beta: 'https://docs-stage.aro.network/',
  prod:'https://docs.aro.network/'
}

const use = BASE_ENV[ENV];



export const AllLink = {
  docs: use,
  podUserGuide: `${use}/node-operator-guide/aro-pod/get-aro-pod`,
  clientUserGuide: `${use}/node-operator-guide/aro-client/aro-client-introduction`,
  linkUserGuide: `${use}/node-operator-guide/aro-link`,
  liteUserGuide: `${use}/node-operator-guide/aro-lite/get-aro-lite`,
  podSeeGuidance: `${use}/node-operator-guide/aro-pod/aro-pod-installation-guide`,
  learnMore: `https://medium.com/@ARONetwork/testnet-sprint-2-is-live-join-contribute-and-earn-big-with-aro-f5582b9d0e3e`,
  dashboard:'https://dashboard.aro.network/?mode=testnet&tab=nodes&type=add',
  nodeUserGuide: `${use}/node-operator-guide/`,

};
