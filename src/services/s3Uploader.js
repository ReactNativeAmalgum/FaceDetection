import axios from 'axios';
import { Platform } from 'react-native';
import * as mime from 'react-native-mime-types';
import RNFS from 'react-native-fs';

const API_URL = 'http://<YOUR-IP>:5000/api/rekognition';

export const uploadToS3 = async (fileUri, fileName) => {
  const fileType = mime.lookup(fileName) || 'image/jpeg';
  const file = await RNFS.readFile(fileUri, 'base64');

  const res = await axios.put(`https://<YOUR_BUCKET>.s3.<REGION>.amazonaws.com/${fileName}`, Buffer.from(file, 'base64'), {
    headers: {
      'Content-Type': fileType,
    },
  });

  if (res.status === 200) {
    return fileName;
  } else {
    throw new Error('Failed to upload to S3');
  }
};

export const compareFaces = async (sourceKey, targetKey) => {
  const res = await axios.post(`${API_URL}/compare`, {
    sourceKey,
    targetKey,
  });

  return res.data;
};
