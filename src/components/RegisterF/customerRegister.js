import { Button, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import FormInput from './customTextField'

const VendorRegister = () => {

	const methods = useForm();

	return (
	<>
		<Typography variant='h6' gutterBottom>Customer Registeration</Typography>
			<FormProvider {...methods}>
				<form onSubmit={""}>
					<Grid container spacing={3}>
					<FormInput required name="FirstName" label='First name' />
						<FormInput required name="lastName" label='Last name' />
						<FormInput required name="lastName" label='Last name' />
							<Grid item xs={12} sm={6}>
						</Grid>
					</Grid>
					<br />
					<div style={{ display: 'flex', justifyContent: 'space-between' }}>
						<Button component={Link} to ='/' variant="outlined">Back To Home</Button>
						<Button type='submit' variant="contained" color='primary'>NEXT</Button>
					</div>
				</form>
			</FormProvider>
		</>
	)
}

export default VendorRegister
