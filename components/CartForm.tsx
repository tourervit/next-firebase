import Link from "next/link";
import React, { ChangeEvent, useEffect } from "react";
import { useForm } from "react-hook-form";
import { PlaceSearchBox } from "./PlaceSearchBox";

interface IFormData {
	address: string;
	longitude: number | null;
	latitude: number | null;
	temperature: number;
	image: FileList;
}

export type SelectFunction = (
	address: IFormData["address"],
	latitude: IFormData["latitude"],
	longtitude: IFormData["longitude"],
) => void;

interface IProps {}

function CartForm({}: IProps) {
	const [previewImage, setPreviewImage] = React.useState(null);
	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
		watch,
	} = useForm<IFormData>({ defaultValues: {} });

	useEffect(() => {
		register("address", { required: "Please enter address" });
		register("latitude", { required: true, min: -90, max: 90 });
		register("longitude", { required: true, min: -180, max: 180 });
	}, [register]);

	const handleSelectAddress = (address: string, latitude: number, longitude: number) => {
		setValue("address", address);
		setValue("latitude", latitude);
		setValue("longitude", longitude);
	};

	const handleCreate = data => {};
	const onSubmit = (data: IFormData) => {
		handleCreate(data);
	};
	return (
		<div className="mx-auto max-w-md py-4">
			<h1 className="text-center uppercase font-semibold text-lg">Add new cart</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="mt-4">
					<PlaceSearchBox onSelectAddress={handleSelectAddress} defaultValue="" />
					{errors.address && <p>{errors.address.message}</p>}
				</div>
				<div className="mt-4">
					<label
						htmlFor="image"
						className="p-4 border-2 border-dashed cursor-pointer block"
					>
						Click to add image
					</label>
					<input
						{...register("image", {
							validate: (fileList: FileList) => {
								if (fileList.length === 1) return true;
								return "Please upload an image";
							},
							shouldUnregister: false,
						})}
						id="image"
						type="file"
						accept="image/*"
						onChange={(event: ChangeEvent<HTMLInputElement>) => {
							const reader = new FileReader();
							const file = event.target.files[0];
							reader.readAsDataURL(file);
							reader.onloadend = () => {
								setPreviewImage(reader.result);
							};
						}}
						className="w-0 h-0 absolute"
					/>
					{previewImage && (
						<img src={previewImage} className="object-cover h-56 w-full" />
					)}
					{errors.image && <p>{errors.image.message}</p>}
				</div>
				<div className="mt-4">
					<button
						type="submit"
						className="mr-2 p-2 px-5 text-white bg-pink-800 hover:bg-pink-900 dark:bg-pink-500 dark:hover:bg-pink-400 rounded-md transition-colors"
					>
						Search
					</button>
					<Link href="/">
						<a className="inline-block p-2 px-4 text-white  bg-gray-800 hover:bg-gray-900 dark:bg-gray-500  dark:hover:bg-gray-400 rounded-md transition-colors">
							Back
						</a>
					</Link>
				</div>
			</form>
		</div>
	);
}
export { CartForm };
