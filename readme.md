# Resend Node.js SDK

Node.js library for the Resend API.

## Install

```bash
npm install resend
# or
yarn add resend
```

## Setup

First, you need to get an API key, which is available in the [Resend Dashboard](https://resend.com).

```js
import { Resend } from 'resend';
const resend = new Resend('re_123');
```

## Usage

Send your first email:

```js
await resend.sendEmail({
  from: 'you@example.com',
  to: 'user@gmail.com',
  subject: 'hello world',
  text: 'it works!',
});
```

## Send email using HTML

Send an email custom HTML content:

```js
await resend.sendEmail({
  from: 'you@example.com',
  to: 'user@gmail.com',
  subject: 'hello world',
  html: '<strong>it works!</strong>',
});
```

## Send email using React

Start by creating your email template as a React component.

```jsx
import React from 'react'

export default function EmailTemplate(props) {
  const { firstName, product } = props

  return (
    <div>
      <h1>Welcome, {firstName}!</h1>
      <p>Thanks for trying {product}. We’re thrilled to have you on board.</p>
    </div>
  )
}
```

Then import the template component and pass it to the `react` property.

```jsx
import EmailTemplate from '../components/EmailTemplate'

await resend.sendEmail({
  from: 'you@example.com',
  to: 'user@gmail.com',
  subject: 'hello world',
  react: <EmailTemplate firstName="John" product="MyApp" />,
});
```

## License

MIT License