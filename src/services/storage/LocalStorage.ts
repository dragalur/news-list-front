import { StorageKeys } from './Configs';
import { StorageDataType } from './Types';

export class LocalStorageService {
	public static get = <T>(key: string, defaultValue?: T) => LocalStorageService.data[key] || defaultValue;

	public static set = (key: string, value: any) => LocalStorageService.update({ [key]: value });

	public static remove = (keyName: string) => {
		const { [keyName]: deleteField, ...data } = LocalStorageService.data;
		localStorage.setItem(StorageKeys.websiteData, JSON.stringify(data));
	};

	private static get data(): StorageDataType {
		const storageData = localStorage.getItem(StorageKeys.websiteData);
		return storageData ? this.parseStorageData(storageData) : {};
	}

	private static parseStorageData = (storageData: string) => {
		try {
			return JSON.parse(storageData);
		} catch {
			return storageData;
		}
	};

	private static update = (newData: StorageDataType = {}) => {
		localStorage.setItem(StorageKeys.websiteData, this.mergeData(newData));
	};

	private static mergeData = (newData: StorageDataType = {}) => JSON.stringify({ ...this.data, ...newData });
}
