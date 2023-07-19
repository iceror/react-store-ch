import { Formik } from "formik";

const CheckoutForm = () => (
  <div className="checkout">
    <h2>Datos comprador</h2>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit} className="checkout-form">
          <div>
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          </div>
          {/* <label htmlFor="password"></label>
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password} */}
          <div>
          <label htmlFor="address">Dirección</label>
          <input
            type="text"
            name="address"
            placeholder="Calle y número"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.address}
          />
          {errors.address && touched.address && errors.address}
          </div>
          <div>
          <label htmlFor="credit-card">Número de tarjeta</label>
          <input
            type="number"
            name="credit-card"
            placeholder="Número de tarjeta"
            minLength={'16'}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.creditcard}
          />
          {errors.creditcard && touched.creditcard && errors.creditcard}
          </div>
          <button type="submit" disabled={isSubmitting}>
            Pagar
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default CheckoutForm;