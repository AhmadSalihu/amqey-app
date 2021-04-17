import React, { useState, useEffect } from 'react'
import { Grid, InputLabel, MenuItem, Select, Button, Typography } from '@material-ui/core'
import { useForm, FormProvider } from 'react-hook-form'
import FormInput from './customTextField'
import { Link } from 'react-router-dom'
import States from '../../Constants/States';


const CustomerRegister = ({ next }) => {
	const [selectStates, setSelectStates] = useState([]);
	const [selectState, setSelectState] = useState('');
	const [selectLocalGovts, setSelectLocalGovts] = useState([]);
	const [selectLocalGovt, setSelectLocalGovt] = useState('');
	const [locals, setLocals] = useState([]);
	// const [selection, setSelection] = useState([];


	const methods = useForm();



	
	let Locals = {}		

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const fetchStates = () => {
		const data = States();
		const states = [];
		data.map(data => {
			Locals[data.state.name] = data.state.locals;
			return (states.push(data.state))
		})
		setLocals(Locals)
		setSelectStates(states);
		setSelectState(states[0].name);
		setSelectLocalGovts(Locals[states[0].name]);
		setSelectLocalGovt(Locals[states[0].name][0].name);
		setSelectLocalGovt(Locals[states[0].name][0].name);

	}
	
	const fetchLocalGovt = (state) => {
		setSelectLocalGovts(locals[state]);
		setSelectLocalGovt(locals[state][0].name)
		
	}
	
	useEffect(() => {
		fetchStates()
	}, [fetchStates]);
	

	return (
		<>
			<Typography variant='h6' gutterBottom>Customer Registeration</Typography>
			<FormProvider {...methods}>
				<form onSubmit={methods.handleSubmit((data) => next({ ...data, selectState, selectLocalGovt }))}>
					<Grid container spacing={3}>
					<FormInput required name="FirstName" label='First name' />
						<FormInput required name="lastName" label='Last name' />
						<FormInput required name="lastName" label='Last name' />
							<Grid item xs={12} sm={6}>
							<InputLabel>Select Sate</InputLabel>
							<Select value={selectState} fullWidth onChange={(e) => { setSelectState(e.target.value); fetchLocalGovt(e.target.value)}}>
								{selectStates.map((state) => (			
								<MenuItem key={state.id} value={state.name} locals={state.locals}>
										{state.name}
								</MenuItem>
									))}
							</Select>
						</Grid>
						<Grid item xs={12} sm={6}>
							<InputLabel>Select LGA</InputLabel>
							<Select value={selectLocalGovt} fullWidth onChange={(e) => setSelectLocalGovt(e.target.value)}>
									{selectLocalGovts.map((local) => (
								<MenuItem key={local.id} value={local.name}>
										{local.name}
								</MenuItem>
									))}
							</Select>
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

export default CustomerRegister
