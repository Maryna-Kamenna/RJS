import React, { useState, useEffect } from 'react';
import { Paper, Step, Stepper, StepLabel, Typography} from '@material-ui/core';

import useStyles from './styles';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';

const steps = ['Shipping address', 'Payment details'];


const Checkout = () => {
  const [activeStep, setActiveStep] = useState(2);
	const classes = useStyles();

const Confirmation = () => (
	<div>
		Confirmation
	</div>
)

	const Form = () => activeStep === 0
	? <AddressForm />
	: <PaymentForm />


	return (
		<>
			<div className={classes.toolbar} />
			<main className={classes.layout} >
				<Paper className={classes.paper} >
<Typography variant="h4" align="center">Checkout</Typography>
<Stepper activeStep={activeStep} className={classes.stepper}>
	{steps.map((step) => (
		<Step key={step}>
			<StepLabel>{step}</StepLabel>
			</Step>
	))}
</Stepper>
{activeStep === steps.lenth ? <Confirmation /> : <Form/> }
</Paper>
			</main>
		</>
	)
	}

export default Checkout
