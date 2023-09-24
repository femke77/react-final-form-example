// import * as React from "react";
// import { Field, Form, FormSpy } from "react-final-form";
// import Box from "@mui/material/Box";
// import Link from "@mui/material/Link";
// import { Typography } from "@mui/material";

// import AppForm from "../components/AppForm";
// import { email, required } from "../form/validation";
// import RFTextField from "..form/RFTextField";
// import FormButton from "..form/FormButton";
// import FormFeedback from "../form/FormFeedback";
// import withRoot from "../modules/withRoot";
// import { useMutation } from "@apollo/client";
// import { LOGIN_USER } from "./utils/Mutations";
// import Auth from "../utils/auth";

// function SignIn() {

//   const [sent, setSent] = React.useState(false);
//   const [signin, { error }] = useMutation(LOGIN_USER);

//   const validate = (values) => {
//     const errors = required(["email", "password"], values);

//     if (!errors.email) {
//       const emailError = email(values.email);
//       if (emailError) {
//         errors.email = emailError;
//       }
//     }
//     if (error) {
//       alert (error)
//       window.location.reload(false);
//     }

//     return errors;
//   };

//   const handleSubmit = async (values) => {
//     setSent(true);

//     try {
//       const { data} = await signin({
//         variables: { ...values },
//       });
//       if (data && data.login.token ) {
//         Auth.login(data.login.token);

//       } else if (error) {
//         console.log(error);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <React.Fragment>
//      
//       <AppForm>
//         <React.Fragment>
//           <Typography variant="h3" gutterBottom marked="center" align="center">
//             Sign In
//           </Typography>
//           <Typography variant="body2" align="center">
//             {"Not a member yet? "}
//             <Link href="/sign-up/" align="center" underline="always">
//               Sign Up here
//             </Link>
//           </Typography>
//         </React.Fragment>
//         <Form
//           onSubmit={handleSubmit}
//           subscription={{ submitting: true }}
//           validate={validate}
//         >
//           {({ handleSubmit: handleSubmit2, submitting }) => (
//             <Box
//               component="form"
//               onSubmit={handleSubmit2}
//               noValidate
//               sx={{ mt: 6 }}
//             >
//               <Field
//                 autoComplete="email"
//                 autoFocus
//                 component={RFTextField}
//                 disabled={submitting || sent}
//                 fullWidth
//                 label="Email"
//                 margin="normal"
//                 name="email"
//                 required
//                 size="large"
//               />
//               <Field
//                 fullWidth
//                 size="large"
//                 component={RFTextField}
//                 disabled={submitting || sent}
//                 required
//                 name="password"
//                 autoComplete="current-password"
//                 label="Password"
//                 type="password"
//                 margin="normal"
//               />
//               <FormSpy subscription={{ submitError: true }}>
//                 {({ submitError }) =>
//                   submitError ? (
//                     <FormFeedback error sx={{ mt: 2 }}>
//                       {submitError}
//                     </FormFeedback>
//                   ) : null
//                 }
//               </FormSpy>
//               <FormButton
//                 sx={{ mt: 3, mb: 2 }}
//                 disabled={submitting || sent}
//                 size="large"
//                 color="secondary"
//                 fullWidth
//               >
//                 {submitting || sent ? "In progress…" : "Sign In"}
//               </FormButton>
//             </Box>
//           )}
//         </Form>
//         <Typography align="center">
//           <Link underline="always" href="/forgot-password/">
//             Forgot password?
//           </Link>
//         </Typography>
//       </AppForm>
//
//     </React.Fragment>
//   );
// }

// export default SignIn;
