import {Platform} from 'react-native';
import { baseConfig } from '../config';

const loopbackAddress = Platform.OS === 'ios' ? baseConfig.host.ios : baseConfig.host.android;

export const config = {
 port: baseConfig.port,
 host: `http://${loopbackAddress}:${baseConfig.port}`,
 client: {
 },
};