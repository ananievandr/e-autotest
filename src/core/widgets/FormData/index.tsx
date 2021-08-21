import Button from "@material-ui/core/Button/Button";
import { useFormik } from "formik";
import InputMask from 'react-input-mask';

import FormControl from "../../uikit/FormControl";
import Input from "../../uikit/Input";

import validationSchema from "./validation";

interface IContactUs {
  name: string;
  email: string;
  phone: string;
  message: string;
  about: string;
}

interface TextMaskCustomProps {
  inputRef: (ref: HTMLInputElement | null) => void;
}

function TextMaskCustom(props: TextMaskCustomProps) {
  const { inputRef, ...other } = props;

  return (
    <InputMask 
		  {...other}
			ref={(ref: any) => {
				inputRef(ref ? ref.inputElement : null);
			}}
		 	mask="+7(999) 999-99-99" />
  );
}


function FormData() {

	const onSubmit = (values: IContactUs) => {
	}

	const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "+7(___) ___-__-__",
      message: "",
      about: "1",
    },
    validationSchema: validationSchema,
    onSubmit,
  });
	
	return (
		<form onSubmit={formik.handleSubmit}>
			<FormControl
				label="Email"
				labelVariant="caption"
				required={true}
				input={
					<Input 
						type="text" 
						name="email" 
						fullWidth={true} 
						value={formik.values.email}
						error={formik.touched.email && Boolean(formik.errors.email)}
						onChange={formik.handleChange} />
				}
				helperText={formik.touched.email ? formik.errors.email : ''}
			/>
       
			<FormControl
				label="Name"
				labelVariant="caption"
				input={
					<Input 
						type="text" 
						name="name" 
						fullWidth={true} 
						value={formik.values.name}
						error={formik.touched.name && Boolean(formik.errors.name)}
						onChange={formik.handleChange} />
				}
				helperText={formik.touched.name ? formik.errors.name : ''}
			/>

			<FormControl
				label="Phone"
				labelVariant="caption"
				input={
					<Input 
						type="text" 
						fullWidth={true} 
						name="phone"
						id="formatted-text-mask-input"
          	inputComponent={TextMaskCustom as any}
						value={formik.values.phone}
						error={formik.touched.phone && Boolean(formik.errors.phone)}
						onChange={formik.handleChange} />
				}
				helperText={formik.touched.phone ? formik.errors.phone : ''}
			/>
       
			<FormControl
				label="Message"
				labelVariant="caption"
				input={
					<Input 
						type="text" 
						fullWidth={true} 
						multiline={true} 
						rows={4} 
						name="message"
						value={formik.values.message}
						error={formik.touched.message && Boolean(formik.errors.message)}
						onChange={formik.handleChange} />
				}
				helperText={formik.touched.message ? formik.errors.message : ''}
			/>
			<Button
				variant="contained"
				color="primary"
				size="large"
				style={{ height: 56, width: 240 }}
				type="submit"
			>
				Save
			</Button>
		</form>
	)
}

export {FormData}