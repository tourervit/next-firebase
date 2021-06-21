interface IProps {}

function CartForm({}: IProps) {
	return (
		<div className="mx-auto max-w-md py-4">
			<h1 className="text-center">Add new cart</h1>
			<form>
				<input type="text" />
			</form>
		</div>
	);
}
export { CartForm };
