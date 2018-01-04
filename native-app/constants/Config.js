import {Platform} from 'react-native';
import { baseConfig } from '../config';

const loopbackAddress = Platform.OS === 'ios' ? baseConfig.host.ios : baseConfig.host.android;

export const config = {
 port: baseConfign.port,
 host: `http://${loopbackAddress}:${baseConfig.port}`,
 client: {
   publishKey: baseConfig.pubnub.publishKey,
   subscribeKey: baseConfig.pubnub.subscribeKey,
   ssl: false,
 },
};