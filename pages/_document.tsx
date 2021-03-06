import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head />
				<body className="bg-pink-50 text-black dark:bg-black dark:text-white">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
