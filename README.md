# MAGI CREACIONES. 
## _Impresiones & sublimados_

[![N|Solid](https://firebasestorage.googleapis.com/v0/b/magi-impresiones.appspot.com/o/logomagi.png?alt=media&token=1a51514c-ad50-4850-8960-e3926c04501a&_gl=1*10lomkp*_ga*MTQwMjQwODYyNC4xNjk0NDg2Njg1*_ga_CW55HF8NVT*MTY5ODc3NDM3MS41My4xLjE2OTg3NzQzOTMuMzguMC4w)](https://nodesource.com/products/nsolid)

--------------------------------------------------------------------------------------------------------

E-commerce estático dedicado pura y exclusivamente a la venta de productos sublimados e impresos de la empresa Magi Creaciones. En su recorrido podrás encontrar productos todos los productos realizados manualmente por sus dueños.


## Características técnicas del proyecto:

_**MAGI CREACIONES**_ utiliza las siguientes tecnologías:

- [React.js](https://react.dev/) - ^18.2.0
- [Node.js](https://nodejs.org/es) - ^18.13.0
- [NPM](https://www.npmjs.com/) - ^8.19.3
- [Firebase](https://firebase.google.com/) - ^9.22.0
- [Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/) - ^5.2.3
- [SweetAlert2](https://sweetalert2.github.io/) - ^11.7.5
- [Formpree](https://formspree.io/)
- [Figma](https://www.figma.com/)


##### Repositorio público de [GitHub](https://github.com/mnparolari/Magi-Impresiones)
Intrucciones para clonar proyecto [aquí](https://docs.github.com/es/repositories/creating-and-managing-repositories/cloning-a-repository)

-------------------------

### Versión

```sh
1.0.0
```

## Creado por 

Carla Storniolo- UX-UI
Rodrigo Enter- UX-UI
[Josefina Nieto](https://github.com/josefinamariannieto) - UX-UI


**Sólo el comienzo...**

--------------------------------------------------------------------------------------------------------

# RPM
## _La casa del vinilo_

[![N|Solid](https://firebasestorage.googleapis.com/v0/b/npm-la-casa-del-vinilo.appspot.com/o/RPM.png?alt=media&token=c8478a24-e62e-4a70-9f71-7e5aeb59273e&_gl=1*qw5m5s*_ga*MTczMTk5NTc2MC4xNjg0OTcyNTUw*_ga_CW55HF8NVT*MTY4NTY3MjEwMS45LjEuMTY4NTY3Mjc1MC4wLjAuMA..)](https://nodesource.com/products/nsolid)

--------------------------------------------------------------------------------------------------------

RPM, La casa del vinilo is an e-commerce dedicated purely and exclusively to vinyl records. On your tour you will find:

- Featured albums
- National Records
- International Records
- Used Discs
- Classic Records
- ✨And above all, a trip down memory lane✨

## General characteristics of the project:

The project has 4 main sections:
* **Home**, represented by the **< ItemListContainer />**: Render of all products in **{path="/"}**.
* **Categories**, represented by the **< ItemListContainer />**: Render of the filtered products in **{path="/:category"}**.
* **Product Detail**, represented by the **< ItemDetailContainer/>**: Render of the selected product + purchase of the product in **{path="/:category/:id" }**.
* **Shopping Cart**, represented by the **"< Cart />**: Rendering of the selected products in **{path="/cart"}**.

> These sections are applied in the
> component ***< Routes />***, which is called
> from the parent component of the project: ***< App />***.


In turn, the project has other subcomponents that drive and advocate for the perfect functioning of the App:
* **< Brand />:** Displays the project header.
* **< Navbar />**: Represents the different categories, next to the **< CartWidge />** from where you can enter the Cart.
* **< ItemList />:**: Maps the products in the Home and in the categories.
* **< Item />:** Individual product rendered in the Home and in the categories.
* **< ItemDetail />:** Shows the detail of the selected product.
* **< ItemCount />:** Representation of the buttons to add, subtract and select product.
* **< CartItem />:** Renders the cards of the selected products.
* **< Form />:** Presents the inputs with the personal data for the validation of the purchase.
* **< Payment />:** Credit card render -created with [react-credit-cards-2](https://www.npmjs.com/package/react-credit-cards-2)-.
* **< Spinner />:** Representation of the loading as a transition between components.
* **< Footer />:** Footer.

##### Custom Hooks:
* useCount(): States and functions necessary for the operation of ItemCount.
* useFirebase(): States and functions necessary to obtain the products and send the payment orders to Firebase via API.
* usePaymentFees(): States and functions necessary to calculate interest, fees and new totals for credit card payments.

##### Context:
* useContext(CartContext): States and functions necessary for the different actions to be performed with the products (addToCart, isInCart, removeList, deleteItem, deleteQuantity).

##### Helpers:
* index.js: Reusable functions.

#### Styles:
| Archives | .CCS |
| ------ | ------ |
| Brand.jsx | [./brand.css] |
| NavBar.jsx - NavbarItem.jsx | [./navbar.css] |
| ItemListContainer.jsx - ItemList.jsx - Item.jsx | [./itemListStyle.css] |
| ItemDetailContainer.jsx - ItemDetail.jsx - ItemCount.jsx | [./itemDetailStyle.css] |
| CartWidget.jsx - Cart.jsx - CartItem.jsx | [./cart.css] |
| Form.jsx | [./form.css] |
| Payment.jsx | [./payment.css] |
| Footer.jsx | [./footer.css] |
| Spinner.jsx | [./spinner.css] |

#### Others:
* firebase-config.jsx => Configuration for using Firebase.
* palette-rpm.scss (public folder)=> Color palette used, obtained from [Coolors](https://coolors.co/).

## Technical characteristics of the project:

_**RPM, La casa del vinilo**_ uses the following technologies:

- [React.js](https://react.dev/) - ^18.2.0
- [Node.js](https://nodejs.org/es) - ^18.13.0
- [NPM](https://www.npmjs.com/) - ^8.19.3
- [Firebase](https://firebase.google.com/) - ^9.22.0
- [Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/) - ^5.2.3
- [materialize-css](https://materializecss.com/) - ^1.0.0-rc.2
- [Toastify](https://fkhadra.github.io/react-toastify/introduction/) - ^9.1.3
- [SweetAlert2](https://sweetalert2.github.io/) - ^11.7.5

##### Public [GitHub](https://github.com/mnparolari/RPM) Repository 
Instructions for cloning a project [here](https://docs.github.com/es/repositories/creating-and-managing-repositories/cloning-a-repository)

-------------------------

### Version

```sh
1.0.0
```

## Created by

const **Martín** = (**Nicolás**) => {
    console.log(**Parolari**)
};

**Only the beginning...**
This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
