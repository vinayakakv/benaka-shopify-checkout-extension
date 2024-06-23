import {
  reactExtension,
  useApi,
  AdminBlock,
  Link,

} from '@shopify/ui-extensions-react/admin';
import { useEffect, useState } from 'react';

// The target used here must match the target used in the extension's toml file (./shopify.extension.toml)
const TARGET = 'admin.order-details.block.render';

export default reactExtension(TARGET, () => <App />);

const getPhone = async (orderId: string) => {
  const response = await fetch("shopify:admin/api/graphql.json", {
    method: "POST",
    body: JSON.stringify({
      query: `
      query($id: ID!) {
        order(id: $id) {
          customer {
            phone
          }
        }
      }
      `,
      variables: {
        id: orderId
      }
    })
  })
  const json = await response.json()
  console.log({ json })
  return json.data?.order.customer.phone || "+919113686752"
}

function App() {
  // The useApi hook provides access to several useful APIs like i18n and data.
  const { data } = useApi(TARGET);
  const [orderId] = data.selected.map(it => it.id);
  const [phone, setPhone] = useState(
    ""
  )
  console.log({ orderId, phone })

  useEffect(() => {
    getPhone(orderId).then(phone => setPhone(phone))
  }, [orderId])


  return (
    // The AdminBlock component provides an API for setting the title of the Block extension wrapper.
    <AdminBlock title="Chat in Whatsapp">
      <Link to={`https://wa.me/${phone}`} target="_blank">Click to chat with {phone}</Link>
    </AdminBlock>
  );
}
