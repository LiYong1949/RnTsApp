import dayjs from 'dayjs';
import AsyncStorage from '@react-native-community/async-storage';
import { Platform } from 'react-native';

const global:any = {};
/**
 * 通用配置
 */
global.G_CONFIG = {
  serverHost: 'http://tct-site-safety-test.app.funenc.com',
  docHost: 'http://docs.cq-tct.com',                       // 文件存储服务地址
  filePreviewServiceHost: 'http://fps.funenc.xyz:2112',    // 文件预览服务地址
  uploadQiNiuUrl: 'http://upload.qiniup.com',              // 七牛上传地址
  manualUrl: 'https://www.yuque.com/mu2e9y/vvm8dg/gu4l8b', // 操作手册地址
  amapKey: '6992f670cbe4b6b498c6acf3605d6b40',             // 高德地图key
  maxUploadSize: 104857600, // 文件上传最大限制100MB
  // enum: enumConfig,         // 枚举值
  isIOS: Platform.OS === 'ios',
  isAndroid: Platform.OS === 'android'
};

/**
 * 附件根据URL获取文件名
 * 文件格式：tct/ssm/202108020121212/XXX.pdf
 * @param fileUrl 文件地址
 * @returns
 */
global.G_SPLIT_URL_FILENAME = (fileUrl: any) => {

  let orginFileName = fileUrl.split('/')[fileUrl.split('/').length - 1]; // 获取文件名，格式：tct/ssm/202108020121212/XXX.pdf

  return orginFileName;
};


/**
 * 处理本地信息（删除）
 */
global.G_LOCALSTORAGE_REMOVE = async (name: any) => {

  await AsyncStorage.removeItem(name);

};

/**
 * 处理本地信息（清理）
 */
global.G_LOCALSTORAGE_CLEAR = async () => {

  await AsyncStorage.clear();

};

/**
 * 处理本地信息（读）
 */
global.G_LOCALSTORAGE_GET = async (name: any) => {

  let dataStr = await AsyncStorage.getItem(name);
  let hash = {};

  if (dataStr) {

    // 加入try,catch防止内容变化
    try {

      hash = JSON.parse(dataStr);

      let { data }: any = hash;
      let newData = data;

      return newData;

    } catch {

      return false;

    }
  }

  return false;

};

/**
 * 处理本地信息（写），统一使用对象{}包裹
 * @param name  名称
 * @param datas 数据体
 * @returns
 */
global.G_LOCALSTORAGE_SET = async (name: string, datas: any) => {

  let saveData = {
    data: datas
  };

  await AsyncStorage.setItem(name, JSON.stringify(saveData));

  return true;

};

// 时间格式化
global.G_DATE_FORMAT = (time: any, type: string, defaultValue: any) => {
  if (time) {
    if (type === 'fullTimes') {
      return dayjs(time).format('YYYY-MM-DD HH:mm:ss');
    } else if (type === 'fullTimeToMinute') {
      return dayjs(time).format('YYYY-MM-DD HH:mm');
    } else if (type === 'fullTimeToMini') {
      return dayjs(time).format('YYYYMMDDHHmmss');
    } else if (type === 'year') {
      return dayjs(time).format('YYYY');
    } else if (type === 'yearMonth') {
      return dayjs(time).format('YYYY-MM');
    } else if (type) {
      return dayjs(time).format(type);
    } else {
      return dayjs(time).format('YYYY-MM-DD');
    }
  } else {
    return defaultValue || '/';
  }
};

export default global;
