import React, { useState, useEffect } from "react"
import { useCartContext } from "../../Context/CartContext"
import { Link, Navigate } from "react-router-dom"
import { writeBatch, collection, where, documentId, addDoc, updateDoc, doc, getDoc, query, getDocs, or } from "firebase/firestore"
import { database } from "../firebase/config"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from 'yup'

const schema = Yup.object().shape({
  nombre: Yup.string()
    .required("¡Este campo es obligatorio!")
    .min(3, "El nombre es muy corto")
    .max(20, "El nombre es demasiado largo"),
  direccion: Yup.string()
    .required("¡Este campo es obligatorio!")
    .min(6, "La dirección es muy corta")
    .max(30, "La dirección es demasiado larga"),
  email: Yup.string()
    .required("¡Este campo es obligatorio!")
    .email("Email inválido")
})

const Checkout = () => {
  const { cart, purchaseTotal, emptyCart } = useCartContext()

  const [orderId, setOrderId] = useState()
  const [orderCreated, setOrderCreated] = useState(false)

  const batch = writeBatch(database)
  const ordersRef = collection(database, 'orders')
  const productsRef = collection(database, 'products')

  const getProductsInCart = async () => {
    const q = query(productsRef, where(documentId(), "in", cart.map(item => item.id)))

    const productsPromise = getDocs(q);

    productsPromise.then((products) => {
      products.docs.forEach((doc) => {
        const item = cart.find((prod) => prod.id === doc.id)
        const stock = doc.data().quantity

        if (stock >= item.cantidad) {
          batch.update(doc.ref, {
            stock: stock - item.count
          })
        } else {
          outOfStock.push(item)
        }
      })
    }).catch((error) => {
    });
  }

  const createOrder = async (values) => {
    const order = {
      client: values,
      items: cart,
      total: purchaseTotal(),
      date: new Date()
    }

    const outOfStock = [];

    if (outOfStock.length === 0) {
      batch.commit()
        .then(() => {
          addDoc(ordersRef, order)
            .then((doc) => {
              setOrderId(doc.id)
              setOrderCreated(true)
            })
            .catch(err => console.log(err))
            .finally(() => {
              emptyCart()
            })
        })
    } else {
      alert("Hay items sin stock")
    }
    return order;
  }

  useEffect(() => {
    const fetchCart = async () => {
      await getProductsInCart()
    }

    fetchCart()
  }, [])

  return (
    <div>
      {orderCreated ? (
        <div className="successful">
          <h2 className="success">¡Tu compra ha sido registrada!</h2>
          <hr />
          <p className="order-num">Tu id de orden es: {orderId}</p>
          <Link to="/"><button className="back-to-store">Regresar a la tienda</button></Link>
        </div>) : (
        <React.Fragment>
          <h2>Checkout</h2>
          <hr />
          <Formik
            initialValues={{
              nombre: '',
              direccion: '',
              email: ''
            }}
            onSubmit={createOrder}
            validationSchema={schema}>
            {() => (
              <Form className="checkout-form">
                <div>
                  <label htmlFor="nombre">Nombre</label>
                  <Field type="text" name="nombre" className="checkout-form-field" placeholder='Nombre' />
                  <ErrorMessage name="nombre" component={"p"} className="error-message" />
                </div>
                <div>
                  <label htmlFor="direccion">Dirección</label>
                  <Field type="text" name="direccion" className="checkout-form-field" placeholder='Calle y número' />
                  <ErrorMessage name="direccion" component={"p"} className="error-message" />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <Field type="email" name="email" className="checkout-form-field" placeholder='Email' />
                  <ErrorMessage name="email" component={"p"} className="error-message" />
                </div>
                <button type="submit">Enviar</button>
              </Form>
            )}
          </Formik>
        </React.Fragment>)}
    </div>)
}

export default Checkout