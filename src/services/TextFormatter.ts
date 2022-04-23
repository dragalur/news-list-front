export class TextFormatter {
	public static format = (text: string) => {
		const methods = [TextFormatter.addNewLine];
		return methods.reduce((acc, func) => func(acc), text);
	};

	private static addNewLine = (text: string) => text.replaceAll('\n', '<p/>');
}
