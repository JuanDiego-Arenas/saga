export const getFilePath = file => {
	const filePath = file.path;
	const fileSplit = filePath.split('\\');

	return `${fileSplit[2]}/${fileSplit[3]}`;
};
