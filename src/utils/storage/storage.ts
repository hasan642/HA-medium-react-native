/**
 * A .ts file that contains storage.
 */

import RNAsyncStorage from '@react-native-community/async-storage';
import * as StorageTypes from './storage.types';

/**
 * An async-storage class.
 */
class AsyncStorage {

    /**
     * A private function that returns the storage model.
     */
    private _returnData = (str: string): StorageTypes.StorageModel => {
        try {
            const parsed = JSON.parse(str);
            return parsed;
        } catch{
            return str;
        };
    };

    /**
     * A private function that converts data type tp save it.
     */
    private _convertData = (data: any) => {

        /**
         * assume that is "string".
         */
        let convertedData = String(data);

        /**
         * convert data based on type.
         */
        switch (typeof data) {

            case "string":
                // do nothing (no need), bz it is already string.
                break;

            case "object":
                convertedData = JSON.stringify(data);
                break;

            case "function":
                throw new Error('function type is not allowed');

            case "symbol":
                throw new Error('Symbol type is not allowed');

            default:
                // number, boolean, ....
                convertedData = String(data);
                break;
        };

        /**
         * return final converted data.
         */
        return convertedData;
    };

    /**
     * get data from storage.
     */
    get = async (key: StorageTypes.Key): Promise<StorageTypes.StorageModel> => {
        try {
            const dataFromStorage = await RNAsyncStorage.getItem(key);
            return this._returnData(dataFromStorage);
        } catch  {
            return null;
        }
    };

    /**
     * save data to storage.
     */
    save = async (key: StorageTypes.Key, data: any): Promise<boolean> => {
        try {
            const handledData: string = this._convertData(data);
            await RNAsyncStorage.setItem(key, handledData);
            return true;
        } catch{
            return false;
        };
    };

    /**
     * delete item by key from storage.
     */
    clear = async (key: StorageTypes.Key): Promise<boolean> => {
        try {
            await RNAsyncStorage.removeItem(key);
            return true;
        } catch{
            return false;
        };
    };

    /**
     * delete all data from storage.
     */
    clearAll = async (): Promise<boolean> => {
        try {
            await RNAsyncStorage.clear();
            return true;
        } catch{
            return false;
        };
    };

};

/**
 * export as default.
 */
export default new AsyncStorage();