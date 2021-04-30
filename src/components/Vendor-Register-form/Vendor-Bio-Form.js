import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form';
import FormInput from './customTextField'

const VendorBioForm = () => {
	const methods = useForm();

	return (
		<>
			<Typography variant='h6' gutterBottom>Vendor Registeration</Typography>
			<FormProvider {...methods}>
				<form onSubmit="">
				  <Grid container spacing={3}>
            <FormInput required name="firstName" label="First name" />
            <FormInput required name="lastName" label="Last name" />
            <FormInput required name="address1" label="Address line 1" />
            <FormInput required name="email" label="Email" />
            <FormInput required name="city" label="City" />
						<FormInput required name="zip" label="Zip / Postal code" />
					</Grid>
				</form>
			</FormProvider>
		</>
	)
}

export default VendorBioForm
