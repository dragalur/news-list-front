export class DateService {
	public static getTime = (time: Date) => {
		if (typeof time === 'string') time = new Date(time);
		return time.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
	};

	public static getDate = (time: Date) => {
		if (typeof time === 'string') time = new Date(time);
		return time.toISOString().slice(0, 10);
	};
}
