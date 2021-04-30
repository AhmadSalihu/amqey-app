import React, { useState } from 'react'
import { Paper, Step, StepLabel, Stepper, Typography } from '@material-ui/core';

import VendorBioForm from './Vendor-Bio-Form';
import VendorBussinessForm from './VendorBussiness-Form'


import useStyles from './styles'

const steps = ["Vendor Bio Registeration", "Vendor Bussiness Form"];



const VendorStepsForm = () => {
	const [activeStep, setActiveStep] = useState(0);
	const classes = useStyles();

	const Confirmation = () => {
		return (
			<div>
				Confirmation
			</div>
		)
	}


	const Form = () =>  activeStep === 0 ?
		<VendorBioForm /> :
		<VendorBussinessForm />



	return (
		<>
			<div className={classes.toolbar} />
			<main className={classes.layout}>
				<Paper className={classes.paper}>
					<Typography variant="h4" align="center">Vendor Registeration</Typography>
					<Stepper activeStep={activeStep} className={classes.stepper}>
						{
							steps.map((step) => (
								<Step key={step}>
									<StepLabel>{step}</StepLabel>
								</Step>
							))
						}
					</Stepper>
					{activeStep === steps.length ? <Confirmation /> : <Form/> }
				</Paper>
			</main>
		</>
	)
}

export default VendorStepsForm
