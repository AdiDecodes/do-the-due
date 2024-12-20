# DoTheDue

DoTheDue is a lightweight JavaScript library designed to display customizable information messages on websites with pending payment dues for their development. Ideal for web developers and agencies, DoTheDue provides an easy-to-integrate solution to notify website owners about outstanding payments. With flexible styling and behavior options, it seamlessly blends with any website design, ensuring effective communication without disrupting the user experience.

# Get Started

![Logo](https://res.cloudinary.com/domebtgvk/image/upload/v1734608513/dothedue-banner_evtxyi.svg)

## Appendix

- [Demo](#1-demo)
- [Installation](#2-installation)
- [Import](#3-import)
- [Component Breakdown](#4-component-breakdown)
- [Usage](#5-usage)
- [Authors](#6-authors)
- [License](#7-license)
- [BMAC 😉](#8-buy-me-a-coffee-😉)

## 1. Demo

View the working demo for this package

[Codesandbox](https://codesandbox.io/p/github/AdiDecodes/DoTheDue-Example/main?import=true)

## 2. Installation

Install dothedue with npm / yarn / bun

```bash
  npm install dothedue //For npm
  yarn add dothedue // For Yarn
  bun add dothedue // For Bun
```

## 3. Import

Use ES6 Module Import to import the package components

```bash
import { useOverlay } from 'dothedue';
import { Overlay } from 'dothedue';
```

## 4. Component Breakdown

This only consist of 2 main components i.e :

**useOverlay** - This hook can be used to pass the data object to the Renderer Component.  
**Overlay** - This is the main renderer component that is used to render the UI on the webpage.

## 5. Usage

**useOverlay** Hook expects an object as argument which should consist of following pair of data.

### Properties

- **title** (string, required)  
  Title to display

- **description** (string, required)  
  Description to display

- **style** (number, 1 to 4)  
  Background style for Renderer UI

- **amount** (string)  
  Amount, e.g. '₹20000' or '2000'

- **contact** (object)  
  It can include sub-properties:

  - **name** (string)  
    Name of the developer
  - **email** (string)  
    Email of the developer
  - **phone** (string)  
    Phone number of the developer

- **fullscreen** (boolean)  
  Determines whether the message will block the main website

- **bottomtitle** (string)  
  If `fullscreen` is false, this will show up on the bottom-right of the screen as a button.

- **callToAction** (object)  
  It can include sub-properties:
  - **text** (string)  
    Text that will show up on the Call-to-Action button
  - **link** (string)  
    Link for payment, e.g. Paytm

## Example for data object

```javascript
	const data = {
		title: 'Hi There! Whoever is Reading',
		description: "I've started this project for Mr.X in Feb 2022 and its been more than 2 years the payment for this project is still pending.",
		style: 2,
		amount: '₹1000',
		contact: {
			name: 'Mr. X',
			email: 'name@mail.com',
			phone: '1234567890',
		},
		fullscreen: false,
		bottomtitle: 'Please help me with this',
		callToAction: {
			text: 'Pay Now',
			link: 'https://www.paypal.com',
		},
	};
```

**Overlay** This is a Renderer component that will be placed along with your main component of React.

```javascript
<>
	<Overlay />
	<MainComponent />
</>
```

**Note** - If you want that Overlay should be visible across all pages, make sure to include it in your router page (e.g react-router-dom).

## 6. Authors

- [@adidecodes](https://www.github.com/adidecodes)

## 7. License

MIT License

Copyright (c) 2024 Aditya Singh

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## 8. Buy Me a Coffee 😉

#### If you like this package, show your support & love!

[![buy me a coffee](https://res.cloudinary.com/customzone-app/image/upload/c_pad,w_200/v1712840190/bmc-button_wl78gx.png)](https://www.buymeacoffee.com/adidecodes)
