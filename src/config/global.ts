import dayjs from 'dayjs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform, Appearance } from 'react-native';


const _PROPS = {};
/**
 * 通用配置
 */
const G_CONFIG = {
  serverHost: 'http://tct-site-safety-test.app.funenc.com',
  docHost: 'http://docs.cq-tct.com',                       // 文件存储服务地址
  filePreviewServiceHost: 'http://fps.funenc.xyz:2112',    // 文件预览服务地址
  uploadQiNiuUrl: 'http://upload.qiniup.com',              // 七牛上传地址
  manualUrl: 'https://www.yuque.com/mu2e9y/vvm8dg/gu4l8b', // 操作手册地址
  amapKey: '6992f670cbe4b6b498c6acf3605d6b40',             // 高德地图key
  maxUploadSize: 104857600, // 文件上传最大限制100MB
  // enum: enumConfig,         // 枚举值
  isIOS: Platform.OS === 'ios',
  isAndroid: Platform.OS === 'android',
  componentBackgroundColor: Appearance.getColorScheme() === 'dark' ? '#000000' : '#ffffff'
};

/**
 * 处理本地信息（删除）
 */
const G_LOCALSTORAGE_REMOVE = async (name: string) => {

  await AsyncStorage.removeItem(name);

};

/**
 * 处理本地信息（清理）
 */
const G_LOCALSTORAGE_CLEAR = async () => {
  const asyncStorageKeys = await AsyncStorage.getAllKeys();
  if (asyncStorageKeys.length > 0) {
    if (Platform.OS === 'android') {
      await AsyncStorage.clear();
    } else if (Platform.OS === 'ios') {
      await AsyncStorage.multiRemove(asyncStorageKeys);
    }
  }

};

/**
 * 处理本地信息（读）
 */
const G_LOCALSTORAGE_GET = async (name: string) => {

  const dataStr = await AsyncStorage.getItem(name);
  let hash = {};

  if (dataStr) {

    // 加入try,catch防止内容变化
    try {

      hash = JSON.parse(dataStr);

      const { data }: any = hash;
      const newData = data;

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
const G_LOCALSTORAGE_SET = async (name: string, datas: any) => {

  const saveData = {
    data: datas
  };

  await AsyncStorage.setItem(name, JSON.stringify(saveData));

  return true;

};

// 时间格式化
const G_DATE_FORMAT = (time: any, type: string, defaultValue: any) => {
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

export default {
  _PROPS,
  G_CONFIG,
  G_LOCALSTORAGE_REMOVE,
  G_LOCALSTORAGE_CLEAR,
  G_LOCALSTORAGE_GET,
  G_LOCALSTORAGE_SET,
  G_DATE_FORMAT
};
